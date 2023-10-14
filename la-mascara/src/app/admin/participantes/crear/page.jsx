import NavbarAdmin from "@/components/NavbarAdmin";
import UserCreation from "@/components/UserCreation";
import UserEdition from "@/components/UserEdition";
import Mascara from "@/models/Mascara";
import Participante from "@/models/Participante";
import { connectDB } from "@/utils/db";

export const dynamic = 'force-dynamic'

async function loadMascaras() {
    connectDB()
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

export default async function Page() {
    const mascaras = await loadMascaras()    
    return (
        <>
            <NavbarAdmin />
            
            <UserCreation mascaras={mascaras} />
        </>
    )
}