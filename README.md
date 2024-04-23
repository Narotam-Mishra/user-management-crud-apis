## [user-management-apis-backend]()

### Setup
```npm install && npm run dev```

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
- [Register User]()
- [Get All Users]()
- [Get Single User]()
- [Update User]()
- [Delete User]()

### Tested all Book APIs using Postman
- [Postman Collection Link]()

### Additionally added API documention using Docgen library
- [Docgen Library](https://github.com/thedevsaddam/docgen)
- Export Postman Collection
- Make sure the postman's collection and windows_amd64.exe should reside in same folder 
- Run below command using command prompt
- windows_amd64 build -i book-store-APIs.postman_collection.json -o index.html
- A index.html file will be generated then place place that file under public folder
- Use this code to host static html file ```server.use(express.static('./public'));```