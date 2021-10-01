const Express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
import '../api/src/config/index'
import User from '../api/src/routes/user'
//setup

const app = Express();
// dotenv.config({path:`${__dirname}/${process.env.NODE_ENV}.env`});
dotenv.config({path:`${__dirname}/development.env`});

///middelwares

app.use(Express.json());
app.use(Express.urlencoded({extended:false}));
app.use(cors());
app.use('/users',User)





///server


app.listen(process.env.PORT, process.env.HOST,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`app run  on: http://${process.env.HOST}:${process.env.PORT}`)

    }
})
