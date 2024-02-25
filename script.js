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



// function prototypeFun (name){
//     this.myname = name;
// }


// prototypeFun.prototype ={
//     eat(){
//         console.log(`"person is eating"`)
//     },
//     sleep(){
//         console.log(`person was sleeping`)
//     }
// }

// let p1 = new prototypeFun("mahin")
// let p2 = new prototypeFun("Adib")
// let p3 = new prototypeFun("hasan")
// p2.eat()







// class convat 

// class prototypeFun{
//     constructor(name){        
//      this.name = name;
//     }
//      eat(){
//          console.log(`"${this.name} is eating"`)
//      }
//      sleep(){
//          console.log(`${this.name} was sleeping`)
//      }
//  }
 
// let p1 = new prototypeFun("mahin")
// let p2 = new prototypeFun("Adib")
// let p3 = new prototypeFun("hasan")
// p3.eat()
 

// protype hide master object hide
// function hideMasterObj (name){
//     // let this = Object.create()
//     this.Myname = name;
//     // return this
// }

// hideMasterObj.prototype = {
//     eat(){
//         console.log(`"${this.Myname} is eating"`)
//     },
//     sleep(){
//         console.log(`${this.Myname} was sleeping`)
//     }
// }

// let adib = new hideMasterObj("adib")
// let sakib = new hideMasterObj("skib")
// adib.eat()
// sakib.eat()


// var f = function d (){}
// console.dir(f)



// // prototype inheritance
// function Person(name, age)
// {
//     this.myName = name;
//     this.myAge = age;
// }


// function Cricketer(name, age ,type,country){
//     Person.call(this);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }
// Cricketer.prototype = Object.create(Person.prototype)
// Cricketer.prototype.constructor = Cricketer;

// Cricketer.prototype = {
//     play (){
//         console.log("Cricket")
//     }
// }

// Person.prototype = {
//     eat(){
//         console.log("Hello i am mahin")
//     }
// }

// let p = new Cricketer("mahin",45, "bangla","BD");
// console.dir(Person)
// console.dir(Cricketer.eat())




// prototype inheritence

class Father{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    fathers(){
        return `My name is ${this.name}`
    }
}


class mother extends Father{
    constructor(name,age,children){
        super(name,age)
        this.children = children;
    }
    mother(){
        return `My childs is ${this.children}`
    }
    // get getName (){
    //     console.log("I am getter")
    // }
//    set setNames (name){
//     this.name = name;
//    }
// static isEqual (class1,class2){
//     return class1.age === class2.age
// }
// polimorfijon
fathers(){
    super.fathers()
    return `My name is ${this.name} . her old is 5`
}
}



let ClassObj1 = new mother("Babul howlader", 55, 2);
let ClassObj2 = new mother("Babul howlader", 55, 2);
// ClassObj.setNames = "mahin";

console.log(ClassObj1.fathers())