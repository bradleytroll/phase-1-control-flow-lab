function scuberGreetingForFeet(rideLength){
  let result
  if (rideLength < 400) {
    result = `This one is on me!`
  }
  else if (rideLength <= 2000) {
    result = `That will be twenty bucks.`
  }
  else if (rideLength < 2500) {
    result = `I will gladly take your thirty bucks.`
  }
  else if (rideLength >= 2500) {
    result = `No can do.`
  }
  return result
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return 'Bye.';
}};
 
 
 
 
  