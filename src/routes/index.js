import { Router } from 'express';
import notesRouter from './notesRouter';
import asyncHandler from "express-async-handler";

const router = Router();

router.use('/api/notes', asyncHandler(notesRouter));

export default router;