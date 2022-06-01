import express from 'express';
import { Request, Response } from 'express';

import { userDB } from '../../db';

const router = express.Router();

/**
 * Gets user's watch collection
 * @route GET /api/user/collection
 */
router.get('/collection', async (req: Request, res: Response) => {
  const id = '0';
  return res.json(userDB.find((user) => user.id === id)!.userWatches);
});

/**
 * Gets user's watch lists
 * @route GET /api/user/lists
 */
router.get('/lists', async (req: Request, res: Response) => {
  const id = '0';
  return res.json(userDB.find((user) => user.id === id)!.userLists);
});

module.exports = router;
