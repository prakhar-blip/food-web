import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
    donorName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    foodDescription: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Donation = mongoose.model('Donation', donationSchema);
export default Donation;
