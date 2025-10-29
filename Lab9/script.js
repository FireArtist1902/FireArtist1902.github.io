const playerName = document.getElementById("playerName");
let name = prompt("Введіть ім'я");
if(name.length < 5)
{
    alert("Ім'я замале");
    location.reload();
}

const playerScore = document.getElementById("playerScore");
const playerCard = document.getElementById("playerCard");

const tryCounter = document.getElementById("try");
const generateBtn = document.getElementById("btn");

const computerScore = document.getElementById("computerScore");
const computerCard = document.getElementById("computerCard");
