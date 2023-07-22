import User from "./User.js"

class Faculty extends User{
    constructor(...args){
        super(...args)
        this.role = 'faculty'
    }
}

export default Faculty