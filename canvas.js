var canvas = document.querySelector("canvas");
var cx = canvas.getContext("2d");
var c = canvas.getContext("2d");
canvas.width = 500;
canvas.height =200;
var t=0;
var x=500,score=0,Hscore=localStorage.getItem("Hscore");
console.log(Hscore);
if(Hscore==null)
Hscore=0;
document.getElementById("hscr").innerHTML=Hscore;
var arr =[0,150];
var y= Math.floor(Math.random()*2);
animate();
var postion =50;
function animate()
{   cx.clearRect(0,0,innerWidth,innerHeight);
    if(t==0)
    requestAnimationFrame(animate);
    c.fillStyle="black";
    c.fillRect(0,0,500,50);
    c.fillRect(0,150,500,50);
    if(x==0)
    {
        y= Math.floor(Math.random()*2);
        x=500;
    }
    cx.fillStyle="white";
    cx.fillRect(x,arr[y],50,50);
    cx.fillStyle="blue";
    cx.fillRect(80,postion,50,50);
    if(x<=80&&x>=30)
    {
        if((y==0&&postion==50)||(y==1&&postion==100))
        {
            if(t==0)
            alert("Game Over!");
            t=1;
            if(Hscore<score/100)
            {
            localStorage.setItem("Hscore",score/100);
            document.getElementById("hs").innerHTML="Congratulation! You Crossed Highest Score!";
            document.getElementById("hscr").innerHTML=score/100;
            }

            cancelAnimationFrame(animate);
            return 0;
        }
    }
    x--;
    score++;
    document.getElementById("sc").innerHTML=score/100;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
       if(postion==50)
       postion=100;
       else
       postion=50;
    }
}
