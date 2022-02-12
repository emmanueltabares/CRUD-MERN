import { Router } from 'express';
import notesRouter from './notesRouter';

const router = Router();

router.use('/api/notes', notesRouter);

export default router;