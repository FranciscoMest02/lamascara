import React from 'react';
import Image from 'next/image';

const TarjetaMascara = (props) => {
    return (
        <div className='border border-tropicalindigo border-2 rounded-xl w-fit h-96 flex flex-col'>
            <div className='relative' style={{ paddingBottom: '60%' }}>
              {/* 60% represents the desired aspect ratio (height/width) */}
              <Image
                src={"/mascaras/"+ props.img}
                alt={props.name}
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
              />
            </div>
              <div className='flex flex-col justify-between flex-grow h-full p-4'>
                <p className='w-72 text-4xl font-bold'>{props.name}</p>
                <p className='w-72 pt-4'><span className='text-tropicalindigo text-3xl font-bold'>{props.votes}</span><br/> personas votaron por este personaje</p>
              </div>
        </div>
    );
}

export default TarjetaMascara;