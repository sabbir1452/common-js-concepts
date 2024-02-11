function greeting(greetingHandler, name) {
  greetingHandler(name);
}

// const name = "Halim mama";
// const number = [45, 54, 78];
// const laptop = { price: 45000, brand: "lenove", memory: "8" };

function greetingHandler(name) {
  console.log("Good Morning", name);
}

function greetEvening(name) {
  console.log("Good Evening", name);
}

function greetNight(name) {
  console.log("Good Night");
}

greeting(greetingHandler, "Tom Hanks");
greeting(greetingHandler, "Tom Brady");
greeting(greetingHandler, "Tom cruise");
greeting(greetEvening, "Tom Solaiman");
greeting(greetEvening, "Tom Salman");
greeting(greetNight, "Rasel");

function submitHandler() {
  console.log("submit button clicked");
}

document.getElementById("btn-submit").addEventListener("click", submitHandler);
