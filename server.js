import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import donationRouter from './routes/donationRoute.js';  
import 'dotenv/config';

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors({
  origin: ['https://food-thrillie.netlify.app', 'https://admin-panel-fd.vercel.app'] // Allow requests from both local frontend URLs
}));

// db connection
connectDB();

// Serve static files from the 'uploads' directory
app.use('/images', express.static('uploads'));

// api endpoint
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/donate', donationRouter);
app.use('/api/donations', donationRouter);  // Ensure this route is correct

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
