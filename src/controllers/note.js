import { noteService } from '../services/note';

class Note {

    async getNote(req, res){
        const {id} = req.params;
        const notes = [];

        if(id) {
            const note = await noteService.get(id);
            notes.push(note);
        } else {
            const note = await noteService.get();
            notes.push(note);
        }

        res.json({ msg: notes})
    }
    async addNote(req, res){
        const {title, description} = req.body;
        const note = await noteService.add(title, description);

        res.json({ msg: 'Note added', data: note});
    }
    async updateNote(req, res){
        const {title, description} = req.body;
        const {id} = req.params;
        const note = await noteService.update(id, {title, description});

        res.json({ msg: 'Note Updated', data: note})
    }
    async delelteNote(req, res){
        const {id} = req.params;
        await noteService.delete(id);

        res.json({ msg: 'Note Deleted'});
    }
}

export const noteController = new Note();