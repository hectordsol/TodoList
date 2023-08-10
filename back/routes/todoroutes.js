const {Router}=require('express');
const { getTodos, saveTodo, deleteTodo, updateTodo } = require('../controllers/todoController');
const route= Router();

route.get('/', getTodos);
route.delete('/:id', deleteTodo);
route.put('/:id', updateTodo);
route.post('/', saveTodo);
module.exports =route;