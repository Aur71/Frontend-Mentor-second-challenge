const submitBtn = document.getElementById("submitBtn");
const cardItems = document.querySelector(".card-items");
const cardThankYou = document.querySelector(".card-thank-you");
submitBtn.disabled = true;

submitBtn.onclick = () => {
  cardItems.style.display = "none";
  cardThankYou.style.display = "flex";
};

// Rating below

const span = document.getElementsByTagName("span")[0];
const ratingBtn = document.querySelectorAll(".ratingBtn");

for(let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener('click', (e) => {
    submitBtn.disabled = false;
    ratingBtn[0].classList.remove("active");
    ratingBtn[1].classList.remove("active");
    ratingBtn[2].classList.remove("active");
    ratingBtn[3].classList.remove("active");
    ratingBtn[4].classList.remove("active");
    ratingBtn[i].classList.add("active")
    const spanValue = i + 1;
    span.innerText = spanValue
  })
}