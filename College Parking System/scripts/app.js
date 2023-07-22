import Faculty from "./user/Faculty.js"
import Student from "./user/Student.js"
import Car from "./vehicle/Car.js";
import Cycle from "./vehicle/Cycle.js"
import MotorCycle from "./vehicle/MotorCycle.js";

const users = [];
const vehicles = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registerationButton').addEventListener('click', handleUser)
    document.getElementById('vehicleRegisterationButton').addEventListener('click', handleVehicle)


    document.querySelectorAll('form h1').forEach(item => item.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('collapsed')
    }))
})

const handleUser = (e) => {
    let userName = document.getElementById('userName').value
    let userContact = document.getElementById('userContact').value

    if(userName && userContact){
        let role = document.getElementById('role').value
        let user = role === 'student' ? new Student(userName, userContact) : new Faculty(userName, userContact)
        alert(`Congratulations !! You are successfully registered as ${role}. Your registeration id is ${user.id}`)
        users.push(user)
        document.getElementById('user').classList.toggle('collapsed')
        console.log(users)
    }
}

const handleVehicle = e => {
    let vehicleName = document.getElementById('vehicleName').value
    let type = document.getElementById('type').value
    let vehicle = null
    switch(type){
        case 'cycle':
            vehicle = new Cycle(vehicleName, users[users.length - 1])
            break;
        case 'motorCycle':
            vehicle = new MotorCycle(vehicleName, users[users.length - 1])
            break;
        case 'car':
            vehicle = new Car(vehicleName, users[users.length - 1])
            break;
    }
    alert("Your vehicle has been registered ")
    document.getElementById('vehicle').classList.toggle('collapsed')
    vehicles.push(vehicle)
    console.log(vehicles)

    updatePassChoice(vehicle)
}

const updatePassChoice = vehicle => {
    let passChoice = document.getElementById('passChoice')
    passChoice.style.display = 'block'

    for(const key in vehicle.getPriceOptions()){
        let button = document.createElement("INPUT")
        button.setAttribute("type", "button")
        button.value = `${key} : ${vehicle.getPriceOptions()[key]}`
        passChoice.appendChild(button)
    }
    
}
