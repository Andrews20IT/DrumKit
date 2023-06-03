//WHILE PRESSING BUTTONS
var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var innerHTML = this.innerHTML;
    makeSound(innerHTML);
    flash(innerHTML);
  });
}
// WHILE PRESSING KEYBOARD KEYS
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  flash(event.key);
});

// COMMON FUNCTION
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log(innerHTML);

  }
}

function flash(activeButton) {
  document.querySelector("." + activeButton).classList.add('pressed');

  setTimeout(function() {
    document.querySelector("." + activeButton).classList.toggle('pressed');
  }, 100);
}












// var noOfButtons = document.querySelectorAll("button").length;
//
// for (var i = 0; i < noOfButtons; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     var innerHTML = this.innerHTML;
//     makeSound(innerHTML);
//     flash(innerHTML);
//   });
// }
//
// // KEYBOARD KEY PRESS
// document.addEventListener("keydown", function(event) {
//   makeSound(event.key);
//   flash(event.key);
// });
//
//
// function makeSound(key) {
//   switch (key) {
//     case "w":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "a":
//       var kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     case "s":
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "d":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "j":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "k":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "l":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     default:
//       console.log(innerHTML);
//
//   }
// }
//
//
//
// function flash(keyboardKey) {
//   document.querySelector("." + keyboardKey).classList.add("pressed");
//
//   setTimeout(function() {
//     document.querySelector("." + keyboardKey).classList.toggle("pressed");
//   }, 100);
// }
