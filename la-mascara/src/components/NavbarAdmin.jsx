"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import cookie from 'js-cookie'

const NavbarAdmin = (props) => {
    const router = useRouter()
    async function onSubmit(event) {
        event.preventDefault()
        cookie.remove('admin')
        router.push('/admin')
      }

    return (
        <nav className='mt-4 flex items-center justify-between'>
            <div>
                <Link href="/admin/mascaras">
                    <span className={`text-lg font-bold hover:text-darkpurple mr-16 ml-8 ${props.currentPage === 'Personajes' ? 'text-darkpurple' : 'text-tropicalindigo'}`}>Personajes</span>
                </Link>
                <Link href="/admin/participantes">
                    <span className={`text-lg font-bold hover:text-darkpurple mx-16 ${props.currentPage === 'Participantes' ? 'text-darkpurple' : 'text-tropicalindigo'}`}>Participantes</span>
                </Link>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <button type="submit" className="text-white px-6 py-2 bg-darkpurple mr-8 rounded-lg hover:bg-tropicalindigo">Logout</button>
                </form>
            </div>
        </nav>
    );
}

export default NavbarAdmin;