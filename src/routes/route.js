const express = require('express');
const router = express.Router();

router.route('/').get(getAllTodo);
router.route('/addTodo').post(addTodo);