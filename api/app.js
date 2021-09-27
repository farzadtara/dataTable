const Express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
import User from '../api/src/routes/user'
//setup
const app = Express();
dotenv.config({path:`./${process.env.NODE_ENV}.env`})

///middelwares
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(cors());
app.use(User)


// app.get('/',(req, res)=>{
//     res.sendStatus(200)
// })

///server

app.listen(process.env.PORT, process.env.HOST,()=>{
    console.log("server run")
})