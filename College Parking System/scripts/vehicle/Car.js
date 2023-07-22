import Vehicle from "./Vehicle.js"

class Car extends Vehicle{
    constructor(...args){
        super(...args)
        this.type = 'car'
    }
    getPriceOptions(){
        return {
            daily : 50,
            monthly : 500,
            yearly : 5000
        }
    }
}

export default Car