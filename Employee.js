const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{

const employees=[
{id:"E101",name:"Pooja",address:"Jayanagar",phone:"56565433"},
{id:"E102",name:"Ravi",address:"BTM",phone:"9876543211"},
{id:"E103",name:"Kiran",address:"HSR",phone:"9876543212"},
{id:"E104",name:"Anil",address:"KR Puram",phone:"9876543213"},
{id:"E105",name:"Deepa",address:"Whitefield",phone:"9876543214"},
{id:"E106",name:"Megha",address:"Hebbal",phone:"9876543215"},
{id:"E107",name:"Ajay",address:"Mysore Road",phone:"9876543216"},
{id:"E108",name:"Nisha",address:"Rajajinagar",phone:"9876543217"},
{id:"E109",name:"Varun",address:"Yelahanka",phone:"9876543218"},
{id:"E110",name:"Suresh",address:"Banashankari",phone:"9876543219"}
];

res.json(employees);

});

module.exports=router;