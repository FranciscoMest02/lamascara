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

  const aliveFilter = (array) => {
    return array.filter(
      (item) => item.alive
    )
  }

  const deathFilter = (array) => {
    return array.filter(
      (item) => !item.alive
    )
  }

  const aliveMasks = aliveFilter(data)
  const deadMasks = deathFilter(data)

    return (
      <>
        <div className='flex justify-around'>
          <p className='mt-20 text-4xl font-bold text-darkpurple'>Mascaras participando</p>
        </div>
        <div className="mt-8 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
              {aliveMasks.map((item) => (
                <div key={item._id} className="grid justify-center mb-16">
                  <TarjetaMascara name={item.name} img={item.img} votes={item.votes} />
                </div>
              ))}
        </div> 
        <div className='flex justify-around'>
          <p className='mt-20 text-4xl font-bold text-darkpurple'>Mascaras eliminadas</p>
        </div>
        <div className="mt-8 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {deadMasks.map((item) => (
              <div key={item._id} className="grid justify-center mb-16">
                <TarjetaMascara name={item.name} img={item.img} votes={item.votes} />
              </div>
            ))}
      </div>
      </>
    );
}

export default TablaMascara;