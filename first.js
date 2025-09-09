let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rst");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msgp=document.querySelector("#msg");


let turnO=true;
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
const rstgame=()=>{
  turnO=true;
  enableboxes();
  msgcontainer.classList.add("hide");
  


}
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText="O";
      box.style.color="#6A0DAD"
      turnO=false;
    }else{
      box.innerText="X";
      box.style.color="#f32d65ff"
      turnO=true;
    }
    box.disabled=true;
    checkw();
    
  });

});
const disableboxes=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
  }
const enableboxes=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
  }
const showWinner=(winner)=>{
  msgp.innerText=`Congratulations! Winner is ${winner}  🎉`;
  msgcontainer.classList.remove("hide");
  
}

const checkw=()=>{
  for (let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val !="" && pos2val!="" && pos3val!=""){
      if(pos1val===pos2val && pos2val ===pos3val){
        showWinner(pos1val);
        disableboxes();

      }
      
    }
      
    }
  }
newgamebtn.addEventListener("click",()=>{
  rstgame();
})
reset.addEventListener("click",()=>{
  rstgame();
})


