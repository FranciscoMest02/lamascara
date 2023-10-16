import {NextResponse} from 'next/server'
import { connectDB } from '@/utils/db';
import Mascara from '@/models/Mascara';

export async function POST(req, { params }) {
    try {
        //tenemos un parametro variable para que next no haga cache
        const test = params.date
        connectDB()
        
        const data = await req.json()
        
        const resp = await data.map(async (mask) => {
            console.log(mask._id)
            const mascara = await Mascara.findById(mask._id.toString())
            mascara.alive = mask.alive
            await mascara.save()
            
        })
        
        //res.setHeader('Cache-Control', 'no-cache');
        return NextResponse.json(resp);
    } catch (e) {
        console.log(e)
        return NextResponse.json(e)
    }
}