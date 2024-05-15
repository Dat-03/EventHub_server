/** @format */
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/configs/connectDb');
const errorMiddleHandle = require('./src/middlewares/errorMiddleware');
const verifyToken = require('./src/middlewares/verifyMiddleware');
const authRouter = require('./src/routes/authRouter');
const userRouter = require('./src/routes/userRouter');
const eventRouter = require('./src/routes/eventRouter');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use('/auth', authRouter);
app.use('/events', verifyToken, eventRouter);
app.use('/users', verifyToken, userRouter);

connectDB();

app.use(errorMiddleHandle);

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(`Server starting at http://localhost:${PORT}`);
});