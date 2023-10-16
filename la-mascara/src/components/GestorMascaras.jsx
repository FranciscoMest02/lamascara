"use client"

import React from 'react';
import Image from 'next/image';
import { updateMasks } from '@/lib/actions';
import { useRouter } from 'next/navigation';

function GestorMascaras(props) {
    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        const checkboxValues = [];
    
        //leemos el valor que tienen todos los checkbox
        data.forEach((item) => {
            const inputElement = e.target.querySelector(`input[name="${item._id}"]`);
            if (inputElement) {
                // Use checked if the user modified the checkbox
                // Otherwise, use defaultChecked to get the initial value
                const state = inputElement.checked !== inputElement.defaultChecked ? inputElement.checked : inputElement.defaultChecked;
                const changed = inputElement.checked !== inputElement.defaultChecked
                if (changed){
                    const values = {
                        '_id': item._id,
                        'alive': state,
                        'changed': changed
                    }
                    checkboxValues.push(values);
                }
            }
        });
    
        const res =  await updateMasks(checkboxValues)
        
        if(res.status == 200){
            router.push('/admin/mascaras')
            router.refresh()
        }
    }
    

    const data = props.mascaras
    return (
        <>   
            {(data && data.length > 0) ? 
            (
            <form onSubmit={handleSubmit}>
            <div className='mx-24'>
                <div className="mt-28 grid grid-cols-4 justify-items-center text-center">
                {data.map((item) => (
                    <div key={item._id.toString()}  className='p-4'>
                        <div className='relative h-fill w-fill max-w-fit rounded-full overflow-hidden'>
                            <Image
                                src={"/mascaras/" + item.img}
                                alt={item.name}
                                width={150}
                                height={0}
                                />
                        </div>
                        <p className={'font-bold text-xl py-4' + (item.alive ? ' text-green-400' : ' text-red-400')}>{item.name}</p>
                        <div>
                            <input id={item._id} name={item._id} type="checkbox" defaultChecked={item.alive}></input><span className={'pl-2 font-bold'} >Vivo</span>
                        </div>
                    </div>
                ))}
                </div>
                
            </div>

            <div className='flex justify-around mt-16 mb-8'>
                <button type='submit' className={'text-white px-16 py-2 bg-darkpurple mr-8 rounded-xl hover:bg-tropicalindigo'}>Guardar</button>
            </div>
            </form>
            )
            : 
            (
            <p>No hay participantes</p>
            )}   
        </>
    );
}

export default GestorMascaras;