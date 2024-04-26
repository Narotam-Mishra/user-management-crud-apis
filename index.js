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

// Set the port based on the environment
const portNo = process.env.NODE_ENV === 'production' ? process.env.PORT : 0;

let httpServer; // Declare a variable to store the HTTP server instance

// start backend service
const startService = async () => {
    try {
        await dbConnect(process.env.mongoUrl)
        .then(() => console.log('DB Connected'))
        httpServer = server.listen(portNo, () => {
            const actualPort = httpServer.address().port;
            console.log(`Server running on port: ${actualPort}...`);
        })

        // Return the HTTP server instance for closing later
        return httpServer;
    } catch (error) {
        console.log('Error connecting to DB',error);
    }
}

const closeService = async () => {
    try {
        if (httpServer) {
            await httpServer.close();
            console.log('Server closed.');
        }
    } catch (error) {
        console.log(error);
    }
}

startService();



// Export the server and the function to close it
module.exports = { server, startService, closeService };