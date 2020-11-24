// alert("5"); 
let lifeLeft = 3;
let lifeRight = 3;


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

    if(lifeLeft == 0){
        alert("left har gya ");
    }

    if(lifeRight == 0){
        alert("right har gya ");
    }

    //handel life
    if(ball.left < leftPaddle.left)
    {
        lifeLeft--;
        horizontalfalg = 0;
    }
    if(ball.right > rightPaddle.left){
        lifeRight--;
        horizontalfalg = 5;
        
    }

    //handel vertical bound
    if (ball.top < board.top) {
        verticalfalg = 0;
    }
    if (ball.bottom > board.bottom) {
        verticalfalg = 5;
    }

    if (verticalfalg == 0) {
        let {top} = ball;
        eleBall.style.top = top + 3 + "px";

    }
    if (verticalfalg == 5) {
        let { top } = ball;
        eleBall.style.top = top - 3 + "px";
    }
    //handel horizontal
    if (ball.left < leftPaddle.right && ball.top > leftPaddle.top && ball.bottom < leftPaddle.bottom) {
        horizontalfalg = 0;
    }
    else if (ball.right > rightPaddle.left && ball.top > rightPaddle.top && ball.bottom < rightPaddle.bottom) {
        horizontalfalg = 5;
    }



    //handel horizontal ball movement
    if (horizontalfalg == 0) {
        eleBall.style.left = ball.left + 3 + "px";
    }
    if (horizontalfalg == 5) {
        eleBall.style.left = ball.left - 3 + "px";
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
            movePaddle(elePaddleLeft,-20);
        }
        else if (key.key == "ArrowDown") {
            movePaddle(elePaddleLeft,20);

        }
        else if (key.key == "w") {
            movePaddle(elePaddleRight,-20);
        }
        else if (key.key == "s") {
            movePaddle(elePaddleRight,20);
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





