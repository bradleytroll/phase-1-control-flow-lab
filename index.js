//Redoing this lab for extra practice. Original code commented out below.

function scuberGreetingForFeet(distance) {
  let fare;
  if (distance <= 400) {
    fare = 'This one is on me!';
  } else if (distance <= 2000) {
    fare = "That will be twenty bucks.";
  } else if (distance <= 2500) {
    fare = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    fare = "No can do.";
  }
  return fare;
}

function ternaryCheckCity(city) {
  let cityCheck;
  if (city === 'NYC') {
    cityCheck = "Ok, sounds good.";
  } else if (city !== 'NYC') {
    cityCheck = 'No go.'
  }
  return cityCheck;
}

function switchOnCharmFromTip(tip) {
switch(tip) {
  case 'generous': return "Thank you so much.";
  break;
  case 'not as generous': return "Thank you.";
  break;
  default: return "Bye."
}
}



















// function scuberGreetingForFeet(rideLength){
//   let result
//   if (rideLength < 400) {
//     result = `This one is on me!`
//   }
//   else if (rideLength <= 2000) {
//     result = `That will be twenty bucks.`
//   }
//   else if (rideLength < 2500) {
//     result = `I will gladly take your thirty bucks.`
//   }
//   else if (rideLength >= 2500) {
//     result = `No can do.`
//   }
//   return result
// }

// function ternaryCheckCity(city){
//   return city === 'NYC' ? "Ok, sounds good." : "No go.";
// }

// function switchOnCharmFromTip(tip){
//   switch (tip){
//     case 'generous':
//       return "Thank you so much.";
//       break;
//     case 'not as generous':
//       return "Thank you.";
//       break;
//     default:
//       return 'Bye.';
// }};
 
 
 
 
  