import {app} from "./settings";
import dotenv from "dotenv";
import {runDB} from "./db/db";
dotenv.config();

const mongoURI = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017'

console.log(mongoURI+ "d");
//output - mongodb+srv://a:a@ava.epzello.mongodb.net/?retryWrites=true&w=majority
console.log("Hello MongoDB!");

const port = 80;
app.listen(port, async ()=>{
await runDB()

})