"use client"

import React, { useState } from 'react';
import MascaraCircular from './MascaraCircular';
import { deleteUser, updateUser } from '@/lib/actions';
import { useRouter } from 'next/navigation';


function UserEdition( props ) {
    const parti = props.parti
    const mascaras = props.mascaras
    const router = useRouter()

    const [action, setAction] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const formData = new FormData(e.currentTarget);
        if(action === 'update'){
            await handleUpdated(formData)
        } else if (action === 'delete'){
            await handleDelete(formData)
        }
    };

    const handleUpdated = async (formData) => {
        const id = formData.get('id');
        const name = formData.get('name');
        const mask1 = formData.get('mask1');
        const mask2 = formData.get('mask2');

        const dataToUpdate = {
            id: id,
            name: name,
            mask1: mask1,
            mask2: mask2,
        };

        const res =  await updateUser(dataToUpdate)
        
        if(res.status == 200){
            router.refresh()
            router.push('/admin/participantes')
        }
    }

    const handleDelete = async (formData) => {
        const id = formData.get('id');

        const res =  await deleteUser(id)
        
        if(res.status == 200){
            router.refresh()
            router.push('/admin/participantes')
        }
    }

    return (
        <>  
            <div className='grid justify-center'>
                <p className="font-bold text-6xl mt-8">{parti.name}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid justify-center mt-16 '>
                    <label htmlFor="name" className='block font-bold pb-2'>Nombre</label>
                    <input id="name" type="text" name="name" placeholder={parti.name} className='w-96 border border-gray-500 rounded-md px-2 py-2'/>
                </div>

                <div className="grid grid-cols-4 mt-16 w-full justify-items-center">
                    <MascaraCircular name={parti.masks[0].name} img={parti.masks[0].img} alive={parti.masks[0].alive} />
                    <div className='grid m-8'>
                        <label htmlFor="mask1" className='text-xl text-tekhelet'>Escoge una nueva mascara:</label>
                        <select name="mask1" id="mask1" defaultValue={parti.masks[0].name}>
                            {mascaras.map((item) => (
                                <option key={item._id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <MascaraCircular name={parti.masks[1].name} img={parti.masks[1].img} alive={parti.masks[1].alive} />
                    <div className='grid  m-8'>
                        <label htmlFor="mask2" className='text-xl text-tekhelet'>Escoge una nueva mascara:</label>
                        <select name="mask2" id="mask2" defaultValue={parti.masks[1].name}>
                            {mascaras.map((item) => (
                                <option key={item._id} value={item.name}>{item.name}</option>
                                ))}
                        </select>
                    </div>
                </div>

                {/*Solo se usa para saber el id, pero esta escondido*/}                                        
                <input type="hidden" name="id" value={parti.id} />
                
                <div className='flex justify-around mt-16 '>
                    <button type="submit" disabled={isLoading} onClick={() => {setAction('delete')}} className='px-16 py-2 rounded-xl bg-red-700 hover:bg-red-500 text-white'>Borrar</button>
                    {isLoading && <p>Actualizando...</p>}
                    <button type="submit" disabled={isLoading} onClick={() => {setAction('update')}} className='text-white px-16 py-2 bg-darkpurple mr-8 rounded-xl hover:bg-tropicalindigo'>Actualizar</button>
                </div>
            </form>
        </>    
    );
}

export default UserEdition;