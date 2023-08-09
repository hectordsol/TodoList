const {Router}=require('express');
const route= Router();

route.get('/', (req, res)=>{
    res.json({message: 'Hi there..'});
});
module.exports =route;