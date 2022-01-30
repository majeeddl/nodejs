

const user = { name: "John Doe", age: 34 };

//Use Destructuring Assignment to Extract Values from Objects
const { name, age } = user;

//Use Destructuring Assignment to Assign Variables from Objects
const { name: userName, age: userAge } = user;


//Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};

const {
  johnDoe: { age, email },
} = user;

const {
  johnDoe: { age: userAge, email: userEmail },
} = user;


//Use Destructuring Assignment to Assign Variables from Arrays
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
//The console will display the values of a, b, and c as 1, 2, 5.


//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1,2
console.log(arr);  // [3, 4, 5, 7]


//Use Destructuring Assignment to Pass an Object as a Function's Parameters

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
};

const profileUpdate = ({ name, age, nationality, location }) => {};

