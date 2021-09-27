import user  from '../../models/user'


export const updateById = async(id, user)=>{

    return await user.findByIdAndUpdate(id, user)
}