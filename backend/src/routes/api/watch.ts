import express from 'express';
import { Request, Response } from 'express';
import { FirebaseError } from 'firebase-admin';
import { db } from '../../db';
import { isFirebaseError } from '../../types/guards';

/* Temporary fake DBs */
import { watchDB, watchListDB, articleDB } from '../../db';

const router = express.Router();

/**
 * Get watch based on id
 * @route GET /api/watch/<id>
 */
router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  return res.json(watchDB.find((watch) => watch.id === id));
});
/**
 * Get all trending watch lists
 * @route GET /api/watch/list/all
 */
router.get('/list/all', async (req: Request, res: Response) => {
  return res.json(watchListDB);
});
/**
 * Get trending watch list based on id
 * @route GET /api/watch/list/:id
 */
router.get('/list/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  return res.json(watchListDB.find((watchList) => watchList.id === id));
});
/**
 * Get watch news articles
 * @route GET /api/watch/article/all
 */
router.get('/article/all', async (req: Request, res: Response) => {
  return res.json(articleDB);
});
module.exports = router;
