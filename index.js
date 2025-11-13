function rollDice () {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomImage1 = "images/dice" + randomNumber1 + ".png";
    let randomImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelector(".img1").setAttribute("src", randomImage1);
    document.querySelector(".img2").setAttribute("src", randomImage2);

    if (randomImage1 > randomImage2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (randomImage1 < randomImage2) {
        document.querySelector("h1").textContent = "Player 2 Wins!"
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
}

document.getElementById("playBtn").addEventListener("click", rollDice);