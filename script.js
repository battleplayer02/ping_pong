// alert("5"); 
let lifeP1 = 3;
let lifeP2 = 3;


let eleBall = document.querySelector('.ball');
let ball = eleBall.getBoundingClientRect();
let pt = ball.top;
let pl = ball.left;

let verticalfalg = 0;
let horizontalfalg = 0;
const move = () => {



    let eleBall = document.querySelector('.ball');
    let ball = eleBall.getBoundingClientRect();

    let eleBoard = document.querySelector('.board');
    let board = eleBoard.getBoundingClientRect();

    let rightPaddle = document.querySelector(".right").getBoundingClientRect();
    let leftPaddle = document.querySelector(".left").getBoundingClientRect();

    if(ball.right >= rightPaddle.right){
        eleBall.style.top = pl;
        eleBall.style.left = pt;
    }
    if(ball.left <= leftPaddle.left){
        eleBall.style.top = pt;
        eleBall.style.left = pl;
    }

    //handel vertical bound
    if (ball.top < board.top) {
        verticalfalg = 0;
    }
    if (ball.bottom > board.bottom) {
        verticalfalg = 5;
    }

    if (verticalfalg == 0) {
        let { left, top, bottom, right } = eleBall.getBoundingClientRect();
        eleBall.style.top = top + 5 + "px";

    }
    if (verticalfalg == 5) {
        let { left, top, bottom, right } = eleBall.getBoundingClientRect();
        eleBall.style.top = top - 5 + "px";
    }
    //handel horizontal
    if (ball.left < board.left) {
        horizontalfalg = 0;
    }
    if (ball.right > board.right) {
        horizontalfalg = 5;
    }

    if (horizontalfalg == 0) {
        let { left, top, bottom, right } = eleBall.getBoundingClientRect();
        eleBall.style.left = left + 5 + "px";

    }
    if (horizontalfalg == 5) {
        let { left, top, bottom, right } = eleBall.getBoundingClientRect();
        eleBall.style.left = left - 5 + "px";
    }

    requestAnimationFrame(move);
}


requestAnimationFrame(move);

//key press user input

document.addEventListener(

    "keydown", (key) => {
        console.log(key.key);
        let elePaddleLeft = document.querySelector(".right");
        let elePaddleRight = document.querySelector(".left");

        if (key.key == "ArrowUp") {
            movePaddle(elePaddleLeft,-10);
        }
        else if (key.key == "ArrowDown") {
            movePaddle(elePaddleLeft,10);

        }
        else if (key.key == "w") {
            movePaddle(elePaddleRight,-10);
        }
        else if (key.key == "s") {
            movePaddle(elePaddleRight,10);
        }
    }
);

const movePaddle = (paddle,change)=>{
    let board = document.querySelector('.board').getBoundingClientRect();
    let cordpaddle = paddle.getBoundingClientRect();
    if(cordpaddle.top+change >= board.top && cordpaddle.bottom+change <= board.bottom){ 
        let {top} = cordpaddle;
        paddle.style.top = top+change+"px";
    }
}





