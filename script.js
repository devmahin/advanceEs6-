// prototype

// const personMethod = {
//     eat(){
//         console.log("Mahin is eating")
//     },
//     sleep(){
//         console.log(`mahin was sleeping`)
//     }
// }



//1111 ==========================================================================prototype vanila
// function prototypeFun(name){
//     let person = Object.create(prototypeFun.prtotype )
//     person.name = name;
//     // console.log(person)
//     return person;
// }

// prototypeFun.prtotype = {
//             eat(){
//                 console.log(`"${this.name} is eating"`)
//             },
//             sleep(){
//                 console.log(`${this.name} was sleeping`)
//             }
// }



// let p1 = prototypeFun("mahin")
// let p2 = prototypeFun("Adib")
// let p3 = prototypeFun("hasan")
// p2.eat()



// 22222===================================== prototype convat new dia object create



function prototypeFun (name){
    this.myname = name;
}


prototypeFun.prototype ={
    eat(){
        console.log(`"person is eating"`)
    },
    sleep(){
        console.log(`person was sleeping`)
    }
}

let p1 = new prototypeFun("mahin")
let p2 = new prototypeFun("Adib")
let p3 = new prototypeFun("hasan")
p2.eat()


// class Persons{
//     constructor(name){
//      this.myname = name;
//     }
 
//      eat(){
//          console.log(`"${name} is eating"`)
//      }
//      sleep(){
//          console.log(`${name} was sleeping`)
//      }
//  }
 
 