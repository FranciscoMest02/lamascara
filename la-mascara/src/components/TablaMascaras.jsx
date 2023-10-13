import TarjetaMascara from './TarjetaMascaras';
import { connectDB } from '@/utils/db';
import Mascara from '@/models/Mascara';

async function loadMascaras() {
  connectDB()
  const mascaras = await Mascara.find()
  return mascaras
}

async function TablaMascara() {
  const data = await loadMascaras()
    return (
        <div className="mt-28 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {data.map((item) => (
              <div key={item._id} className="grid justify-center mb-16">
                <TarjetaMascara name={item.name} img={item.img} votes={item.votes} />
              </div>
            ))}
      </div> 
    );
}

export default TablaMascara;