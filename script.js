score=0;
cross=true;
document.onkeydown=function(e){
    console.log("key code is", e.keyCode)
    if(e.keyCode==38)
        fairy=document.querySelector('.fairy');
        fairy.classList.add('animatefairy');
        setTimeout(()=>{
            fairy.classList.remove('animatefairy');
        },700);
    if(e.keyCode==39){
        fairy=document.querySelector('.fairy');
        fairyX=parseInt(window.getComputedStyle(fairy,null).getPropertyValue('left'));
        fairy.style.left=fairyX+112+"px";
    }
    if(e.keyCode==37){
        fairy=document.querySelector('.fairy');
        fairyX=parseInt(window.getComputedStyle(fairy,null).getPropertyValue('left'));
        fairy.style.left=(fairyX - 112)+"px";
    }
}
setInterval(() => {
    fairy = document.querySelector('.fairy');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(fairy, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(fairy, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameover.style.visibility='visible';
        obstacle.classList.remove('obs');
    }
    
   
}, 100);