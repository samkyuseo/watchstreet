import express from 'express';
import { Request, Response } from 'express';
import { db } from '../../db';

/* Temporary fake DBs */
import { watchDB, watchListDB, articleDB } from '../../db';
import { getFakeWatchPriceData } from '../../functions/price';

const router = express.Router();

/**
 * Get fake watch object
 * @route GET /api/watch/fake/<id>
 */
router.get('/fake/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = watchDB.find((val) => (val.id = id));
  return res.json(result);
});

/**
 * Get watch specs based on id
 * @route GET /api/watch/specs/<id>
 */
router.get('/specs/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const docRef = db.collection('watches').doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      return res.status(404).json({ message: 'Document missing.' });
    }

    return res.json(doc.data());
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});
/**
 * Get watch price data base on id
 * @route GET /api/watch/price/<id>
 */
router.get('/price/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  return res.json(getFakeWatchPriceData());
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
