
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');


// PROCESSING
let t = parseFloat(input1.textContent);
let s = parseFloat(input2.textContent);

let result = windChill(t, s);

document.getElementById("output").innerHTML = "Wind Chill: " + result  + "<sup>o</sup>F";

function windChill(temp, speed){
          // Use provided formula to calculate wind chill.
          //  f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275t s^0.16
          let farenheit = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
          console.log(farenheit);

          // Round to the nearest whole number
          let digits = 0;
          let multiplier = Math.pow(10, digits);
          let f = Math.round(farenheit * multiplier) /  multiplier;
          return f;

      }