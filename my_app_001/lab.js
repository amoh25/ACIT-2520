let salut = () => "Hello Everyone" 


let numbers = [1,2,3]
let maxNum = (...manyArgs) =>{
    let maximum = 0
    for (let i = 0; i <= manyArgs.length; i++){
        if (manyArgs[i] >maximum){
            maximum = manyArgs[i]
        }
    }
    return maximum
}

class Person{
    constructor(Firstname, Lastname, age){
        this.Firstname = Firstname
        this.Lastname = Lastname
        this.age = age
    }
}
const Person1 = new Person("Ayman", "Mohamed", 18)
const Person2 = new Person("John", "Johnson", 45)