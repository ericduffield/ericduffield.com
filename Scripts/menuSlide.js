function slide() {
  let menu = document.getElementById("menu");

  if (menu.style.top == "5rem") {
    menu.style.top = "-15rem";
  } 
  else {
    menu.style.top = "5rem";
  }
}

function hamburger() {
  let hamburger = document.getElementById("hamburger");

  if (hamburger.className == "open") {
    hamburger.className = "";
  } 
  else {
    hamburger.className = "open";
  }
}