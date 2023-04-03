// .sort array method mutates the original array and sorts in order.

// const fruit = [
//     'apple',
//     'pineapple',
//     'banana',
//     'dragon',
//     'stawberry',
//     'mango',
//     'kenep',
// ]

// console.log("Original array", fruit)
// console.log('sorted', fruit.sort())
// console.log('current array', fruit)

// .filter ruturns a new array of elements matching critreria.

const age = [13, 17, 55, 45, 31, 23, 21, 30];

const ageFilter = age.filter(function (age) {
  return age > 18;
});

console.log("Age filter", ageFilter);
const ageFilter2 = age.filter((age) => {
  return age > 30;
});

console.log("Age filter > 30", ageFilter2);

const ageFind = age.find(function (age) {
  return age > 18;
});

console.log("age find", ageFind);

const ageFind2 = age.find((age) => {
  return age > 18;
});

console.log("Age Find 2", ageFind2);

// .some ruturns true if some element matches criteria.

const ageSome = age.some(function (age) {
  return age < 18;
});

console.log("Age some", ageSome);

const ageSome2 = age.some((age) => {
  return age < 18;
});

console.log("Age some 2", ageSome2);

// .every

const ageEvery = age.every(function (age) {
  return age > 0;
});

console.log("Age every", ageEvery);

const ageEvery2 = age.every((age) => {
  return age > 30;
});

console.log("Age every 2", ageEvery2);

