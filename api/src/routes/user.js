import { Router } from "express";

import * as UserController from '../controllers/user'

const User = Router();

// User.get('/',(req, res)=>{
//     res.sendStatus(200)
// })

User.get('/',UserController.fetchUsers);


export default User