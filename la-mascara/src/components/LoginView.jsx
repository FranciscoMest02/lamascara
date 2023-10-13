"use client"

import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import React from 'react';
import cookie from 'js-cookie'

const LoginView = () => {
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const username = formData.get('mail');
        const password = formData.get('password');


        // Verify the username and password
        if (username === 'fazfaz' && password === 'pollo') {
            cookie.set('admin', '12345')
            router.push('/admin/participantes')
            
        } else {
            // Display an error message or perform other actions for invalid credentials
            alert('Invalid username or password');
        }
      }

    return (
        <div className='inline-block bg-white px-12 py-12 rounded-2xl'>
            <p className='text-2xl bold font-bold'>¡Bienvenido de vuelta!</p>
            <p className='text-lg'>Inicia sesión para acceder a tu cuenta</p>

            <form onSubmit={onSubmit}>
                <div className='mt-8'>
                    <label htmlFor="mail" className='block font-bold pb-2'>Usuario</label>
                    <input id="mail" type="text" name="mail" placeholder='' className='w-96 border border-gray-500 rounded-md px-2 py-2'/>
                </div>
                
                <div className='mt-8'>
                    <label htmlFor="password" className='block font-bold pb-2'>Contraseña</label>
                    <input id="password" type="password" name="password" placeholder='Escribe tu contraseña' className='w-96 border border-gray-500 rounded-md px-2 py-2' />
                </div>

                <div className='flex justify-center mt-16 '>
                    <button type="submit" className='border px-16 py-2 rounded-xl bg-blue-700 text-white'>Iniciar sesión</button>
                </div>
            </form>

        </div>
    );
}

export default LoginView;