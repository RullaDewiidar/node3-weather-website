// setTimeout(() => {
//     console.log('2 sec are up')
// }, 2000)

// const names=['Andrew', 'Jen' , 'Jess']

// const shortNames = names.filter((name) => {
//   return name.length <= 4
// })

// const geocode = (address, callback ) => {
//  setTimeout(() => {
//     const data= {
//         latitude: 0,
//         longitude: 0
//     }
//     callback(data)
//  },2000)
// }

// geocode('Philidelphia', (data) => {

//     console.log(data)

// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// mashy ana hena ba3ml callback
const add = (num1, num2, sum) => {
  setTimeout(() => {
    sum(num1 + num2); //ba3ml function l 3yzaha aw l logic abl ma ytl3 l 2sec
  }, 2000);
};

add(1, 2, (ora) => {
  // l asm msh far2a msh lazm tkon nafs esm l callback l heya sum
  console.log(ora); // Should print: 5
});
