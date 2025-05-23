import express from 'express';
import { connectDb } from '@mono/sharedUtils'; // Make sure this path is correct
import authRoutes from './routes/auth-routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Parse JSON bodies (important for req.body)
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

// Register auth routes at /api
app.use('/api', authRoutes);

// Connect to DB
(async () => {
  await connectDb(); // Only if connectDb is async
})();

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
