  // IMG1
  var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
  var changeImg1 = "./images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", changeImg1);
  // IMG2
  var randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
  var changeImg2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", changeImg2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
  } else {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
  }
