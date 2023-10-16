import {NextResponse} from 'next/server'
import { connectDB } from '@/utils/db';
import Mascara from '@/models/Mascara';

export async function POST(req, { params }) {
    try {
        //tenemos un parametro variable para que next no haga cache
        const test = params.date
        connectDB()
        
        const data = await req.json()

        try {
            const bulkUpdates = data.map(({ _id, alive }) => ({
              updateOne: {
                filter: { _id },
                update: { $set: { alive } },
              },
            }));
        
            const result = await Mascara.bulkWrite(bulkUpdates);
            console.log(`Updated ${result.modifiedCount} documents.`);
          } catch (error) {
            console.error('Error updating documents:', error);
          }
        /*
        const resp = await data.map(async (mask) => {
            //console.log(mask._id)
            const mascara = await Mascara.findById(mask._id.toString())
            mascara.alive = mask.alive
            await mascara.save()
            
        })*/

        console.log(result)
        
        //res.setHeader('Cache-Control', 'no-cache');
        return NextResponse.json(result);
    } catch (e) {
        console.log(e)
        return NextResponse.json(e)
    }
}