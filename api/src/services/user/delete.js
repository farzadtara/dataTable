import User  from "../../models/user";


///delete by id 

export const deleteById = async (id)=>{
    return await User.findByIdAndDelete(id)
}