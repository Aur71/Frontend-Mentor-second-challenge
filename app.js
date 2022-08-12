const submitBtn = document.getElementById("submitBtn");
const cardItems = document.querySelector(".card-items");
const cardThankYou = document.querySelector(".card-thank-you");
submitBtn.disabled = true;

submitBtn.onclick = () => {
  cardItems.style.display = "none";
  cardThankYou.style.display = "flex";
};

// Rating below
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const allBtns = document.querySelectorAll(".ratingBtn");
const span = document.getElementsByTagName("span")[0];

btn1.onclick = () => {
  span.innerText = 1;
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
  submitBtn.disabled = false;
};

btn2.onclick = () => {
  span.innerText = 2;
  btn2.classList.add("active");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn5.classList.remove("active");
  btn5.classList.remove("active");
  submitBtn.disabled = false;
};

btn3.onclick = () => {
  span.innerText = 3;
  btn3.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
  submitBtn.disabled = false;
};

btn4.onclick = () => {
  span.innerText = 4;
  btn4.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn5.classList.remove("active");
  submitBtn.disabled = false;
};

btn5.onclick = () => {
  span.innerText = 5;
  btn5.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  submitBtn.disabled = false;
};
