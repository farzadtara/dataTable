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

export const createUser = async (req , res)=>{
    try {
        const{
            name,
            email,
            password
        }=req.body

        res.status(201).json((
            await createUserService.createUser({
                name,
                email,
                password
            })
        ))

        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
        
    }
}

///update user

export const updateUser = async(req , res)=>{
    try {
        res.status(201).json({
            success:true,
            updateUser : await updateUserService.byId(req.params.id)
        })
        
    } catch (error) {
        res.status(500).json({
            success: true,
            message: error.message
        })
    }
}

// ///delete user

export const deleteUser = async(req , res)=>{
    try {
        const{
            name,
            email,
            password
        }=req.body
        res.status(200).json({
            success:true,
            deleteUser : await deleteUserService.byId(req.params.id,{
                name,
                email,
                password
            })
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message :  error.message
        })
        
    }
}









