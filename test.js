// console.log("Hello World")

const id = 2220;
// console.log(id);

// id = 2221;
// console.log(id);

let name = "rishi"
// console.log(name);

name = "payal"
// console.log(name);
{
    let name = "payal"
    // console.log(name);
    
}
// console.log(name);

var add = "kolkata"
// console.log(add);

var add = "naktala"
// console.log(add);

add = "kestopur"
// console.log(add);


// {
    var add = "newtown"
//     console.log(add);
    
// }

// console.log(add);


// console.log("Chin Up Lad! You got this... :)")
// console.table(["apple","ball","cat"])
// console.table({firstname:"John", lastname:"Doe"})


const myName = "Richie"
const empId = 2217;
const currentlyWorking = true;
const uanAvailability = null
let salaryExpectations


const projects = ["sambhav", "metavolte", "rudrakshrealtors", "sabhfinserv"]
const totalEmployees = {
    GD: "Pousali",
    CW: "Sanchita",
    WD: "Rishi",
    HK: "Subho"
}


// console.log(myName, typeof myName)
// console.log(empId, typeof empId)
// console.log(currentlyWorking, typeof currentlyWorking)
// console.log(uanAvailability, typeof uanAvailability)
// console.log(salaryExpectations, typeof salaryExpectations)
// console.log(projects, typeof projects)
// console.log(totalEmployees, typeof totalEmployees)



// Datatype Conversion

// String to Number

let numasString = undefined
// console.log(numasString)
// console.log(typeof (numasString))

let numasNumber = String(numasString)
// console.log(numasNumber)
// console.log(typeof (numasNumber))


// Number to String


// console.log ("2" == 2)
// console.log ("2" === 2)


const myId = Symbol("123")
const anotherId = Symbol("123")

// console.log(myId);
// console.log(typeof myId);
// console.log(anotherId);
// console.log(typeof anotherId);

// console.log (myId === anotherId)
// console.log (myId == anotherId)



// Stack Memory

let ytName = "richiegaitonde"
let anotherName = ytName;

// console.log(ytName);
// console.log(anotherName);

anotherName = "missDyna"  // a copy of the original value is created that won't change the original value
// console.log(anotherName);


let userOne = {
    email : "rishikalpadas@gmail.com",
    upi : "rishikalpa@ybl"
}

let userTwo = userOne

// console.log("The values of userOne are: " + userOne.email + " & " + userOne.upi);
// console.log("The values of userTwo are: " + userTwo.email + " & " + userTwo.upi);

userTwo.upi = "rishikalpa@oksbi"
// console.log("The modified values of userOne are: " + userOne.email + " & " + userOne.upi);
// console.log("The modified values of userTwo are: " + userTwo.email + " & " + userTwo.upi);



let userDetails = ["rishi", "kolkata", "software developer"]

// console.log(userDetails);
// console.log(userDetails[0]);

let anotherUser = userDetails

anotherUser[0] = "payal"

// console.log(anotherUser[0]);
// console.log(userDetails[0]);


let dad = "Sandeep"
let occupation = "Business"
let ageofDad = 51

// console.log("dad's name is: " + dad + ", He is a " + occupation + "man" + ", His age is: " + ageofDad);

// console.log(`dad's name is ${dad}`);


const gameName = new String('PUBG')

// console.log(gameName);

// console.log(gameName.slice(-3,-1));



// Numbers & Maths


const score = new Number(277)

// console.log(score);

// console.log(score.toString());
// console.log(typeof (score.toString()));


// console.log(score.toFixed(2));


const myScore = new Number(329.88)
// console.log(myScore.toPrecision(3));


const hisScore = new Number(10000000)

// console.log(hisScore.toLocaleString('en-IN'))




/* ************************** MATH FUNCTIONS IN JAVASCRIPT ************************* */


// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
 

// console.log(Math.max(4,7,3,8,6));
// console.log(Math.min(4,7,3,8,6));


// console.log(Math.random())

// console.log(Math);

// for a custom range (e.g. Dice Game)

const min = 10
const max = 20

// let num = Math.floor(((Math.random()*(max-min))+1))

// console.log(num);

let num = Math.random(4,(8-4)+4)
// console.log(num);













