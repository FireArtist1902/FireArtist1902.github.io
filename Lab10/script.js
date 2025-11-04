let name = prompt("Введіть ім'я:")
if(name == "" || name.length < 4)
{
    location.reload();
}
let round = 0;
let elements = {
    0 : "apple",
    1 : "cherry",
    2 : "lemon",
    3 : "peach",
    4 : "pear"
}
let elementsMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

document.getElementById("userName").innerText = name
let tryes = document.getElementById("tryes")
tryes.innerText = `Спроба ${round} з 3`
let images = document.getElementsByTagName("img")
let generate = document.getElementById("generate")

generate.addEventListener("click", () =>{
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            elementsMatrix[i][j] = Math.floor(Math.random() * 5)
        }
    }
    console.log(elementsMatrix)
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            images[i * 3 + j].src = `images/${elements[elementsMatrix[i][j]]}.png`
        }
    }

    round++;
    tryes.innerText = `Спроба ${round} з 3`
    if(round > 3)
    {
        alert("Ви програли")
        location.reload()
    }

    if(elementsMatrix[0][0] == elementsMatrix[0][1] && elementsMatrix[0][0] == elementsMatrix[0][2]
        || elementsMatrix[1][0] == elementsMatrix[1][1] && elementsMatrix[1][0] == elementsMatrix[1][2]
        || elementsMatrix[2][0] == elementsMatrix[2][1] && elementsMatrix[2][0] == elementsMatrix[2][2]
    ) 
    {
        alert("Ви виграли")
        location.reload()
    }
})
