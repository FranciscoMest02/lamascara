import { Schema, model, models } from "mongoose";

const mascaraSchema = new Schema({
    id: {
        type: String,
        required: [true, "Se require el id del personaje"],
        unique: true
    },
    name: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        trim: true
    },
    votes: {
        type: Number
    },
    alive: {
        type: Boolean,
    }
}, { 
    collection: 'mascaras' 
}
) //add this to specify the collection


export default models.Mascara || model('Mascara', mascaraSchema)