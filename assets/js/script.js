const btn1 = document.getElementById('button1');
const preguunta = document.getElementById('cuestionamientos');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const audio = new Audio('../audio/audio.mp3');
const timer = document.getElementById('timer');
let time = 100;
let numPregunta = 0;
let flag = 0;

const allQuestions = [
    {
        Q: "What is HTML?",
        A:[
            {answer: "Hyper Text Markup Language", is:true},
            {answer: "Hyper Test Makeup Location", is:false},
            {answer: "Hope This Email Last", is:false},
            {answer: "Hyper Touch Medial Language", is:false},
        ]
    },
    {
        Q: "What is JavaScript?",
        A: [
        { answer: "A type of coffee made by programmers.", is: false },
        { answer: "A markup language for building web pages.", is: false },
        { answer: "A programming language ", is: true },
        { answer: "An ancient  form of hieroglyphics ", is: false },
    ]
    },
    {
        Q: "What does the term 'DOM' stand for in JavaScript?",
    A: [
        { answer: "Document Object Model", is: true },
        { answer: "Data Over Mountains", is: false },
        { answer: "Dogs Objectively Meow", is: false },
        { answer: "Delicious Orange Mango", is: false },
    ]
    },

    {
        Q: "Why are we here?",
        A:[
            {answer: "To learn full stack web dev", is:false},
            {answer: "To make friends", is:false},
            {answer: "Just to suffer?", is:false},
            {answer: "( ͡° ͜ʖ ͡°)", is:true},
        ]
    },
];

function selectQuestion(){
    preguunta.textContent = allQuestions[numPregunta].Q;
    preguunta.style.color = "green";
    btn1.textContent = allQuestions[numPregunta].A[0].answer;
    btn2.textContent = allQuestions[numPregunta].A[1].answer;
    btn3.textContent = allQuestions[numPregunta].A[2].answer;
    btn4.textContent = allQuestions[numPregunta].A[3].answer;
}

selectQuestion();

function dissapear (btn) {
    btn.style.display = 'none'
}

const buttons = Array.from(document.querySelectorAll('[id^="button"]'));

buttons.forEach(function(button){
    button.addEventListener('click' , function() {
        compareAnswer(this);
    })
})

function compareAnswer (btn){
    const value = btn.innerHTML
    let i = 0;
    let resp;
    // console.log(numPregunta)
        //console.log (value)
            //console.log("sis ossys" + allQuestions[numberQuestion].A[0].answer)
            if (value === allQuestions[numPregunta].A[0].answer){
                 resp = allQuestions[numPregunta].A[0].is;
            }
            else if (value === allQuestions[numPregunta].A[1].answer){
                 resp = allQuestions[numPregunta].A[1].is;
            }
           else if (value === allQuestions[numPregunta].A[2].answer){
                 resp = allQuestions[numPregunta].A[2].is;
            }
            else if (value === allQuestions[numPregunta].A[3].answer){
                 resp = allQuestions[numPregunta].A[3].is;
            }

            if (resp){
                console.log("muy bein")
                if(numPregunta<3){
                    numPregunta++
                }
                flag++
            }

            else {
                if(time>=0){
                time = time-25;
                }
                if(numPregunta<3){
                    numPregunta++
                }
                flag++
            }
            
            selectQuestion();
           
            
            console.log("hey " + flag)
            i++
        
}

// buttons.forEach(function(questions,button){
//     button.innerHTML = 
// })

function countdown() {
    var timeInterval = setInterval(function(){
      time--;
      timer.innerHTML = "Timer:  " + time + " Seconds remaining";

      if (time> 0 ){
        audio.volume = .03
        audio.play();
      }
      else {
        audio.pause();
      }
  
      if(time <= 0 || flag==4){
        const newTime = time;
        sessionStorage.setItem('myData', newTime);
        clearInterval(timeInterval);
        window.location.href = "../pages/scores.html" 
        //timer.innerHTML = ("");
       
      }
    },1000);
}

countdown()
