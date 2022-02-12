import noteModel from '../models/note';

class Note {

    async get(id){
        if(id) { 
            return await noteModel.findById(id); 
        }
        return await noteModel.find();
    }
    async add(title, description){
        const note = new noteModel({title, description});
        return await note.save();
    }
    async update(id, {data}){
        return await noteModel.findByIdAndUpdate(id, data);
    }
    async delete(id){
        await noteModel.findByIdAndRemove(id);
    }
}

export const noteService = new Note();