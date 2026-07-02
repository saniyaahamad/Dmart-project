const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{

const payments=[
{billNo:"B1022",amount:1560,date:"01-07-2026"},
{billNo:"B1023",amount:980,date:"02-07-2026"},
{billNo:"B1024",amount:760,date:"03-07-2026"},
{billNo:"B1025",amount:1200,date:"04-07-2026"},
{billNo:"B1026",amount:450,date:"05-07-2026"},
{billNo:"B1027",amount:670,date:"06-07-2026"},
{billNo:"B1028",amount:880,date:"07-07-2026"},
{billNo:"B1029",amount:230,date:"08-07-2026"},
{billNo:"B1030",amount:1490,date:"09-07-2026"},
{billNo:"B1031",amount:999,date:"10-07-2026"}
];

res.json(payments);

});

module.exports=router;