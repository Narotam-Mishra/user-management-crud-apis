// starting point of the application index.js (main file)

const express = require('express');
const dbConnect = require('./db/connectDB');
const userRoute = require('./routes/userRoutes');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const cors = require('cors');
const server = express();

// middleware setup
server.use(express.json());

// cors setup :- Allow all origins with Default of cors(*)
server.use(cors());

// to server static html file
server.use(express.static('./public'));

// home route
server.get('/', (req,res) => {
    res.send('Welcome to User Management CRUD App');
})

// API route setup
server.use('/api/v1/user', userRoute);

// Middleware setup for invalid route
server.use(notFound);

const portNo = process.env.PORT || 7272

// start DB
const startService = async () => {
    try {
        await dbConnect(process.env.mongoUrl)
        .then(() => console.log('DB Connected'))
        const httpServer = server.listen(0, () => {
            const actualPort = httpServer.address().port;
            console.log(`Server running on port: ${actualPort}...`);
        })

        // Return the HTTP server instance for closing later
        return httpServer;
    } catch (error) {
        console.log('Error connecting to DB',error);
    }
}

startService();


// Export the server and the function to close it
module.exports = { server, startService };