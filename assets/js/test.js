console.log("bonjour");

let messages = document.getElementById("messages").querySelectorAll("li");
console.log(messages);
messages.forEach((card) => {
  card.addEventListener("click", (event) => {
    document.querySelectorAll(".message").forEach((item) =>{
      item.classList.remove("active");
    });
    event.currentTarget.querySelector(".message").classList.add("active");
  });
});
