import React from 'react';
import Image from 'next/image';

const MascaraCircular = (props) => {
    return (
        <div>
            <div className='relative h-fill w-fill max-w-fit rounded-full overflow-hidden'>
                <Image
                    src={"/mascaras/" + props.img} // Replace with the actual path to your image
                    alt={props.name}
                    width={150}
                    height={0}
                    />
            </div>
            <div className='grid justify-center w-fill mt-4'>
                <p className={(props.alive ? 'text-green-400' : 'text-red-400') + ' font-bold text-xl'}>{props.name}</p>
            </div>
        </div>
    );
}

export default MascaraCircular;