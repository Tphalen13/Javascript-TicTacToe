
const gameRunning = "Yes";

let currentPlayer = "X";
const winner = "You Won!";
const tie = "It's a tie! Play Again!";

const pawImage = document.createElement("img");
    pawImage.src = "outline_pets_black_24dp.png";

const xImage = document.createElement("img");
    xImage.src = "close_FILLO_wght400_GRADO_opsz48.png";
const oImage = document.createElement("img");
    oImage.src = "radio_button_unchecked_FILLO_wght400_GRADO_opsz48.png";

const table = {sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9};

const tileChange = function(){

    let sq1 = document.querySelector(".sq1");
    let sq2 = document.querySelector(".sq2");
    let sq3 = document.querySelector(".sq3");
    let sq4 = document.querySelector(".sq4");
    let sq5 = document.querySelector(".sq5");
    let sq6 = document.querySelector(".sq6");
    let sq7 = document.querySelector(".sq7");
    let sq8 = document.querySelector(".sq8");
    let sq9 = document.querySelector(".sq9");

    sq1.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });

    sq2.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });

    sq3.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });

    sq4.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });

    sq5.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });

    sq6.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });

    sq7.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });

    sq8.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });

    sq9.addEventListener("click", function(){
        if(currentPlayer === "X"){
            image.src = xImage;
        } else if(currentPlayer === "O"){
            image.src = oImage;
        }
    });
};

tileChange();

const tieOrWin = function(){
    if((sq1===sq2===sq3) && (sq1 != pawImage)){
    return winner;
    } else if((sq4===sq5===sq6) && (sq4 != pawImage)){
        return winner;
    } else if((sq7===sq8===sq9) && (sq7 != pawImage)){
        return winner;
    } else if((sq1===sq4===sq7) && (sq1 != pawImage)){
        return winner;
    } else if((sq2===sq5===sq8) && (sq2 != pawImage)){
        return winner;
    } else if((sq3===sq6===sq9) && (sq3 != pawImage)){
        return winner;
    } else if((sq3===sq5===sq7) && (sq3 != pawImage)){
        return winner;
    } else if((sq1===sq5===sq9) && (sq1 != pawImage)){
        return winner;
    } else {
        return tie;
    }
};

tieOrWin();

const switchPlayer = function(){
    if((currentPlayer === "x") && (gameRunning === "Yes")){
        currentPlayer = "O";
    }else if((currentPlayer === "O") && (gameRunning === "Yes")){
        currentPlayer = "X";
    }
};

switchPlayer();
