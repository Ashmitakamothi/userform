
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getAllUsers);

// GET a single user by ID
router.get('/:id', userController.getUserById);

// POST create a new user
router.post('/',[
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('address').optional().isString().withMessage('Address should be a string'),
    body('phoneNumber').optional().isString().withMessage('Phone number should be a string'),
    body('dateOfBirth').optional().isISO8601().toDate().withMessage('Invalid date format'),
    body('gender').optional().isString().withMessage('Gender should be a string'),
    body('nationality').optional().isString().withMessage('Nationality should be a string'),
    body('occupation').optional().isString().withMessage('Occupation should be a string'),
    body('interests').optional().isArray().withMessage('Interests should be an array of strings'),
    body('profilePicture').optional().isString().withMessage('Profile picture should be a string'),
    body('additionalNotes').optional().isString().withMessage('Additional notes should be a string'),
  ], userController.createUser);

// PUT update a user by ID
router.put('/:id', [
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('email').optional().isEmail().withMessage('Invalid email format'),
    body('address').optional().isString().withMessage('Address should be a string'),
    body('phoneNumber').optional().isString().withMessage('Phone number should be a string'),
    body('dateOfBirth').optional().isISO8601().toDate().withMessage('Invalid date format'),
    body('gender').optional().isString().withMessage('Gender should be a string'),
    body('nationality').optional().isString().withMessage('Nationality should be a string'),
    body('occupation').optional().isString().withMessage('Occupation should be a string'),
    body('interests').optional().isArray().withMessage('Interests should be an array of strings'),
    body('profilePicture').optional().isString().withMessage('Profile picture should be a string'),
    body('additionalNotes').optional().isString().withMessage('Additional notes should be a string'),
  ],userController.updateUserById);

// DELETE delete a user by ID
router.delete('/:id', userController.deleteUserById);

module.exports = router;

