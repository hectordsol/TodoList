import axios from 'axios';

const dbURL = "https://todolist-mnux.onrender.com";

const getAllToDo = (setToDo) =>{
    axios
    .get(dbURL)
    .then(({data}) =>{
        console.log('data -- :',data);
        setToDo(data);
    }).catch((error)=>{
        console.log(error)
    })
}
const addToDo = (text, setText, setToDo)=>{
    axios
    .post(dbURL,{text})
    .then((data)=>{
        console.log(data);
        setText("");
        getAllToDo(setToDo);
    })
}

const updateToDo = (todoID, text, setText, setToDo, setIsUpdating)=>{
    axios
    .put(`${dbURL}/${todoID}`,{text})
    .then((data)=>{
        console.log(data);
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo);
    })
}
const deleteToDo = (todoID, setToDo)=>{
    axios
    .delete(`${dbURL}/${todoID}`)
    .then((data)=>{
        console.log(data);
        getAllToDo(setToDo);
    })
}
export {getAllToDo, addToDo, updateToDo, deleteToDo}