import NavbarAdmin from '@/components/NavbarAdmin';
import GestorParticipantes from '@/components/GestorParticipantes';
import Link from 'next/link';

export const dynamic = 'force-dynamic'

export default async function AdminMascaras() {

  return (
    <div className='mb-16'>
      <NavbarAdmin currentPage="Participantes" />
      <div className="grid justify-center mt-20">
        <div className="text-center">
            <div className="mb-4">
                <p className="font-bold text-6xl">Gestor de <span className='text-tekhelet'>participantes</span></p>
            </div>
        </div>
      </div>
      <GestorParticipantes />
      <Link href="participantes/crear">
        <div className='flex justify-around mt-16 '>
          <span className={'text-white px-16 py-2 bg-darkpurple mr-8 rounded-xl hover:bg-tropicalindigo'}>Nuevo participante</span>
        </div>
      </Link>
    </div>
  );
}
