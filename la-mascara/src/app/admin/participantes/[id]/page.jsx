import NavbarAdmin from "@/components/NavbarAdmin";
import UserEdition from "@/components/UserEdition";
import Mascara from "@/models/Mascara";
import Participante from "@/models/Participante";
import { connectDB } from "@/utils/db";

async function loadMascaras() {
    connectDB
    const mascaras = await Mascara.find()

    const simpleMascaras = mascaras.map(mascara => ({
        _id: mascara._id.toString(), // Convert ObjectId to string
        name: mascara.name,
        img: mascara.img,
        votes: mascara.votes,
        alive: mascara.alive
      }));

    return simpleMascaras
}

async function loadParticipante(id) {
    connectDB()
    const parti = await Participante.findById(id)
    
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

    const simpleParti = {
        id: participante.id,
        name: participante.name,
        masks: participante.masks.map(mask => ({
            id: mask.id.toString(), // Convert ObjectId to string
            name: mask.name,
            img: mask.img,
            alive: mask.alive
        }))
    };

    return simpleParti
}

export default async function Page({ params }) {
    const parti = await loadParticipante(params.id)
    const mascaras = await loadMascaras()
    
    return (
        <>
            <NavbarAdmin />
            
            <UserEdition parti={parti} mascaras={mascaras} />
        </>
    )
}