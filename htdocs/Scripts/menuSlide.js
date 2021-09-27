function slide() {
  var x = document.getElementById("menu");

  if (x.style.top == "5rem") {
    x.style.top = "-15rem";
  } 
  else {
    x.style.top = "5rem";
  }
}

function hamburger() {
  var x = document.getElementById("hamburger");

  if (x.className == "open") {
    x.className = "";
  } 
  else {
    x.className = "open";
  }
}