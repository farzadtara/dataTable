import User  from '../../models/user'


export const updateById = async(id, user)=>{

    return await User.findByIdAndUpdate(id, user)
}