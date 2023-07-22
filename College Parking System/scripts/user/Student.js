import User from "./User.js";

class Student extends User{
    constructor(...args){
        super(...args)
        this.role = 'student'
    }
}

export default Student