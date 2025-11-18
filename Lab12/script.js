const cardText = $("#cardText");
const leftBtn = $("#leftButton");
const rightBtn = $("#rightButton");
const scores = $("#scores");
const input = $("#input");
const countCor = $("#countCor");
const countIncor = $("#countIncor");

const diffBtn = $("#diffBtn")

const words = [
  [
    { en: "apple", ua: "яблуко" },
    { en: "car", ua: "машина" },
    { en: "house", ua: "будинок" },
    { en: "sun", ua: "сонце" },
    { en: "book", ua: "книга" }
  ],
  [
    { en: "nature", ua: "природа" },
    { en: "weather", ua: "погода" },
    { en: "arrival", ua: "прибуття" },
    { en: "freedom", ua: "свобода" },
    { en: "memory", ua: "памʼять" }
  ],
  [
    { en: "determination", ua: "рішучість" },
    { en: "consequence", ua: "наслідок" },
    { en: "significance", ua: "значущість" },
    { en: "perspective", ua: "перспектива" },
    { en: "responsibility", ua: "відповідальність" }
  ]
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function shuffleWordsByLevel(words) {
  return words.map(levelArray => shuffleArray(levelArray));
}

const shuffled = shuffleWordsByLevel(words);

console.log(shuffled)

let round = 1;
let diffIndex = 0;
let correct = 0;
let incorrect = 0;
let level = ''

scores.text(`${round}/10`)


easy.value = true;

diffBtn.bind("click", () =>{
  const selected = $("input[name='diff']:checked").val();
  diffIndex = +selected;
    cardText.text(shuffled[diffIndex][round - 1].en)
  console.log(diffIndex);
})

rightBtn.bind("click", () =>{
    if(round <= 10)
    {
    if(input.val().toLowerCase() == shuffled[diffIndex][round - 1].ua)
    {
        round++;
        console.log(round)
        correct++;
        countCor.text(correct);
        input.val("")
        cardText.text(shuffled[diffIndex][round - 1].en);
        scores.text(`${round}/10`)
    }else{
        if(input.val() != shuffled[diffIndex][round - 1].ua && input.val() != '')
        {
            round++;
            incorrect++;
            countIncor.text(incorrect)
            input.val("")
            cardText.text(shuffled[diffIndex][round - 1].en);
            scores.text(`${round}/10`)
        }
        else{
            alert("Введіть значення у поле");
        }
    }
}
    else    
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
