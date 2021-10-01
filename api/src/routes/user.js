import { Router } from "express";

import * as UserController from '../controllers/user'

const User = Router();


User.get('/',UserController.fetchUsers);

User.get('/:id',UserController.fetchUser);

User.post('/',UserController.createUser);

User.put('/:id',UserController.updateUser);

User.delete('/:id',UserController.deleteUser);


export default User