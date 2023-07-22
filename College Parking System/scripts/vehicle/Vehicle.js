class Vehicle{
    constructor(vahicleName, owner){
        this.id = 'vehicle-' + (new Date).getTime()
        this.name = vahicleName
        this.owner = owner
    }
}

export default Vehicle