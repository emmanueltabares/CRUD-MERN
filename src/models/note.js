import mongoose, { model, Schema } from 'mongoose'

const noteSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true}
})

export default model('Note', noteSchema);