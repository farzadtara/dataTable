import user from '../../models/user'


export const createUser = async (user)=>{
    return await user.create(user);
}
