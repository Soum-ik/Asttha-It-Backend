import express from 'express';
import { dbConnection } from './libs/dbConnection';
import { PORT } from './config/config';
import router from './router/router';

const server = express();

// Middleware to parse JSON requests
server.use(express.json());

// Route handling
server.use('/api/v1', router);

server.get("/", async (req, res) => {
    res.send("Welcome to the backend of Asttha It Solutions");
});

server.listen(PORT, async () => {
    try {
        await dbConnection();
        console.log(`Application listening on port ${PORT}`);
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1);
    }
});
