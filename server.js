import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import budgetRoutes from './routes/budgetRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';
import categoriesRoutes from './routes/categoryRoutes.js';
import { authRouter } from './routes/authRoutes.js';
import configureExpressSession from './middlewares/expressSession.js';

// Initialize express app
const app = express();

// Config dotenv
dotenv.config();

// Connect to Database
connectDB();

// Middlewares
app.use(express.json());
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));
app.use(cookieParser());

// Configure express-session
configureExpressSession(app);

// Handle OPTIONS requests
app.options('*', cors());

// Test Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api/auth', authRouter);
app.use('/dashboard/budgets', budgetRoutes);
app.use('/dashboard/expenses', expenseRoutes);
app.use('/dashboard/categories', categoriesRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    success: false,
    message: 'Something went wrong!',
    error: err.message,
  });
});

// Port
const PORT = process.env.PORT || 7000;

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
