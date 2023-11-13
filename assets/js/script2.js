const receivedData = sessionStorage.getItem('myData');
const score = document.getElementById('score');
const btn1 = document.getElementById("submitButon");
const codQuiz = document.getElementById("cod")

codQuiz .addEventListener("click", function(){
    window.location.href = "../../index.html";
})

btn1.addEventListener("click", function(event) {

    event.preventDefault();
    window.location.href = "../../index.html";
  });
score.textContent = receivedData;