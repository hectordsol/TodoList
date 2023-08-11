import axios from 'axios';

const dbURL = "http://localhost:4000";

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
export {getAllToDo}