let input = document.getElementById("input");
console.log(input);
let sugges = document.getElementById("suggetion");

let btn = document.getElementById("btn");

let guessTime = document.getElementById("guessTime");

let gussedNum = document.getElementById("guessedNums");

let gu = document.getElementById("guessed");

let gu2 = document.getElementById("guesses");
let parent1 = document.getElementById("box");
let random = Math.floor(Math.random() * 100);

var num = 1;

btn.onclick = function () {
  console.log(random);
  if (input.value > 100 || input.value < 0) {
    sugges.innerHTML = "Please enter numbers between 1-100";
    sugges.style.color = "red";
  } 
  else if (input.value > random) {
    sugges.style.color = "red";
    sugges.innerHTML = "Actual number is low..";
    
    if (num <3) {
        gussedNum.innerHTML += `${input.value}`;
      } else {
        gussedNum.innerHTML += `,${input.value}`;
      }
    guessTime.innerHTML = num++;
  } else if (input.value < random) {
    sugges.innerHTML = "Actual number is high..";
    sugges.style.color = "black";
    guessTime.innerHTML = num++;
    if (num< 3) {
      gussedNum.innerHTML += `${input.value}`;
    } else {
      gussedNum.innerHTML += `,${input.value}`;
    }
  } else if (random == input.value) {
    sugges.innerHTML = "Youp,You win!";
    sugges.style.color = "green";
    guessTime.innerHTML = num++;
    gu2.innerHTML = `You guessed it in ${num} guesses`;
    gu.innerHTML = " ";
  }
};

function fun() {}
