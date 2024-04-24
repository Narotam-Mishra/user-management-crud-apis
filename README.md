## [user-management-apis-backend](https://user-management-crud-apis-backend.onrender.com/)

### Setup
- Started by initializing a new Node.js project and installing Express.js to create your backend server. You can use npm init to initialize your project and npm install express to install Express.js.

- To start and run the Server use this command ```npm install && npm run dev```

- To test the app use this command  ```npm test```

### Database Integration
- Choosen a database system (e.g., MongoDB) and integrated it with the Node.js application then and set up database connection logic in your Node.js application by following below steps :

1. Import connectDB.js from db
2. Invoke in start()
3. setup .env in the root
4. Add mongoURL with correct value

### Routers
- [userRoutes.js]

### User Model
- [userSchema.js]

### Implemented CRUD APIs (Controllers)
- Created endpoints for performing CRUD operations on users. Defined routes for creating, reading, updating, and deleting users, and implemented corresponding controller functions to handle these operations.

- [Register User](https://user-management-crud-apis-backend.onrender.com/api/v1/user)
- [Get All Users](https://user-management-crud-apis-backend.onrender.com/api/v1/user)
- [Get Single User](https://user-management-crud-apis-backend.onrender.com/api/v1/user/66280e6cdbaeae095f3f3a3f)
- [Update User](https://user-management-crud-apis-backend.onrender.com/api/v1/user/66281484cfcfe8f438c98b56)
- [Delete User](https://user-management-crud-apis-backend.onrender.com/api/v1/user/66281484cfcfe8f438c98b56)

### Written Test Cases
- Used a testing framework Jest to write test cases for API endpoints. Written tests to ensure that each endpoint behaves as expected and handled various scenarios (e.g., success cases, error cases, validation).

### Tested all Book APIs using Postman
- [Postman Collection Link](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)

### Dockerize the Application
- Dockerized Node.js application by creating a Dockerfile that specifies the Docker image configuration. Build the Docker image and test it locally to ensure that your application runs correctly within a Docker container.

- Note - I have used local environment URL (mongodb://localhost:27017/mydb.user-management-apis) for MongoDB in dockerfile

### CI/CD Pipelines
- Set up CI/CD pipelines using a CI/CD service like GitHub Actions. Configure CI/CD pipeline to automatically run tests on each code push and deploy the application to a staging or production environment.

### Error Handling and Validation
- Implemented proper error handling and validation logic in your API endpoints. Used middleware functions to handle errors and validate incoming requests to ensure data integrity and security.

### Documented API Endpoints using Docgen library by following below steps :-
- [Docgen Library](https://github.com/thedevsaddam/docgen)
- Export Postman Collection
- Make sure the postman's collection and windows_amd64.exe should reside in same folder 
- Run below command using command prompt
- windows_amd64 build -i user-management-crud-apis.postman_collection.json -o index.html
- A index.html file will be generated then place place that file under public folder
- Use this code to host static html file ```server.use(express.static('./public'));```

# Deployed the backend app on Render
- [Link](https://user-management-crud-apis-backend.onrender.com/)