// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   rectangleArea(...rectangles) // altere a chamada da funcao rectangleArea
//   console.log(rectangle[0] * rectangle[1]);
// });

// const sum = (...numbers) => numbers.reduce(((acc, result) => acc + result), 0);

// const alex = {
//     name: 'Alex',
//     age: 26,
//     likes: ['fly fishing'],
//     nationality: 'Australian',
//   };
  
//   const gunnar = {
//     name: 'Gunnar',
//     age: 30,
//     likes: ['hiking', 'scuba diving', 'taking pictures'],
//     nationality: 'Icelandic',
//   };
  
//   // complete a assinatura da função abaixo
//   const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
//   console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
//   console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// const people = [
//     {
//       name: 'Nicole',
//       bornIn: 1992,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Harry',
//       bornIn: 2008,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Toby',
//       bornIn: 1901,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Frida',
//       bornIn: 1960,
//       nationality: 'Dannish',
//     },
//     {
//       name: 'Fernando',
//       bornIn: 2001,
//       nationality: 'Brazilian',
//     },
//   ];
  
//   // escreva filterPeople abaixo pessoas australianas que nasceram no século 20:
//   const filterPeople = (obj) => obj.filter(({bornIn, nationality}) => nationality === 'Australian' && bornIn < 1999 && bornIn > 1899)

//   console.log(filterPeople(people));

// const myList = [1, 2, 3];

// // const swap = (arr) => [arr[0], arr[1], arr[2]] = [arr[2], arr[1], arr[0]]
// const swap = ([a, b, c]) => [c, b, a]
// console.log(swap(myList)); 

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo

// const toObj = ([model, brand, year]) => ({ model, brand, year });
// console.log(toObj(shelbyCobra));

// const ships = [
//     {
//       name: 'Titanic',
//       length: 269.1,
//       measurementUnit: 'meters',
//     },
//     {
//       name: 'Queen Mary 2',
//       length: 1132,
//       measurementUnit: 'feet',
//     },
//     {
//       name: 'Yamato',
//       length: 256,
//       measurementUnit: 'meters',
//     },
//   ];
  
// const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`
  
//   console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
//   console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
//   console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'

// escreva greet abaixo

const greet = (param1, param2 = 'Hi') => `${param2} ${param1}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'