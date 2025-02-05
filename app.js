let boxes = document.querySelectorAll (".box");
let btn = document.querySelector("#resetbtn");
let winner = document.querySelector("#msz");
let newGame = document.querySelector("#newgame");

let turnx = true;

const winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", ()=>
    {
        console.log("btn are clicked");
        box.innerText ="X";
        if(turnx) {
            box.innerText="X";
            turnx = false;
            box.disabled = "true"
        } else {
            box.innerText= "O";
            turnx = true;
            box.disabled = "true"
        }

        checkWinner();
    });
});


const showWinner = (winner)=> {
    msz.innerText =`winner is ${winner}`;
    msz.classList.remove("hide");
    
      
}

const disabledbox = ()=> {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledbox = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        
    }
}

const resetGame = ()=> {
    enabledbox();
    turnx = true;
    msz.classList.add("hide")
}

 

const checkWinner= () => {
    for (let patterns of winningpattern) {
       let pos1 = boxes[patterns[0]].innerText;
       let pos2 = boxes[patterns[1]].innerText;
       let pos3 = boxes[patterns[2]].innerText;

       if(pos1!="" && pos2 != "" && pos3 != "") {
        if(pos1===pos2 && pos2===pos3) {
            console.log("WINNER", pos1);
            showWinner(pos1);
            disabledbox();
           
        }
       }

    }
    
}

resetbtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);


 
