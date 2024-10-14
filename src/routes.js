const express = require('express');
const { signup, login } = require('./controllers/userController');
const { getAllEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee } = require('./controllers/empController');

const router = express.Router();

// User Management
router.post('/user/signup', signup);
router.post('/user/login', login);

// Employee Management
router.get('/emp/employees', getAllEmployees);  // Changed the route to remove /api/v1 prefix
router.post('/emp/employees', createEmployee); 
router.get('/emp/employees/:eid', getEmployee); 
router.put('/emp/employees/:eid', updateEmployee); 
router.delete('/emp/employees/:eid', deleteEmployee); 

module.exports = router;