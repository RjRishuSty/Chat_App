import express from 'express';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import authRoutes from './routes/auth.routes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//! Global Middleware................
app.use(express.json());
connectDB();

//! Routes...................
app.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to home page' });
});
app.use('/api',authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
