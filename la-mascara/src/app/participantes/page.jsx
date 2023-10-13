import Navbar from "@/components/Navbar"
import TablaParticipantes from "@/components/TablaParticipantes"
import Mascara from "@/models/Mascara"
import Participante from "@/models/Participante"
import { connectDB } from "@/utils/db"

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
                id: mask1._id.toString(),
                name: mask1.name,
                img: mask1.img,
                alive: mask1.alive
            },
            {
                id: mask2._id.toString(),
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

export default async function Participantes() {
  const participantes = await loadPaticipantes()
  return (
    <>
      <Navbar currentPage="Participantes"/>
      <div className="grid justify-center mt-20">
        <div className="text-center">
            <div className="mb-4">
            <p className="font-bold text-6xl">Explora tu progreso</p>
            </div>
            <div>
            <p className="font-semibold text-tekhelet text-2xl">Mira el ranking con los demás jugadores</p>
            </div>
        </div>
      </div>
      <TablaParticipantes partis={participantes}/>
    </>
  )
}
