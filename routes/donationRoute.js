import express from 'express';
import { createDonation, getAllDonations } from '../controllers/donationController.js';

const router = express.Router();

router.post('/donate', createDonation);
router.get('/', getAllDonations);  // Correct the path to match the fetch URL

export default router;
