import { Schema, model, models } from "mongoose";

const participanteSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    masks: [
            {
                type: String,
                trim: true
        }
    ]
}, { 
    collection: 'participantes' 
}
)

export default models.Participante || model('Participante', participanteSchema)