const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    const customers = [
        {id:"C101",name:"Vikas Bhagat",address:"KR Puram",phone:"88776665"},
        {id:"C102",name:"Rahul",address:"Whitefield",phone:"9876543210"},
        {id:"C103",name:"Anjali",address:"Indiranagar",phone:"9988776655"},
        {id:"C104",name:"Kiran",address:"Marathahalli",phone:"9090909090"},
        {id:"C105",name:"Sneha",address:"BTM",phone:"8888888888"},
        {id:"C106",name:"Rohit",address:"Jayanagar",phone:"7777777777"},
        {id:"C107",name:"Priya",address:"HSR Layout",phone:"6666666666"},
        {id:"C108",name:"Amit",address:"Hebbal",phone:"9999999999"},
        {id:"C109",name:"Pooja",address:"Yelahanka",phone:"8887776665"},
        {id:"C110",name:"Arjun",address:"Electronic City",phone:"9123456789"}
    ];

    res.json(customers);

});

module.exports = router;