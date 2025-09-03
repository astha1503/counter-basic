console.log("JS is working darling !")
const number = document.querySelector(".number");
const down = document.querySelector('.down');
const reset = document.querySelector('.reset');
const up = document.querySelector('.up');

down.addEventListener('click' , function(){
    let currNum = parseInt(number.textContent);
    if(currNum <= 0){
        return;
    }
    number.textContent = currNum - 1;
})

reset.addEventListener('click' , function(){
    number.textContent = 0;
})

up.addEventListener('click' , function(){
    let currNum = parseInt(number.innerHTML);
    number.textContent = currNum + 1;
})
