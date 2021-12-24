

/*

JavaScript Callback

    " I will call back later"
    A callback is a function passed as an argument to another function
    This technique allows a function to call another fucntion
    A callback function can run after another function has finished

*/

/*
Asynchronous JavaScript

    "I will finish later"
    Function running in parallel with other function are called asynchronous
    A good example is JavaScript setTimeout()

    setTimeout(()=>{
        // do someting
    },milisecond)


    setInterval(myFunction, 1000)
    
*/

//Waiting for Files
function myDisplayer(some){
    console.log(some)
}

function getFile(myCallback){
    let req = new XMLHttpRequest()
    req.open("GET","mycar.html");
    req.onload = ()=>{
        if( req.status == 200){
            myCallback(this.responseText)
        }else{
             myCallback("Error: " + req.status);
        }
    }

    req.send()
}

/*

JavaScript Promises

    " I will Promise a result"
    "Producing code" is code that must wait for a result
    "Consuming code" is code that must wait for the result
    A promise is a JavaScript object that links producing code and consuming code

*/

//JavaScript promise object
let myPromis = new Promise((resolve,reject)=>{
    resolve() // when successful
    reject() // when error occured
})

myPromis.then(
    (value)=>{
        /* code if successful */    
    },
    (error)=>{
        /* code if some error */ 
    }
)

/*

Promise Object Properties
    A JavaScript Promise object can be:

        Pending
        Fulfilled
        Rejected
    
    The Promise object supports two properties: state and result.
    While a Promise object is "pending" (working), the result is undefined.
    When a Promise object is "fulfilled", the result is a value.
    When a Promise object is "rejected", the result is an error object.

    myPromise.state	myPromise.result
        "pending"	undefined
        "fulfilled"	a result value
        "rejected"	an error object
    You cannot access the Promise properties state and result.
    You must use a Promise method to handle promises.
*/

let promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello world")
    },3000)   
})


/*
JavaScript Async 

    "async and await make promises easier to write"
    async makes a fucntion return a Promise
    await makes a fucntion wait for a Promise


Async syntax

    async function myFunction(){
        return "hello"
    }

    Is the same as

    fucntion myFunction(){
        return Promise.resolve("Hello")
    }

    Here is how to use the Promise:

    myFunction().then(
      function(value) {  code if successful  },
      function(error) {  code if some error  }
    );


*/

async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

//Await Syntax

async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
    //setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  console.log(await myPromise);
}

myDisplay();