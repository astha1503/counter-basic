console.log("JS is working darling !")
const number = document.querySelector(".number");
const down = document.querySelector('.down');
const reset = document.querySelector('.reset');
const up = document.querySelector('.up');

down.addEventListener('click' , function(){
    let currNum = parseInt(number.innerHTML);
    if(currNum <= 0){
        return;
    }
    number.innerHTML = currNum - 1;
})

reset.addEventListener('click' , function(){
    number.innerHTML = 0;
})

up.addEventListener('click' , function(){
    let currNum = parseInt(number.innerHTML);
    number.innerHTML = currNum + 1;
})
