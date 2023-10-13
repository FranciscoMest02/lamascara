import {NextResponse} from 'next/server'
import { connectDB } from '@/utils/db';
import Mascara from '@/models/Mascara';

export async function  GET() {
    await connectDB()
    const mascaras = await Mascara.find()
    return NextResponse.json(mascaras);
}

export async function POST(req) {
    console.log('api')
    await connectDB()

    const data = await req.json()

    const resp = await data.map(async (mask) => {
        if (mask.changed){
            console.log(mask.changed)
            console.log(mask._id)
            const mascara = await Mascara.findById(mask._id.toString())
            mascara.alive = mask.alive
            await mascara.save()
        }
    })

    return NextResponse.json(resp);
}