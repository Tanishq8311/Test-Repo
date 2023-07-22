import Vehicle from "./Vehicle.js"

class Cycle extends Vehicle{
    constructor(...args){
        super(...args)
        this.type = 'cycle'
    }
    getPriceOptions(){
        return {
            daily : 5,
            monthly : 50,
            yearly : 500
        }
    }
}

export default Cycle