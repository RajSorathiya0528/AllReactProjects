let Game_Button = document.querySelectorAll(".Game-Button");
let Reset = document.querySelector(".ResetBtn");
let message = document.querySelector(".message");
let message_box = document.querySelector(".message-box");
let new_game = document.querySelector(".New-Game");
let Game_box = document.querySelector(".Game-Box");
let turnO = true;
let WiningPattern = [
    [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]
];


const DisabledButton = () =>{
    Game_Button.forEach((button) =>{
        button.disabled = true;
    })
};

const resetGame = () => {
    turnO = true;
    enable();
    message_box.classList.add("hide");
    Game_box.classList.remove("hide");
    Reset.classList.remove("hide");
};

const enable = () => {
    Game_Button.forEach((button) =>{
        button.disabled = false;
        button.innerText ="";
    })
};
Game_Button.forEach((Button) => {
    Button.addEventListener("click", () => {
        if(turnO){
            Button.innerText = "O";
            turnO = false;
        }
        else{
            Button.innerText = "X";
            turnO = true;
        }
        Button.disabled = true;
        ChackWinner();
    });
});

const ChackWinner = () =>{
    for(let pattern of WiningPattern){
        let posValue1 = Game_Button[pattern[0]].innerText;
        let posValue2 = Game_Button[pattern[1]].innerText;
        let posValue3 = Game_Button[pattern[2]].innerText;
        if(posValue1 != "" && posValue2 != "" && posValue3 != ""){
            if(posValue1 === posValue2 && posValue2 === posValue3){
                if(posValue1 === "O"){
                    message.innerText = "Congratulations, Winnew is O";
                    DisabledButton();
                    message_box.classList.remove("hide");
                    Game_box.classList.add("hide");
                    Reset.classList.add("hide");
                }
                else{
                    message.innerText = "Congratulations, Winner is X";
                    DisabledButton();
                    message_box.classList.remove("hide");
                    Game_box.classList.add("hide");
                    Reset.classList.add("hide");
                }
            }
        }
    }
};
new_game.addEventListener("click",resetGame);
Reset.addEventListener("click",resetGame);

