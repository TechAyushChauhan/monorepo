// main.ts
import express from 'express';
import { connectDb } from '@mono/sharedUtils';
import authRoutes from "./routes/auth-routes"

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Root test route
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

// Connect to DB
connectDb();

// Register your API routes
app.use('/api', authRoutes);

// Start server
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
