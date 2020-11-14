// alert("3"); 

let verticalfalg = 0;
let horizontalfalg = 0;
const move = ()=>{
    let eleBall = document.querySelector('.ball');
    let ball = eleBall.getBoundingClientRect();
    
    let eleBoard = document.querySelector('.board');
    let board = eleBoard.getBoundingClientRect(); 
    //handel vertical bound
    if(ball.top < board.top){
        verticalfalg = 0;
    }
    if(ball.bottom > board.bottom){
        verticalfalg = 3;
    }

    if(verticalfalg == 0){
        let {left,top,bottom,right} = eleBall.getBoundingClientRect();
        eleBall.style.top = top+3+"px";

    }
    if(verticalfalg == 3){    
        let {left,top,bottom,right} = eleBall.getBoundingClientRect();
        eleBall.style.top = top-3+"px";
    }
    //handel horizontal
    if(ball.left < board.left){
        horizontalfalg = 0;
    }
    if(ball.right > board.right){
        horizontalfalg = 3;
    }

    if(horizontalfalg == 0){
        let {left,top,bottom,right} = eleBall.getBoundingClientRect();
        eleBall.style.left = left+3+"px";

    }
    if(horizontalfalg == 3){    
        let {left,top,bottom,right} = eleBall.getBoundingClientRect();
        eleBall.style.left = left-3+"px";
    }
    
    requestAnimationFrame(move);
}


requestAnimationFrame(move);

