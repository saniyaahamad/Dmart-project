const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{

const products=[
{id:"P101",name:"Pears Face Wash",cost:760,qty:50},
{id:"P102",name:"Soap",cost:50,qty:100},
{id:"P103",name:"Shampoo",cost:220,qty:70},
{id:"P104",name:"Rice",cost:1200,qty:40},
{id:"P105",name:"Oil",cost:180,qty:80},
{id:"P106",name:"Sugar",cost:55,qty:90},
{id:"P107",name:"Tea",cost:320,qty:45},
{id:"P108",name:"Coffee",cost:450,qty:30},
{id:"P109",name:"Toothpaste",cost:95,qty:120},
{id:"P110",name:"Biscuits",cost:30,qty:150}
];

res.json(products);

});

module.exports=router;