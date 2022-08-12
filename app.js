const submitBtn = document.getElementById("submitBtn");
const cardItems = document.querySelector(".card-items");
const cardThankYou = document.querySelector(".card-thank-you");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

submitBtn.onclick = () => {
    cardItems.style.display = "none";
    cardThankYou.style.display = "flex";
}