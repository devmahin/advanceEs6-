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


// // function Cricketer(name, age ,type,country){
// //     Person.call(this);
// //     this.name = name;
// //     this.age = age;
// //     this.type = type;
// //     this.country = country;
// // }
// // Cricketer.prototype = Object.create(Person.prototype)
// // Cricketer.prototype.constructor = Cricketer;

// // Cricketer.prototype = {
// //     play (){
// //         console.log("Cricket")
// //     }
// // }

// // Person.prototype = {
// //     eat(){
// //         console.log("Hello i am mahin")
// //     }
// // }

// // let p = new Cricketer("mahin",45, "bangla","BD");
// // console.dir(Person)
// // console.dir(Cricketer.eat())




// // prototype inheritence

// class Father{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     fathers(){
//         return `My name is ${this.name}`
//     }
// }


// class mother extends Father{
//     constructor(name,age,children){
//         super(name,age)
//         this.children = children;
//     }
//     mother(){
//         return `My childs is ${this.children}`
//     }
//     // get getName (){
//     //     console.log("I am getter")
//     // }
// //    set setNames (name){
// //     this.name = name;
// //    }
// // static isEqual (class1,class2){
// //     return class1.age === class2.age
// // }
// // polimorfijon
// fathers(){
//     super.fathers()
//     return `My name is ${this.name} . her old is 5`
// }
// }



// let ClassObj1 = new mother("Babul howlader", 55, 2);
// let ClassObj2 = new mother("Babul howlader", 55, 2);
// // ClassObj.setNames = "mahin";

// console.log(ClassObj1.fathers())





// closure 
function closureFun() {
    let a = 1;
    return function () {
        console.log(a++)
    }
}





// hoisting()
// console.dir(closureFun())
// function hoisting() {
//     let b
//     b = 34;
// //     console.log(b)

// // }
// // hoisting()

// // callback 

// function callback( a){
//     console.log(`Good morning ${a}`)
// }

// function callbackEvening( a){
//     console.log(`Good evening ${a}`)
// }
// function callbackNight( a){
//     console.log(`Good callbackNight ${a}`)
// }
// function call(callback,name){
//     callback(name)
//     // callback(callback2, "Mahin")
// }



// setTimeout( () => {
//     call(callback, "mahin")
// }, 2000)

// // call(callback, "adib")
// // call(callback, "hasan")
// // call(callbackEvening, "hasan")
// // call(callbackEvening, "hasan")
// // call(callbackNight, "hasan")





// function submit (num1, num2, submitsCall, instagram){
//         if(num1 === 10){
//             setTimeout(() => {
//                 submitsCall();
//             },2000)
//         }else{
//             instagram()
//         }
// }



// function facebookData (){
//     alert("My price is daynamic")
// }
// function instagram (){
//     alert ("I am instagram")
// }

// let number1 = 10;
// let number2 = 20;
// submit(number1, number2, facebookData, instagram)
// // submit(number1, number2, instagram)





// // this
// implicit binding
// let sakib = {
//     name : "mahin",
//     age : 20
// }

// let mahin = {
//     name : "Hasan",
//     age : 22
// }

// let f = function (naem ,age){
//     let o = {
//         myName : naem,
//         myage : age,
//         printName : function(){
//             console.log(`"Her name is ${this.myage}"`)
//         },
//         father : {
//             Name : "How how kali",
//             fatherName : function(){
//                 console.log(`"Her name is ${this.Name}"`)
//             },
//         }
//     }
//     return o;
// }

// let fun = f("soniaka", 2343434)
// fun.father.fatherName()




// explicit binding call
// let f = function (h1,h2){
//     console.log(`${this.name} is ${h1} and ${h2}`)
// }

// let obj = {
//     name : "Mahin howlader",
//     age : 3433434
// }


// let h1 = "All rounder";
// let h2 = "Half rounder";
// f.call(obj, h1,h2)



// apply
let f = function (h1,h2){
    console.log(`${this.name} is ${h1} and ${h2}`)
}

let obj = {
    name : "Mahin howlader",
    age : 3433434
}


let h1 = "All rounder";
let h2 = "Half rounder";
f.call(obj, h1,h2)