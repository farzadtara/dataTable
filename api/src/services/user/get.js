import user, { find } from '../../models/user'

///find all
export const all  = async ()=> {
    return await user.find({});
}

///find one
export const byId  = async (id)=> {
    return await user.findById(id);
}

