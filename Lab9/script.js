let name = prompt("Введіть ім'я");
if(name.length < 5)
{
    alert("Ім'я замале");
    location.reload();
}

const playerName = document.getElementById("playerName");
const playerScore = document.getElementById("playerScore");
const playerCard = document.getElementById("playerCard");

const tryCounter = document.getElementById("try");
const generateBtn = document.getElementById("btn");

const computerScore = document.getElementById("computerScore");
const computerCard = document.getElementById("computerCard");

const values = [2, 3, 4, 6, 7, 8, 9, 10, 11]; // 9 numbers

let rounds = 0;

tryCounter.innerText = `Спроба ${rounds} з 3`

playerName.innerText = name;

generateBtn.addEventListener("click", () => {
    let tempPlayerScore = Math.floor(Math.random() * 10);
    let tempComputerScore = Math.floor(Math.random() * 10);
    playerCard.style.backgroundImage = `url("Images/${values[tempPlayerScore]}R.png")`
    computerCard.style.backgroundImage = `url("Images/${values[tempComputerScore]}B.png")`
});