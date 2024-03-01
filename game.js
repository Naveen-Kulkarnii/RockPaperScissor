let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#play")
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");




const gencompchoice=()=>{
    let options=["Rock","Paper","Scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const drawgame = () => {
    console.log("Draw Game"); 
    msg.innerText="Game draw,play Again";
    msg.style.color="White"
}
const  ShowWinner = (userwin) => {
    if(userwin) {
        userScore++;
        userscorepara.innerText=userScore;
        console.log("You win!");
        msg.innerText="You Win!"
        msg.style.color="darkgreen"
        bgtrue.style.backgroundcolor="white";

    }
    else{
        compScore++;
        compscorepara.innerText=compScore;
        console.log("You Lose");
        msg.innerText="You Lose";
        msg.style.color="red"
    }

}

const gameplay = (userchoice) =>{
    console.log("user choice =",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice =",compchoice);

    if (userchoice === compchoice) {
        drawgame();
    }else{
        let userwin = true;
    
    if(userchoice === "Rock"){
        userwin=compchoice === "Paper" ? false : true;
    }
    else if(userchoice==="Paper"){
       userwin = compchoice ==="Scissors" ? false : true;

    }
    else{
        userwin = compchoice === "Rock" ? false : true;
    }
    ShowWinner(userwin);
}

    
    
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
    const userchoice=choice.getAttribute("id");
    gameplay(userchoice);
    });
});

