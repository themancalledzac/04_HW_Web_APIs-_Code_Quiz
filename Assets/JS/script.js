

// var timeLeft = 90;
// setInterval - // JS API
// var questionPointer = [0];

// Create initial button
// var btnInitial = document.createElement("button");
// btnInitial.textContent = "Click to start quiz";
// questions.appendChild(btnInitial);
// btnInitial.setAttribute("style", "padding:50px; background-color:grey");



var userScore = 0;

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

var quizQuestions = [
    {
        question: "The amount of light on a photograph is known as the:",
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

// display question
document.getElementById("btnInitial").addEventListener("click", startGame);
// btnInitial.addEventListener("click", startGame) 


    // When our initialbutton is clicked, 
        // Hide initial question
        // startGame function (init function)
        // go back to questions[0]



function startGame() {
    document.getElementById('btnInitial').style.display = 'none'; 

    // run function timer
    // run function quiz
};


// function timer() {
//         // setInterval(JS API) 90 - 1}\
//         function quiz()

// }

// // container for all 4 buttons
// // addEventListener for the 4 buttons
    

// function quiz() {

//         // for loop determining which question we are on
//         // Display questions[i]
//         // Display questions.choices[0-3]
//         // Do we put the btn.onclick inside this function? or split it up?
//         // Event listener for which button is clicked.
//         // if questionPointer[i] = answer[i] , move to questions[i+1]
//         // else timeLeft = -10;
//         // if timeLeft <= 0,
//             // run fuction conclusion()
//         // else move to quesions[i+1]
//         //
//     }

// function conclusion() {

//         // Prompt user to save Initials
//         // on enter
//         // display leaderboard
//                 // initials, with score
//                 // grid fashion?
//                 // a 2wide by ilong grid
//                 // grows by i+1 every time the game is played
//                 // store
//         // if function conclusion() runs,
//             // Then var scoreboard[i+1]
//             // store initial prompt in scoreboard[i][0]
//             // store userScore in scoreboard[i][1]


// }











// for ( var i=0; i < questions.length; i++) {
//     var question = questions[i].question;

// }