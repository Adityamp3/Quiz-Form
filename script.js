document.querySelector(".submit").addEventListener("click", function () {
  for (let i = 1; i <= 4; i++) {
    let answer = document.querySelector(
      `input[name="question${i}"]:checked`
    ).value;
    let question = document.getElementById(`question${i}`);
    if (
      answer == "Tiger" ||
      answer == "Arunachal Pradesh" ||
      answer == "Droupadi Murmu" ||
      answer == "Sardar Vallabh Bhai Patel"
    ) {
      question.style.backgroundColor = "Aquamarine";
      console.log(`Correct! ${answer}✅`);
    } else {
      question.style.backgroundColor = "rgba(224, 35, 35, 0.437)";
      console.log("False! Try again!❌");
    }
  }
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  let radioButtons = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
  let questions = document.querySelectorAll(".question");
  for (let i = 0; i < questions.length; i++) {
    questions[i].style.backgroundColor = "";
  }
});
