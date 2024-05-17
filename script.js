let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You won ! your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You lost ! ${compChoice} beats your ${userChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText = "Game is draw";
    msg.style.backgroundColor = "black";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "scissor" ? true: false ;
        } else if (userChoice === "paper") {
            userWin = compChoice === "stone" ? true : false ;
        } else if (userChoice === "scissor") {
            userWin = compChoice === "stone" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
