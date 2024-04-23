## [user-management-apis-backend](https://user-management-crud-apis-backend.onrender.com/)

### Setup
- To start and run the Server use this command ```npm install && npm run dev```
- To test the app use this command  ```npm test```

### Database Connection
1. Import connectDB.js from db
2. Invoke in start()
3. setup .env in the root
4. Add mongoURL with correct value

### Routers
- [userRoutes.js]

### User Model
- [userSchema.js]

### CRUD APIs (Controllers)
- [Register User](https://user-management-crud-apis-backend.onrender.com/api/v1/user)
- [Get All Users](https://user-management-crud-apis-backend.onrender.com/api/v1/user)
- [Get Single User](https://user-management-crud-apis-backend.onrender.com/api/v1/user/66280e6cdbaeae095f3f3a3f)
- [Update User](https://user-management-crud-apis-backend.onrender.com/api/v1/user/66281484cfcfe8f438c98b56)
- [Delete User](https://user-management-crud-apis-backend.onrender.com/api/v1/user/66281484cfcfe8f438c98b56)

### Tested all Book APIs using Postman
- [Postman Collection Link](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)

### Additionally added API documention using Docgen library
- [Docgen Library](https://github.com/thedevsaddam/docgen)
- Export Postman Collection
- Make sure the postman's collection and windows_amd64.exe should reside in same folder 
- Run below command using command prompt
- windows_amd64 build -i user-management-crud-apis.postman_collection.json -o index.html
- A index.html file will be generated then place place that file under public folder
- Use this code to host static html file ```server.use(express.static('./public'));```