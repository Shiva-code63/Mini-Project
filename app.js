// JavaScript file for backend

let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "orange", "darkblue"];

let started = false;
let level = 0;

let h2 =  document.querySelector("h2");

document.addEventListener("keydown", function(){
    if (started == false){
        console.log("Game started!");
        started = true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
}

function userFlash(btn){
    btn.classList.add("userflash");[]
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 150);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText = `Your level is ${level}`;

    let randomx = Math.floor(Math.random()*4); 
    let randomnum = btns[randomx];
    let randombtn = document.querySelector(`.${randomnum}`);
    gameSeq.push(randomnum);
    console.log(gameSeq);
    btnFlash(randombtn);
};


function checkAns(idx){

    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelup(), 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to restart!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
};

function btnpress(){
    let btn = this;
    userFlash(this);

    let color = btn.getAttribute("id");
    userSeq.push(color);

    checkAns(userSeq.length -1);
}

let allbtns = document.querySelectorAll(".btns");
for (let btn of allbtns){
    btn.addEventListener("click", btnpress);
};

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
