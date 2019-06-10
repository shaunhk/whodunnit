//EP 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
//EP 1: 'The murderer is Miss Scarlet.'

//EP 2
//
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   var murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//EP 2: 'The murderer is Professor Plum.' Since it's a constant.

//EP 3
//
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//EP 3: 'The murderer is Mrs Peacock.' Accesses function
//'Second verdict: The murderer is Professor Plum.' Doesn't access function.

//EP 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//EP 4: 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.' Function is called and this accesses suspectThree in function
//'Suspect three is Mrs Peacock.'  Even though named function constant, variable inside is still block variable.

//EP 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//EP 5: The weapon is the Revolver. Values in mutable objects can be altered, even for constants.

//EP 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//EP 6 The murderer is Mrs White as the function changes the variable.

//EP 7

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/*EP 7 'The Murderer is Mr Green'.
As the unexpectedOutcome function only changes the let(block) variable
of plotTwist*/


// EP 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

//EP 8 The weapon is Candle Stick. Just changes the mutable instinc in the right order.

//EP 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

//EP 9 The murderer is Professor Plum. The let murderer is block variable only.

//EP 10

// var scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
// const changeMurderer = function() {
//   scenario.murderer = 'Mr. Green';
//
//   if (scenario.murderer == 'Mr. Green'){
//     scenario.weapon = 'Bazooka right in the face'
//   }
//
// }
// changeMurderer();
// const declareWeapon = function() {
//   return `The weapon was a ${scenario.weapon}.`
// }
//
// const verdict = declareWeapon();
// console.log(verdict);

// *SPOILERS* EP 10 weapon is a Bazooka right in the face

//EP 11

// var scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
// const changeMurderer = function() {
//   scenario.murderer = 'Mr. Green';
//
//   if (scenario.murderer == 'Mr. Green'){
//     scenario.weapon = 'Bazooka right in the face'
//   }
// changeMurderer();
// }
// const declareWeapon = function() {
//   return `The weapon was a ${scenario.weapon}.`
// }
// const verdict = declareWeapon();
// console.log(verdict);

// *SPOILERS* EP 11 weapon is a Lead Pipe. Function invoked inside it's own definition.
