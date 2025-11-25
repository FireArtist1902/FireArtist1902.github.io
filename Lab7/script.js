const body = document.getElementById("body");
body.innerHTML = `<div class="container">
    <div class="questionContainer">
      <label for="question">Введіть своє запитання:</label>
      <input type="text" name="question" id="question">
      <button id="send">Відправити запитання</button>
    </div>
    <div class="imageContainer">
      <img src="magicBall.png" alt="Магічна куля">
      <p id="result">example</p>
    </div>
  </div>`;
const question = document.getElementById("question");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  const result = document.getElementById("result");
  if(question.value != "" && question.value[question.value.length - 1] == '?')
  {
    let resultInt = Math.floor(Math.random(4)*10);
    let resultStr = "";
    switch(resultInt){
      case 0: resultStr = "Так"; break;
      case 1: resultStr = "Ні"; break;
      case 2: resultStr = "Можливо"; break;
      case 3: resultStr = "Спробуй ще"; break;
    }
    result.innerText = resultStr;
  }
  else{
    result.innerText = "Це не \n питання!"
  }
})