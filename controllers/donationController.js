import Donation from '../models/Donation.js';

export const createDonation = async (req, res) => {
    const { donorName, email, phone, foodDescription, quantity } = req.body;

    try {
        const newDonation = new Donation({ donorName, email, phone, foodDescription, quantity });
        await newDonation.save();
        res.status(201).json({ success: true, message: 'Donation received' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export const getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: donations });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
