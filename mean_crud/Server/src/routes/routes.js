const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

//users routes
router.get('/', user.getAllUsers);
router.get('/:id', user.getUser);
router.put('/:id', user.editUser);
router.delete('/:id', user.deleteUsers);
router.post('/', user.createUsers);


module.exports = router;