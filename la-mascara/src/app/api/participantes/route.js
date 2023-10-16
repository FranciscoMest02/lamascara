import {NextResponse} from 'next/server'
import { connectDB } from '@/utils/db';
import Participante from '@/models/Participante';
import Mascara from '@/models/Mascara';

export async function GET() {
    await connectDB()
    const partis = await Participante.find()
    return NextResponse.json(partis);
}

export async function POST(req) {
    try{
        await connectDB()
        
        const data = await req.json()
        
        const mask1 = await Mascara.findOne({'name': data.mask1})
        const mask2 = await Mascara.findOne({'name': data.mask2})
        const parti = await Participante.create({
            'name': data.name,
            'masks': [
                mask1._id,
                mask2._id
            ],
        })


        await parti.save();

        mask1.votes = mask1.votes + 1
        mask2.votes = mask2.votes + 1

        await mask1.save()
        await mask2.save()

        return NextResponse.json(parti);

    } catch(e){
        console.error("Error api: ", e);
        return NextResponse.json({e})
    }
}