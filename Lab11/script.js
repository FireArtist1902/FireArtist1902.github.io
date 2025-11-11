const cardText = $("#cardText");
const leftBtn = $("#leftButton");
const rightBtn = $("#rightButton");
const scores = $("#scores");
const input = $("#input");
const countCor = $("#countCor");
const countIncor = $("#countIncor")

const words = [
  { en: "apple", ua: "яблуко" },
  { en: "car", ua: "машина" },
  { en: "house", ua: "будинок" },
  { en: "sun", ua: "сонце" },
  { en: "book", ua: "книга" },
  { en: "water", ua: "вода" },
  { en: "tree", ua: "дерево" },
  { en: "dog", ua: "собака" },
  { en: "cat", ua: "кіт" },
  { en: "flower", ua: "квітка" }
];

function shuffleArray(array) {
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

const shuffled = shuffleArray(words)

let round = 1;
let correct = 0;
let incorrect = 0;
let level = ''

scores.text(`${round}/10`)

cardText.text(shuffled[round - 1].en);

rightBtn.bind("click", () =>{
    if(input.val() == shuffled[round - 1].ua)
    {
        round++;
        correct++;
        countCor.text(correct);
        input.val("")
        cardText.text(shuffled[round - 1].en);
        scores.text(`${round}/10`)
    }else{
        if(input.val() != shuffled[round - 1].ua && input.val() != '')
        {
            round++;
            incorrect++;
            countIncor.text(incorrect)
            input.val("")
            cardText.text(shuffled[round - 1].en);
            scores.text(`${round}/10`)
        }
        else{
            alert("Введіть значення у поле");
        }
    }
    if(round == 10 && correct + incorrect == 10)
    {
        if(correct == 10)
        {
            level = "чудовий"
        }
        else
        {
            if(correct >= 7 && correct <=9)
            {
                level = "непоганий"
            }else
            {
                if(correct >=3  && correct <=6)
                {
                    level = "поганий"
                }
                else{
                    level = "жахливий"
                }
            }
        }
        alert(`Ваш рівеня знання мови ${level}`)
    }
})
