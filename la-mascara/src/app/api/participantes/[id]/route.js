import {NextResponse} from 'next/server'
import { connectDB } from '@/utils/db';
import Participante from '@/models/Participante';
import Mascara from '@/models/Mascara';

export async function GET() {
    await connectDB()
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
    return NextResponse.json(participante)
}

export async function PUT(req, {params}) {
    await connectDB()
    const data = await req.json()
    const parti = await Participante.findById(params.id)

    
    if(!parti){
        return NextResponse.json({
            status: 404,
            body: { error: 'Participant not found' },
        });
    }

    const mask1Ant = await Mascara.findById(parti.masks[0])
    const mask2Ant = await Mascara.findById(parti.masks[1])
    const mask1Des = await Mascara.findOne({'name': data.mask1})
    const mask2Des = await Mascara.findOne({'name': data.mask2})
    
    parti.id = parti._id.toString();
    parti.name = data.name == '' ? parti.name : data.name
    parti.masks[0] = mask1Des._id.toString()
    parti.masks[1] = mask2Des._id.toString()

    await parti.save();

    mask1Ant.votes = mask1Ant.votes - 1 < 0 ? 0 : mask1Ant.votes - 1
    //mask1Ant.id = mask1Ant._id.toString();
    mask2Ant.votes = mask2Ant.votes - 1 < 0 ? 0 : mask2Ant.votes - 1
    //mask2Ant.id = mask2Ant._id.toString();
    mask1Des.votes = mask1Des.votes + 1
    //mask1Des.id = mask1Des._id.toString();
    mask2Des.votes = mask2Des.votes + 1
    //mask2Des.id = mask2Des._id.toString();

    await mask1Ant.save();
    await mask2Ant.save();
    await mask1Des.save();
    await mask2Des.save();
  
    return NextResponse.json({
        status: 200,
        body: parti,
    });
}

export async function DELETE(req, {params}) {
    await connectDB()
    //const data = await req.json()
    const parti = await Participante.findById(params.id)

    if(!parti){
        return NextResponse.json({
            status: 404,
            body: { error: 'Participant not found' },
        });
    }

    const mask1 = await Mascara.findById(parti.masks[0])
    const mask2 = await Mascara.findById(parti.masks[1])

    mask1.votes = mask1.votes - 1 < 0 ? 0 : mask1.votes - 1
    mask2.votes = mask2.votes - 1 < 0 ? 0 : mask2.votes - 1

    await mask1.save()
    await mask2.save()

    parti.deleteOne({_id: params.id})

    return NextResponse.json({
        status: 200,
        body: {
            success: 'Participant deleted'
        }
    })
}