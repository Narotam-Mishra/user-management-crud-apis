// Import necessary modules
const request = require('supertest');
const { server, startService } = require('../index');
const User = require('../models/userSchema'); 

describe('User Management APIs', () => {
  let userId;
  let httpServer;

  beforeAll(async () => {
    // Start the server before tests
    httpServer = await startService();
  });

  // Add afterAll hook to close the server after all tests are done
  afterAll(() => {
    // Close the server after tests
    httpServer.close();
  });

  beforeEach(async () => {
    // Create a user before each test
    const user = new User({
      firstName: 'John',
      lastName: 'Doe',
      mobileNumber: '9876543210',
      email: 'john@example.com',
      password: 'Test@1234'
    });
    await user.save();
    userId = user._id; // Save the generated user ID for later use
  });

  afterEach(async () => {
    // Clear the database after each test
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const res = await request(server)
      .post('/api/v1/user')
      .send({
        firstName: 'Jane',
        lastName: 'Doe',
        mobileNumber: '9876543211',
        email: 'jane@example.com',
        password: 'Test@1234'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User registered successfully');
    expect(res.body.userId).toBeTruthy();
  });

  it('should get a user by ID', async () => {
    const res = await request(server)
      .get(`/api/v1/user/${userId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body._id).toEqual(userId.toString());
    expect(res.body.firstName).toBe('John');
  });

  it('should get all users', async () => {
    const res = await request(server)
      .get('/api/v1/user');

    expect(res.statusCode).toBe(200);
    expect(res.body.users.length).toBeGreaterThan(0);
  });

  it('should update a user', async () => {
    const res = await request(server)
      .patch(`/api/v1/user/${userId}`)
      .send({
        firstName: 'UpdatedName'
        // Include other fields as needed for update
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('User updated successfully');
  });

  it('should delete a user', async () => {
    const res = await request(server)
      .delete(`/api/v1/user/${userId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('User deleted successfully');
  });
});

