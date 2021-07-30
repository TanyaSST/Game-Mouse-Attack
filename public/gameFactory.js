function gameFactory() {
  let {mouse,snakeStates,appleStates}= state;
  let  startScreen= document.querySelector('.start-screen');
  let  playScreen= document.querySelector('.play-screen');
  let  scoreScreen= document.querySelector('.score-screen');

  let mouseElement= createMouse(mouse.x, mouse.y);
  
  playScreen.appendChild(mouseElement);
 


 let factory={
      startScreen,
      playScreen,
      mouseElement,
      scoreScreen,
     createSnake:()=>{
      let snake=document.createElement('div');
      snake.classList.add('snake');
      snake.style.width=snakeStates.width+'px';
      snake.style.height=snakeStates.height+'px';

      snake.style.left=playScreen.offsetWidth-snakeStates.width+'px';
      snake.style.top=(playScreen.offsetHeight-snakeStates.height)*Math.random()+'px';
      playScreen.appendChild(snake);
     },
     createAppleAttack:()=>{
       let apple=document.createElement('div');
       apple.classList.add('apple');
       apple.style.width=appleStates.width +'px';
       apple.style.height=appleStates.height + 'px';

       apple.style.top=mouse.y +'px';
       apple.style.left=mouse.x +'px';

       playScreen.appendChild(apple);
     }
 }  
 
  return factory;
}
function createMouse(posX,posY) {
    let mouseElement = document.createElement('div');
    mouseElement.classList.add('mouse');
    mouseElement.style.top=posY+'px';
    mouseElement.style.left=posX+'px';
    return mouseElement;
}
