import Mascara from '@/models/Mascara';
import Participante from '@/models/Participante';
import { connectDB } from '@/utils/db';
import React from 'react';
import EditIcon from './EditIcon';
import Link from 'next/link';
import Image from 'next/image';

async function loadPaticipantes() {
    connectDB()
    const partis = await Participante.find()
  
    const promises = partis.map(async (parti) => {
        const mask1 = await Mascara.findById(parti.masks[0])
        const mask2 = await Mascara.findById(parti.masks[1])
        const participante = {
          id: parti._id.toString(),
          name: parti.name,
          masks: [
              {
                  id: mask1._id,
                  name: mask1.name,
                  img: mask1.img,
                  alive: mask1.alive
              },
              {
                  id: mask2._id,
                  name: mask2.name,
                  img: mask2.img,
                  alive: mask2.alive
              }
          ]
        }
  
        return participante
    })
  
    // Wait for all promises to resolve using Promise.all
    const participantsArray = await Promise.all(promises);
  
    return participantsArray;
}

async function GestorParticipantes(props) {
    const data = await loadPaticipantes()
    return (
        <>   
            {(data && data.length > 0) ? 
            (
            <div className='mx-32'>
                <div className="mt-28 grid grid-cols-4 text-brownsugar font-bold text-2xl">
                    <div className='p-4 border border-tekhelet border-2'>
                        Nombre
                    </div>
                    <div className='p-4 border border-tekhelet border-2'>
                        Mascara 1
                    </div>
                    <div className='p-4 border border-tekhelet border-2'>
                        Mascara 2
                    </div>
                    <div className='p-4 border border-tekhelet border-2'>
                        Edit
                    </div>
                </div>
                {data.map((item) => (
                    <div key={item.id} className="grid grid-cols-4 text-xl">
                        <div className='p-4 border border-tekhelet border-2 text-2xl font-bold'>
                            {item.name}
                        </div>
                        <div className='p-4 border border-tekhelet border-2'>
                            <div className='relative h-fill w-fit rounded-full overflow-hidden mb-4'>
                                <Image
                                    src={"/mascaras/" + item.masks[0].img} // Replace with the actual path to your image
                                    alt={item.masks[0].name}
                                    width={85}
                                    height={0}
                                    />
                            </div>
                            {item.masks[0].name}
                        </div>
                        <div className='p-4 border border-tekhelet border-2'>
                        <div className='relative h-fill w-fit rounded-full overflow-hidden mb-4'>
                                <Image
                                    src={"/mascaras/" + item.masks[1].img} // Replace with the actual path to your image
                                    alt={item.masks[1].name}
                                    width={85}
                                    height={0}
                                    />
                            </div>
                            {item.masks[1].name}
                        </div>
                        <div className='p-4 border border-tekhelet border-2'>
                            <Link href={"/admin/participantes/" + item.id}>
                                <EditIcon />
                            </Link>
                        </div>
                    </div>
                ))}
                
            </div>
            )
            : 
            (
            <p>No hay participantes</p>
            )}   
        </>
    );
}

export default GestorParticipantes;