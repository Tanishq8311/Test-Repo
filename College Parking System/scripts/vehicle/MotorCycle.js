import Vehicle from "./Vehicle.js"

class MotorCycle extends Vehicle{
    constructor(...args){
        super(...args)
        this.type = 'motorCycle'
    }
    getPriceOptions(){
        return {
            daily : 10,
            monthly : 100,
            yearly : 1000
        }
    }
}

export default MotorCycle