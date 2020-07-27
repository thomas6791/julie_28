console.log("bonjour");



let button = document.getElementById("minuteur").querySelector("h3");
console.log(button);
button.addEventListener("click", (event) =>{
  console.log(button.nextElementSibling);
  if (button.nextElementSibling.classList.value === "horloge active") {
    button.nextElementSibling.classList.remove("active");
    button.innerText = "afficher le minuteur";
    button.parentElement.classList.remove("clicked");
  }
  else {
    button.nextElementSibling.classList.add("active");
    button.innerText = "Fermer";
    button.parentElement.classList.add("clicked");
  }

});
