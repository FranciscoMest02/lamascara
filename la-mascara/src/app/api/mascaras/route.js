import {NextResponse} from 'next/server'
import { connectDB } from '@/utils/db';
import Mascara from '@/models/Mascara';

export async function  GET() {
    await connectDB()
    const mascaras = await Mascara.find()
    return NextResponse.json(mascaras);
}

//No se usa esta ruta, se usa la dinamica
/*
export async function POST(req, res) {
    try {
        console.log('api')
        await connectDB()
        
        const data = await req.json()
        
        const resp = await data.map(async (mask) => {
            console.log(mask._id)
            const mascara = await Mascara.findById(mask._id.toString())
            mascara.alive = mask.alive
            await mascara.save()
            
        })
        
        res.setHeader('Cache-Control', 'no-cache');
        return NextResponse.json(resp);
    } catch (e) {
        console.log(e)
        return NextResponse.json(e)
    }
}
*/