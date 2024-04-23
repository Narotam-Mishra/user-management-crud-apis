// userController.js for user management APIs

const User = require('../models/userSchema');

// C - Create a new User
const registerUser = async (req, res) => {
  // Implement user registration logic
  try {
    // Extract user data from request body
    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      password,
    } = req.body;

    // Check if user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      mobileNumber,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
    // Handle errors
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// R - Read (read user details)

// get user by id (Get Single user/read single user details)
const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find user by ID in the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "No such user found" });
    }

    // Respond with user data
    res.status(200).json(user);
  } catch (error) {
    // Handle errors
    console.error("Error getting user by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get all users (Read all user details)
const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Respond with the list of users
    res.status(200).json({ users, count: users.length });
  } catch (error) {
    // Handle errors
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//U - update user details
const updateUser = async (req, res) => {
  // Implement update user logic
  try {
    const userId = req.params.userId;
    const updates = req.body;

    // Check if user with the provided ID exists
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: `No user found with this Id ${userId}` });
    }

    // Update user in the database
    await User.findByIdAndUpdate(userId, updates);

    // Respond with success message
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// D - delete user details
const deleteUser = async (req, res) => {
  // Implement delete user logic
  try {
    const userId = req.params.userId;

    // Check if user with the provided ID exists
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User not found with this Id ${userId}` });
    }

    // Delete user from the database
    await User.findByIdAndDelete(userId);

    // Respond with success message
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    registerUser, getUserById, getAllUsers, updateUser, deleteUser
}