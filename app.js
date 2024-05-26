let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msg=document.querySelector('#msg');
let msgCon=document.querySelector('.msg-container');

let turnO=true;

let winningPattern=[[0,1,2],
[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8], [2,4,6]
];

const resetgame=()=>
{
turnO=true;
enabledboxes();
msgCon.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener(("click"),()=>
{
    if(turnO){
     box.innerText="O";
     turnO=false;
   }else{
    box.innerText="X";
    turnO=true;
    }
    box.disabled=true;
    checkwinner();
})
});
let enabledboxes=()=>
{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""; 
    }
}
let disabledboxes=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations , winner is ${winner}`;
    msgCon.classList.remove("hide");
    disabledboxes();
}
const checkwinner=()=>{
   for(let pattern of  winningPattern){
    let a=boxes[pattern[0]].innerText;
    let b=boxes[pattern[1]].innerText;
    let c=boxes[pattern[2]].innerText;
    if (a !="" && b !="" && c !=""){
        if(a === b && b === c){
            console.log("winner",a);
            showwinner(a);
        }
    }
   }
}
newGamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);