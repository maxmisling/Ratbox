// counting days to new year
const beaconActivation = new Date('February 17, 24 21:20:27 GMT+00:00');
const countDownDateTime = beaconActivation.getTime();

//const countDownDateTime = new Date(2023, 2, 17, 21, 20, 27).getTime();

const daysValue = document.querySelector("#days");
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");

// run this function every 1000 ms or 1 second
let x = setInterval(function () {
  const dateTimeNow = new Date().getTime();
  let difference = countDownDateTime - dateTimeNow;
  
  // calculating time and assigning values
  daysValue.innerHTML = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );
  hoursValue.innerHTML = Math.floor(
  (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutesValue.innerHTML = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  secondsValue.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);
  
  if (difference < 0) {
  clearInterval(x);
  }
}, 1000);
