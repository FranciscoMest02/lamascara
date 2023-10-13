import React from 'react';
import Link from 'next/link';

const Navbar = (props) => {
    return (
        <div className='mt-4'>
            <Link href="/">
                <span className={`text-lg font-bold hover:text-darkpurple mr-4 ml-4 md:mr-16 md:ml-8 ${props.currentPage === 'Personajes' ? 'text-darkpurple' : 'text-tropicalindigo'}`}>Personajes</span>
            </Link>
            <Link href="participantes">
                <span className={`text-lg font-bold hover:text-darkpurple mx-4 md:mx-16 ${props.currentPage === 'Participantes' ? 'text-darkpurple' : 'text-tropicalindigo'}`}>Participantes</span>
            </Link>
            {/*
            <Link href="/historial">
                <span className={`text-lg font-bold hover:text-darkpurple mx-16 ${props.currentPage === 'Historial' ? 'text-darkpurple' : 'text-tropicalindigo'}`}>Historial</span>
            </Link>
            */}
        </div>
    );
}

export default Navbar;