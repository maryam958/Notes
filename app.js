import * as dotenv from 'dotenv' ;
dotenv.config();

import express from 'express';
import * as allRoutes from './modules/index.route.js'
import connection from './DB/connection.js';
const app=express();
const baseURL="/api/v1"


app.use(express.json());
app.use(`${baseURL}/user`,allRoutes.userRouter);
app.use(`${baseURL}/note`,allRoutes.noteRouter);
app.use(`${baseURL}/auth`,allRoutes.authRouter);



app.get("*",(req,res)=>{
    res.json({message:"Invalid Api"})
})

connection()

app.listen(3000,()=>{
    console.log("Server is running");
})







// DON'T FORGET TO
// GET USER ID FROM TOKEN
// USER MUST CONFIRM HIS EMAIL BEFOR USING ANY API


// APIS CRUD Operation For User module


// ## 3- Refresh token 

// ## 4- forget password 

// ## 5- change password (user must be logged in)

// ## 6- DELETE USER (account owner only)(user must be logged in and confirmed)(Aplly Joi validation)

// ## 7- Get all users (user must be logged in and confirmed)

// ## 8- get specific user by id with his notes (user must be logged in and confirmed)(Aplly Joi validation)


// APIS CRUD Operation For notes module 
// GET USER ID FROM TOKEN
// ## 1- CREATE note  (user must be logged in and confirmed)(Aplly Joi validation)

// ## 2- UPDATE note  (user must be logged in and confirmed)(Aplly Joi validation)

// ## 3- DELETE note  (user must be logged in and confirmed)(Aplly Joi validation)

// ## 5- get specific note by id (user must be logged in and confirmed)(Aplly Joi validation)

// ## 6- search about note by (title or content) (user must be logged in and confirmed)(Aplly Joi validation)

// ## 4- get all notes(user must be logged in)(user must be logged in and confirmed)

// ## 7- get notes that created by specific user (Aplly Joi validation)


// الديد لاين إن شاء الله هيكون يوم الخميس 9/2