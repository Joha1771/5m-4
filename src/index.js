const heart1Element = document.querySelector("#heart1 img");
const heart2Element = document.querySelector("#heart2 img");
const heart3Element = document.querySelector("#heart3 img");
const boxElement = document.querySelectorAll(".box");
const startBtnElement = document.getElementById("start-btn");
const secundomerElement = document.querySelector(".secundomer > p");

const hearts = [heart1Element, heart2Element, heart3Element];
let timerId = null;
let gameId = null;
let lives = 3;

startBtnElement.addEventListener("click", () => {
  startBtnElement.disabled = true;
  secundomerElement.textContent = 3;
  lives = 3;

  hearts.forEach((heart) => (heart.style.opacity = "1"));

  timerId = setInterval(() => {
    secundomerElement.textContent--;

    if (secundomerElement.textContent <= 0) {
      clearInterval(timerId);
      startGame();
    }
  }, 1000);
});

function startGame() {
  gameId = setInterval(() => {

    boxElement.forEach((box) => {
      box.innerHTML = "";
      box.onclick = null;
    });

    const randomIndex = Math.floor(Math.random() * boxElement.length);
    const currentBox = boxElement[randomIndex];
    let isHit = false;

    currentBox.innerHTML = `<img src="/shark1.png" style="width: 100%; height: 100%;">`;

    currentBox.onclick = () => {
      isHit = true; 
      currentBox.onclick = null; 
      currentBox.innerHTML = ""; 
      
      alert("Molodes yuttiz gap yo");
      
      clearInterval(gameId);
      startBtnElement.disabled = false;
    };


    setTimeout(() => {

      if (isHit) return;


      currentBox.innerHTML = "";
      currentBox.onclick = null;
      
      lives--;
      if (lives >= 0) {
        hearts[lives].style.opacity = "0";
      }

      if (lives <= 0) {
        alert("Yutqazib qoydisu...");
        clearInterval(gameId);
        startBtnElement.disabled = false;
      }
    }, 500); 
  }, 2500); 
}