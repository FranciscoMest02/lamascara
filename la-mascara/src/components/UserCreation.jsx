"use client";

import React, { useState } from 'react';
import { createUser } from '@/lib/actions';
import { useRouter } from 'next/navigation';

function UserCreation( props ) {
    const router = useRouter()
    const mascaras = props.mascaras
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name')
        const mask1 = formData.get('mask1')
        const mask2 = formData.get('mask2')

        const dataCreation = {
            name: name,
            mask1: mask1,
            mask2: mask2,
        };
        const res =  await createUser(dataCreation)
        
        if(res.status == 200){
            router.refresh()
            router.push('/admin/participantes')
        }

    }

    return (
        <>  
            <div className='grid justify-center'>
                <p className="font-bold text-6xl mt-8">Nuevo usuario</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid justify-center mt-16 '>
                    <label htmlFor="name" className='block font-bold pb-2'>Nombre</label>
                    <input id="name" type="text" name="name" className='w-96 border border-gray-500 rounded-md px-2 py-2'/>
                </div>

                <div className="grid grid-cols-2 mt-16 w-full justify-items-center">
                    
                    <div className='grid m-8'>
                        <label htmlFor="mask1" className='text-xl text-tekhelet mb-6'>Escoge una mascara:</label>
                        <select name="mask1" id="mask1">
                            {mascaras.map((item) => (
                                <option key={item._id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className='grid  m-8'>
                        <label htmlFor="mask2" className='text-xl text-tekhelet mb-6'>Escoge una mascara:</label>
                        <select name="mask2" id="mask2">
                            {mascaras.map((item) => (
                                <option key={item._id} value={item.name}>{item.name}</option>
                                ))}
                        </select>
                    </div>
                </div>
                
                <div className='flex justify-around mt-16 '>
                    <button type="submit" disabled={isLoading} className='text-white px-16 py-2 bg-darkpurple mr-8 rounded-xl hover:bg-tropicalindigo'>
                        {isLoading && <>Creando...</>}
                        {!isLoading && <>Crear</>}
                    </button>
                </div>
            </form>
        </>    
    );
}

export default UserCreation;