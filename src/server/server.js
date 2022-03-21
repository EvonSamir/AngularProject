const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const app = express();
app.use(bodyparser.json());
app.use(cors());
app.get("/",function(request,result){result.send("Hello")})
app.listen(PORT,function(){console.log("Server running on port "+PORT)})
app.post('/enroll',function(request,result){
    console.log(request.body);
    result.status(200).send({"Data":"Data Recived"})})