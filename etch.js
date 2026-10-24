
const container = document.querySelector('div');

function graySquare(){
    const input = prompt('Enter a Number: ');
    const totalSquare = input*input;
    const squareSize= 480 / input;
    for (let i = 0; i<totalSquare;i++){
        const div1 = document.createElement('div');
        div1.style.width=`${squareSize}px`
        div1.style.height=`${squareSize}px`
        div1.classList.add('square');
        container.appendChild(div1);

        function colorize(){
            const red = Math.floor(Math.random()*256);
            const green = Math.floor(Math.random()*256);
            const blue = Math.floor(Math.random()*256);
            div1.style.backgroundColor= `rgb(${red},${green},${blue},10%)`;
}
div1.addEventListener('mousemove',colorize)
    }
if (input>70){
   alert('Maximum set is 70');
   return;
}
}


graySquare()
