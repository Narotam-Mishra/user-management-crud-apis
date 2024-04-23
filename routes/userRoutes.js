
// Route logic for APIs call

const express = require('express')
const router = express.Router();

const { registerUser, updateUser, deleteUser, getUserById, getAllUsers } = require('../controllers/userControllers');

router.route('/').post(registerUser);
router.route('/').get(getAllUsers);
router.route('/:userId').get(getUserById);
router.route('/:userId').patch(updateUser);
router.route('/:userId').delete(deleteUser);

module.exports = router;