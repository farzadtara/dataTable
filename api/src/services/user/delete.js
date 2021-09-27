import user, { findByIdAndDelete } from "../../models/user";


///delete by id 

export const deleteById = async (id)=>{
    return await findByIdAndDelete(id)
}