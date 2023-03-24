let startY = document.getElementById("startY");

let endY = document.getElementById("endY");

let btn = document.getElementById("btn");

let info = document.getElementById("info");

let count = document.getElementById("count");

let cont = document.getElementById("container");

let years=document.getElementById("years")

btn.onclick = function () {
  info.innerHTML = "";
  years.innerHTML="";
  let counts = 0;

  if (startY.value < 1500 ||startY.value>3000 || endY.value > 3000 ||endY.value<1500 ||startY.value>endY.value) {
    info.innerHTML = `Please enter two years between 1500 and 3000`;
    info.style.color = "red";
  } 
  else 
  {
    for (let i = startY.value; i < endY.value; i++) {
      if (i % 4 == 0) {
        if (counts % 12 == 0) {
          years.innerHTML += "<br>";
        }
        ++counts;
        if (counts == 1) {
          years.innerHTML = i;
        } else {
          years.innerHTML += "," + i;
        }
        if (counts > 120) {
          cont.style.height = "150vh";
        }
      }
    }
    info.innerHTML = `There is ${counts} leap years between ${startY.value} to ${endY.value}`;
    info.style.color = "green";
  }
};
