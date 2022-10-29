import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import asyncHandler from 'express-async-handler';
import generateHex from './generate.mjs';

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const result = '#' + generateHex() + generateHex() + generateHex();
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});