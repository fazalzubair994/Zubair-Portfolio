document.querySelectorAll(".expandBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.innerText === "+") btn.innerText = "-";
    else btn.innerText = "+";
    const answerElement =
      this.closest(".QuestionContainer").querySelector(".answer");
    answerElement.classList.toggle("showAnswer");
  });
});
