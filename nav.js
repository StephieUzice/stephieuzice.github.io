function openMenu() {
  var x = document.getElementById("portfolioTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  } 
}