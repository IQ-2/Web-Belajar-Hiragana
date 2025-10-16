const flipbtn = document.getElementById("flip-btn");
const card = document.getElementById("card");

flipbtn.addEventListener('click', () => {
  card.classList.toggle("flip");
});
console.log("Script loaded successfully");