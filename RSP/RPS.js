let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

const drawGame = () => {
    message.innerText = "Match is draw";
};

const showWinner = (userWin) => {
    if(userWin){
        message.innerText = "Congratulation You Beat computer";
        userScore++;
        user_score.innerText = userScore;
    }
    else{
        message.innerText = "Sorry, computer beat you";
        compScore++;
        comp_score.innerText = compScore;
    }
}; 

const palyGame = (userChoice) => {
    const compChoice = generateComputerChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

const generateComputerChoice = () => {
    const opetion = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return opetion[random];
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("hello user")
        palyGame(userChoice);
    });
});
