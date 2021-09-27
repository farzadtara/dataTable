import User from '../../models/user'


export const createUser = async (user)=>{
    return await User.create(user);
}
