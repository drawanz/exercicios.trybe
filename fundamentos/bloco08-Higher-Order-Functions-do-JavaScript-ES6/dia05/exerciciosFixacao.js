
// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
//   };

// const obj = {...user, ...jobInfos};
// const { name, age, nationality, profession, squadInitials, squad} = obj;

// console.log(`hi, my name is ${name}, I am ${age} years old and I am ${nationality}. I work as a ${profession}, and my squad is: ${squadInitials}-${squad}.`);

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// [comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);

// const getNationality = ({ firstName, nationality = 'brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// // console.log(getNationality(person));

// const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

// greeting('leonidas'); // // Welcome usuário!

// const multiply = (number, value = 1) => {
//     return number * value;
//   };
  
//   console.log(multiply(8));
