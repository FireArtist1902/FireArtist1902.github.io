const playerName = document.getElementById("PlayerName");
playerName.innerText = prompt("Вкажіть своє ім'я");
if(playerName.innerText == "")
{
  alert("Ви не ввели ім'я");
  document.location.reload();
}
const playerScore = document.getElementById("PlayerScore");
const playerPoints = document.getElementById("PlayerPoints");
const computerScore = document.getElementById("ComputerScore");
const computerPoints = document.getElementById("ComputerPoints");
const generate = document.getElementById("generate");
let playerTempScore = 0;
let computerTempScore = 0;
let playerTempPoints = 0;
let computerTempPoints = 0;
generate.addEventListener("click", () => {
  playerTempPoints = Math.floor(Math.random()* 10);
  computerTempPoints = Math.floor(Math.random()* 10);
  playerPoints.innerText = playerTempPoints;
  computerPoints.innerText = computerTempPoints
  if(playerTempPoints > computerTempPoints)
  {
    playerTempScore++;
    playerScore.innerText = playerTempScore;
  } else
  {
    if(computerTempPoints > playerTempPoints)
    {
      computerTempScore++;
      computerScore.innerText = computerTempScore;
    }
  }
  if(playerScore.innerText == 3)
  {
    alert("Переміг гравець");
  }
  else{
    if(computerScore.innerText == 3)
    {
      alert("Переміг комп'ютер");
    }
  }
});
