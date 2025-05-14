import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Global Middleware................
app.use(express.json());
// app.use()

app.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to home page' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
