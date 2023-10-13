import React from 'react';
import MascaraCircular from './MascaraCircular';

const TarjetaParticipante = (props) => {
    return (
        <div className='border border-tropicalindigo border-2 rounded-xl h-fit flex flex-col p-6 text-center items-center m-8'>
            <p className='w-72 text-3xl font-bold text-tekhelet'>{props.name}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full justify-items-center">
                <MascaraCircular name={props.mask1.name} img={props.mask1.img} alive={props.mask1.alive} />
                <MascaraCircular name={props.mask2.name} img={props.mask2.img} alive={props.mask2.alive} />
            </div>
        </div>
    );
}

export default TarjetaParticipante;