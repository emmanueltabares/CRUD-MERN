import { noteService } from '../services/note';

class Note {

    async getNote(req, res){
        const {id} = req.params;
        const notes = [];

        if(id) {
            try {
                const note = await noteService.get(id);
                notes.push(note);
            } catch (error) {
                console.error(error)
            }
            
        } else {
            try {
                const note = await noteService.get();
                notes.push(note);
            } catch (error) {
                console.error(error)
            }  
        }

        res.json(notes)
    }
    async addNote(req, res){
        const {title, description} = req.body;
        try {
            const note = await noteService.add(title, description);
            res.json({ msg: 'Note added', data: note});
        } catch (error) {
            console.error(error)
        }
        
    }
    async updateNote(req, res){
        const {title, description} = req.body
        const {id} = req.params;

        const data = {
            title: title,
            description: description
        };

        try {
            const note = await noteService.update(id, data);
            res.json({ msg: 'Note Updated', data: note})
        } catch (error) {
            console.error(error)
        } 
    }
    async delelteNote(req, res){
        const {id} = req.params;
        try {
            await noteService.delete(id);
            res.json({ msg: 'Note Deleted'});
        } catch (error) {
            console.error(error)
        }   
    }
}

export const noteController = new Note();