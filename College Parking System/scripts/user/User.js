class User{
    constructor(userName, userContact){
        this.id = 'user-' + (new Date).getTime()
        this.name = userName
        this.contact = userContact
    }
}

export default User