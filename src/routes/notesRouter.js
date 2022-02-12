import { Router } from 'express';
import { noteController } from '../controllers/note';

const router = Router();

router.get('/:id?', noteController.getNote);
router.post('/', noteController.addNote);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.delelteNote);

export default router;