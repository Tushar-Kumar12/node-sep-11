const users=require('../users.json')
const fs=require('fs')

function getAllUsers(req,res){
    res.json(users)
}

function getParticularUser(req,res){
    let id=parseInt(req.params.id)
    let user =users.find((user)=> user.id===id)
    res.json(user)
}

function addUser(req,res){
    console.log(req.body)
    req.body.id=users.length+1
    users.push(req.body)
    console.log(req.body)
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        if(err)
            console.log(err)
        else
            res.json("add successfully")
    })
}

function updateUser(req,res){
    let id=params(req.body.id)
    console.log(id)
    let index=users.findIndex((user)=>user.id===id)
    users[index].first_name="Tushar"
    fs.writeFile('users.json',JSON.stringify(users),(err)=>
    {
        if(err)
            console.log(err)
        else
            res.json('update successfully')
    })
}

module.exports={
    getAllUsers,
    getParticularUser,
    addUser,
    updateUser
}
