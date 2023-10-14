
import { useRouter } from 'next/navigation';
import NavbarAdmin from '@/components/NavbarAdmin';
import GestorMascaras from '@/components/GestorMascaras';

import Mascara from '@/models/Mascara';
import { connectDB } from '@/utils/db';

export const dynamic = 'force-dynamic'

async function loadMascaras() {
  connectDB()
  const mascaras = await Mascara.find()

  const plainMascaras = mascaras.map((mascara) => {
    return {
      _id: mascara._id.toString(),
      id: mascara.id,
      name: mascara.name,
      alive: mascara.alive,
      votes: mascara.votes,
      img: mascara.img
    }
  })

  return plainMascaras
}

export default async function AdminMascaras() {
  const mascaras = await loadMascaras()

  return (
    <>
      <NavbarAdmin currentPage="Personajes" />
      <div className="grid justify-center mt-20">
        <div className="text-center">
            <div className="mb-4">
                <p className="font-bold text-6xl">Gestor de <span className='text-tekhelet'>personajes</span></p>
            </div>
        </div>
      </div>
      <GestorMascaras mascaras={mascaras}/>
    </>
  );
}
