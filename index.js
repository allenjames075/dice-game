
function rollDice () {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelector(".img1").setAttribute("src", randomImageSource1);
    document.querySelector(".img2").setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
    } else {
    document.querySelector("h1").textContent = "Draw!";
    }
}

document.getElementById("playBtn").addEventListener("click", rollDice);
