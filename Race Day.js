let raceNumber = Math.floor(Math.random() * 1000);
let isEarlyRegistered = true;
let runnerAge = 18;

if (isEarlyRegistered && runnerAge > 18) {
  raceNumber += 1000;
}

if (isEarlyRegistered && runnerAge > 18) {
  console.log(`You will race at 9:30 am, and your number is ${raceNumber}`);
} else if
  (isEarlyRegistered && runnerAge > 18) {
   console.log(`You will race at 11:00 am, and your number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 am, and your number is ${raceNumber}`);
} else {
  console.log("Please approach registration desk");
}
