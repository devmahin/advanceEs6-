// prototype

// const personMethod = {
//     eat(){
//         console.log("Mahin is eating")
//     },
//     sleep(){
//         console.log(`mahin was sleeping`)
//     }
// }


function prototypeFun(name){
    let person = Object.create(prototypeFun.prtotype )
    person.name = name;
    // console.log(person)
    return person;
}

prototypeFun.prtotype = {
            eat(){
                console.log(`"${this.name} is eating"`)
            },
            sleep(){
                console.log(`${this.name} was sleeping`)
            }
}



let p1 = prototypeFun("mahin")
let p2 = prototypeFun("Adib")
let p3 = prototypeFun("hasan")
p2.eat()


