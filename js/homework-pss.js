let pc = document.querySelector(".pc");
let player = document.querySelector("player");
let pcImg = document.querySelector(".pc.pc-img");
let resultBox = document.querySelector(".result-box");
let resultText = document.querySelector(".result-text");
let gogo = document.querySelector(".pc.gogo");
let playerState;
let pcState;
let attack = document.querySelector("#attack");
let again = document.querySelector("#again");
let labelAll = document.querySelectorAll("label");
let prevAll = document.querySelectorAll(".preview");

attack.addEventListener("click", function () {
  // get player value
  getPlayer();

  // check choiced
  if (!playerState) {
    console.log(playerState);
    alert("plz choice one");
    return;
  }

  // stop gogo
  gogo.style.display = "none";

  //pc random 1,2,3
  pcState = getPc(1, 3);
  // console.log(pcState);

  // show pc img
  if (pcState == 1) {
    pcImg.style.backgroundImage = `url(./img/scissor.png)`;
  } else if (pcState == 2) {
    pcImg.style.backgroundImage = `url(./img/stone.png)`;
  } else if (pcState == 3) {
    pcImg.style.backgroundImage = `url(./img/paper.png)`;
  }
  console.log(pcImg.style);

  // check win lose + print result
  // console.log(playerState.value);
  // 1 剪刀 2石頭 3 布
  let i = playerState.value - pcState;
  if (i == 1 || i == -2) {
    //
    console.log("plyerWin");
    resultBox.style.display = "block";
    resultText.textContent = "NICEEEEE 贏了拉";
  } else if (i == 2 || i == -1) {
    //
    console.log("plyerLose");
    resultBox.style.display = "block";
    resultText.textContent = "輸惹嗚哇哇嗚阿哇哇哇";
  } else if (i == 0) {
    console.log("Even");
    resultBox.style.display = "block";
    resultText.textContent = "平手!!再試試看吧!!";
  }
  // console.log(resultText.textContent);
});

again.addEventListener("click", function () {
  resultBox.style.display = "none";
  pcImg.style.backgroundImage = "";
  getPlayer();
  playerState.checked = "";

  for (let i = 0; i < 3; i++) {
    prevAll[i].style.display = "";
  }
  gogo.style.display = "block";
});

function getPc(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayer() {
  playerState = document.querySelector('input[name="choice"]:checked');
}
