const ToDoModel = require('../models/TodoModel');

module.exports.getTodos = async (req, res) => {
    const toDos = await ToDoModel.find()
    res.send(toDos);

}
module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;
    ToDoModel
    .create({text})
    .then((todo) =>{
        console.log("ToDo created Sussefully..");
        console.log(todo);
        res.send(todo);
    })
    .catch((error)=>
    {
        console.error(error);
    });
}
module.exports.updateTodo = async (req, res) => {
    const { text } = req.body;
    const { id } = req.params;
    console.log(id,text);
    ToDoModel
    .findByIdAndUpdate(id,{text})
    .then((todo) =>{
        console.log("ToDo updated Sussefully..");
        console.log(todo);
        res.send(todo);
    })
    .catch((error)=>
    {
        console.error(error);
    });
}
module.exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    ToDoModel
    .findByIdAndDelete(id)
    .then((todo) =>{
        console.log("ToDo deleted Sussefully.. id: ",id);
        console.log(todo);
        res.send(todo);
    })
    .catch((error)=>
    {
        console.error(error);
    });
}