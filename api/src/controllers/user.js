import * as getUserService from '../services/user/get'
import * as updateUserService from '../services/user/put'
import * as createUserService from '../services/user/post'
import * as deleteUserService from '../services/user/delete'



///get all users

export const fetchUsers =  async (req , res)=>{
    try {
        let allUsers = await getUserService.all()

        res.status(200).json({
            success :  true,
            user : allUsers
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}

///get singel user

export const fetchUser = async (req, res) => {
    try {
        let User = await getUserService.findById(req.params.id)
        res.status(200).json({
            success:true,
            user: User
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message : error.message
        })
        
    }
}



// ///create user

// export const createUser = (req , res)=>{
//     res.json({
//         status:"success",
//         message:"this is nice goodjob farzad"
//     })
// }

// ///update user

// export const updateUser = (req , res)=>{
//     res.json({
//         status:"success",
//         message:"this is nice goodjob farzad"
//     })
// }

// ///delete user

// export const deleteUser = (req , res)=>{
//     res.json({
//         status:"success",
//         message:"this is nice goodjob farzad"
//     })
// }









