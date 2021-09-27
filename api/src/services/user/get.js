import User from '../../models/user'

///find all
export const all  = async ()=> {
    return await User.find({});
}

///find one
export const byId  = async (id)=> {
    return await User.findById(id);
}

