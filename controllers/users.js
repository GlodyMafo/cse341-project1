const mongodb = require('../data/database.js');
const ObjectId = require ('mongodb').ObjectId;

const getAll = async (req, res)=>{

     // swaggerAutogen.tags=["Users"]


const result = await mongodb.getDatabase().db().collection('users').find();

result.toArray().then((users)=>{
res.setHeader('content-type','application/json');
res.status(200).json(users);

})

}

const getSingle = async (req, res)=>{

     // swaggerAutogen.tags=["Users"]


    const userId = new ObjectId(req.params.id);
const result = await mongodb.getDatabase().db().collection('users').find({_id : userId});

result.toArray().then((users)=>{
res.setHeader('content-type','application/json');
res.status(200).json(users[0]);

})

}


const createUser = async (req, res)=> {

    // swaggerAutogen.tags=["Users"]

const user = {
  email:req.body.email,
  username:req.body.username,
  name:req.body.name,
  ipadress:req.body.ipadress

}

const response = await mongodb.getDatabase().db().collection('users').insertOne(user);

if(response.acknowledged){
    res.status(204).send();
}
else{
    res.status(500).json(response.error || `can't create the user some error occured`)
}

}


const updateUser = async (req, res)=> {

     // swaggerAutogen.tags=["Users"]

const userId = new ObjectId (req.params.id);
const user = {
  email:req.body.email,
  username:req.body.username,
  name:req.body.name,
   ipadress:req.body.ipadress

}

const response = await mongodb.getDatabase().db().collection('users').replaceOne({_id:userId}, user);

if(response.modifiedCount){
    res.status(204).send();
}
else{
    res.status(500).json(response.error || `can't update the user some error occured`)
}

}

const deleteUser = async (req,res)=>{

     // swaggerAutogen.tags=["Users"]

    const userId = new ObjectId (req.params.id);
    const response = await mongodb.getDatabase().db().collection('users').deleteOne({_id:userId});
    if(response.deletedCount > 0){
    res.status(204).send();
}
else{
    res.status(500).json(response.error || `can't delete this user some error occured`)
}
}

module.exports ={
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
}