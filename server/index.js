import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
import postRoutes from "./routes/posts.js"

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);




const uri = process.env.CONNECTION_URI;
const PORT = process.env.PORT || 3001

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
                .then( ()=>{app.listen(PORT, function(){
                    console.log(`App is listening on port: ${PORT}`);
                });})
                .catch( (error)=>{console.log(error.message)});

//mongoose.set('useFindAndModify', false)



