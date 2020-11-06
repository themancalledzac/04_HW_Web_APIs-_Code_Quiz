
    //--------------------------------------------------- Global Variables -----------------------------------------------------//
    var countdown;
    var questionPointer = 0;
    var userScore = 0;
    var userScoreWrong = 0;
    var timerEl = document.getElementById("timer");
    var timer2El = document.getElementById("timer2");
    var bodyEl = document.querySelector("quizContainer");
    var btnInitialEl = document.getElementById("btnInitial");
    var timeLeft = 74;
    //-------------------------HOME BUTTON CLICK to refresh page----------------------------------------------------------------//
    var homeEl = document.getElementById('Home');
    function reload() {
        reload = location.reload();
    }
    homeEl.addEventListener("click", reload, false);
    
    //--------------------------SCOREBOARD variable. does this work?------------------------------------------------------------//
    var scoreboard = [
        {
            User: "",
        Score: ""
    },
    {
        User: "user",
        Score: "score"
    }
]

//JSON STRINGIFY


    //--------------------------Quiz Questions Object Container-----------------------------------------------------------------//
var quizQuestions = [
    {
        question: "The amount of light on a photograph is known as the: ",
        choices: ["Exposure", "Shutter Speed", "Contrast", "Aperture"],
        answer: 0
    },
    {
        question: "The amount of light passing through a lens is defined by the:",
        choices: ["Shutter Speed", "Exposure", "Aperture", "ISO"],
        answer: 2
    },
    {
        question: "What is shutter speed measured in?",
        choices: ["Stops", "Seconds", "ISO", "Miliseconds"],
        answer: 1
    },
    {
        question: "Which is a larger aperture?",
        choices: ["F8", "F5.6", "F2.8", "F16"],
        answer: 2
    },
    {
        question: "Taking a series of exposures at, above, and below the recommended meter reading is called:",
        choices: ["Time Lapse", "Depth of Exposure", "Zooming", "Bracketing"],
        answer: 3
    },
    {
        question: "The camera meter measures the light on the subject to make the image:",
        choices: ["Steady", "Focused", "Middle Gray", "Color Balanced"],
        answer: 2
    },
    {
        question: "Which of these is NOT a compositional guideline in photography?",
        choices: ["Three seconds rule", "Rule of Thirds", "Golden Ratio", "Leading Lines"],
        answer: 0
    },
    {
        question: "When was the first color photograph taken?",
        choices: ["1821", "1905", "1861", "1921"],
        answer: 2
    },
    {
        question: "What is the side effect of using a high ISO setting?",
        choices: ["Battery Drain", "Digital Noise", "Color Imbalances", "Blurry Edges"],
        answer: 1
    },
    {
        question: "If, while shooting a photo you want a greater depth of field in the image, would you shoot at:",
        choices: ["F8", "F5.6", "F2.8", "F16"],
        answer: 3    
    },
    {
        question: "When shooting in manual mode, which of the following controls the exposure of your photograph?",
        choices: ["Aperture", "Shutter Speed", "ISO", "All of the above"],
        answer: 3
    },
    {
        question: "If your camera is set at ISO 100, how many stops of light would ISO 1600 be?",
        choices: ["Four", "Three", "Six", "Five"],
        answer: 0
    }
    
]



    //-------------------------------------------------- Initiate quiz button --------------------------------------------------//
document.getElementById("btnInitial").addEventListener("click", startGame);
    // btnInitial.addEventListener("click", startGame) 




    //--------------------------------------------------- Start Game Function --------------------------------------------------//
function startGame() {
            // When our initialbutton is clicked, 
                // Hide initial question    
    btnInitialEl.style.display = 'none'; 
            // Display four possible answer buttons.
    document.getElementById('btnAllFour').style.display = 'flex';
            //display countdown
            // commented this out so it would stop showing up. we only want the timer in the timer button.---------------//
    // timerEl.style.display = 'flex';
            //start countdown
    quiz();
    // timer();
    var timer = setInterval(function() {
        if(timeLeft <= 0) {
            clearInterval(timer);
        }
        timerEl.textContent = "Time Left: " + timeLeft;
        timeLeft--;
    }, 1000);
};

    //---------------------------------------------------- Set Timer to 90 seconds, and display in timerEl----------------------//



    //---------------------------------------------------- START TIMER Function ------------------------------------------------//







    //---------------------------------------------------- Start QUIZ Function -------------------------------------------------//
function quiz() {
    //         // For loop for each question to be asked.
    // for (let i=0; i<quizQuestions.length; i++) {
    //     console.log(quizQuestions[i]);
        
    //     var correctAnswer = quizQuestions[i].answer
        

            // for each i, all questions should be properly populated.
            // Display questions[i]        
            // Display questions.choices[0-3]


    document.getElementById("mainQuestion").textContent = quizQuestions[questionPointer].question;
    document.getElementById("btnOne").textContent = quizQuestions[questionPointer].choices[0];
    document.getElementById("btnTwo").textContent = quizQuestions[questionPointer].choices[1];
    document.getElementById("btnThree").textContent = quizQuestions[questionPointer].choices[2];
    document.getElementById("btnFour").textContent = quizQuestions[questionPointer].choices[3];

    document.getElementById('Score').textContent = "Score: " + userScore;

            // if button[i] === true;
            
      


            // 

            // Do we put the btn.onclick inside this function? or split it up?
            // if questionPointer[i] = answer[i] , move to questions[i+1]
            // else timeLeft = -10;
            // if timeLeft <= 0,
            // run fuction conclusion()
            // else move to quesions[i+1]        
            
            // }    
};

document.getElementById("btnAllFour").addEventListener("click", (event) => {
            
            
            // Event listener for which button is clicked.
    if (quizQuestions[questionPointer].answer == event.target.getAttribute("data-index")) {
        userScore++;
        console.log(quizQuestions[questionPointer].answer);
        console.log(event.target.getAttribute("data-index"));
        console.log("correct");
    }
    else {
        userScore--;
        console.log(quizQuestions[questionPointer].answer);
        console.log(event.target.getAttribute("data-index"));
        console.log("wrong");
        timeLeft -= 10;
        conclusion();
    }           
    questionPointer++;
    quiz();
        console.log()           
})

// Once time 

function conclusion() {

}
        // persist my data - LOCAL STORAGE - browser API
            // localStorage.getItem - // refer to what you call it, onlyu thing it takes
            // localStorage.setItem - // takes in 2 things, what you call it, and the value
            // // Front end database - FIREBASE
            // free databases - MONGO 
                // database BRIDGE 


        // Prompt user to save Initials
        // on enter
        // display leaderboard
                // initials, with score
                // grid fashion?
                // a 2wide by ilong grid
                // grows by i+1 every time the game is played
                // store
        // if function conclusion() runs,
            // Then var scoreboard[i+1]
            // store initial prompt in scoreboard[i][0]
            // store userScore in scoreboard[i][1]
