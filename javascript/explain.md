

### Template Litrals
Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

```javascript

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```