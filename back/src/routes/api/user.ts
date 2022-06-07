import express from 'express';
import { Request, Response } from 'express';
import { FirebaseError } from 'firebase-admin';
import { db } from '../../db';
import { isFirebaseError } from '../../types/guards';

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

/**
 * Add email to waitlist
 * @route POST /api/user/waitlist
 */
router.post(
  '/waitlist',
  async (req: Request<{ email: string }>, res: Response) => {
    const { email } = req.body;

    /* Possible errors */
    if (email === undefined || email === '') {
      return res.status(400).send({ msg: 'Email is required!' });
    }
    /* Check for duplicates */
    const docSnapshot = await db.collection('waitlist').doc(email).get();
    if (docSnapshot.exists) {
      return res.status(409).send({ msg: 'Already added to the waitlist!' });
    }
    /* Add to database */
    try {
      const collSnapshot = await db.collection('waitlist').get();
      await db
        .collection('waitlist')
        .doc(email)
        .set({ queuePos: collSnapshot.docs.length + 1 });
      return res.status(200).send({ msg: 'Added to waitlist!' });
    } catch (error) {
      console.error('Error', error);
      return res.status(500).send({ msg: 'Server error.' });
    }
  }
);

module.exports = router;
