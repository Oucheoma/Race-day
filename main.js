// to create random race numbers
let raceNumber = Math.floor(Math.random() * 1000);

//the conditions/ values we are wworking with,registration time (early or late)and age to know if adult or not
let registeredEarly = false;
let age = 55

//to meet the condition that early adults get a race number above 1000, hence the +=1000
if(registeredEarly && age > 18){
  raceNumber += 1000;
}

//condition if early and above 18 i.e an adult
if(registeredEarly && age > 18){
  console.log(`Race will begin at 9:30am, your race number is ${raceNumber}`)
  //for late adults (not early)
}else if (!registeredEarly && age > 18){
  console.log(`Race will begin at 11:00am, your race number is ${raceNumber}`)
  // for runners under 18 regardless of the time they arrived.
} else if (age < 18){
  console.log(`Youth registrants runs at 12:30pm. Your race Number is ${raceNumber}`)
  // for those that are 18 (we covered for above 18 and below 18, the left group are those that are 18)
}else{
  console.log('See the registration desk')
}

