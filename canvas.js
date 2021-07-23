var canvas = document.querySelector("canvas");
var cx = canvas.getContext("2d");
var ctx = canvas.getContext("2d");
var c = canvas.getContext("2d");
var context = canvas.getContext("2d");
var scr_text = canvas.getContext("2d");
canvas.width = 800;
canvas.height =400;
var t=0,v=130,u=145,w=100,z;
var speed=1,y1=80,i=0,j=0,x1=750,g=750,z;
var gameovercheck=0,h=Math.floor(Math.random()*2);
var x=800,score=0,Hscore=localStorage.getItem("Hscore");
console.log(Hscore);
if(Hscore==null)
Hscore=0;
var arr =[0,350];
var y= Math.floor(Math.random()*2);
z= Math.floor(Math.random()*10);
animate();
var postion =50;
function animate()
{   cx.clearRect(0,0,innerWidth,innerHeight);
    if(t==0)
    requestAnimationFrame(animate);
    c.fillStyle="black";
    c.fillRect(0,0,800,50);
    c.fillRect(0,350,800,50);
    drawcircle(x1,y1);
    if(x<=0)
    {
        y= Math.floor(Math.random()*2);
        x=800;
    }
    z= Math.floor(Math.random()*10);
    if(x<=300&&j==0&&z%2==0)
    {
      j=1;
      h= Math.floor(Math.random()*2);
    }
    if(j==1)
    {
        cx.fillStyle="white";
        cx.fillRect(g,arr[h],50,50);
        g-=speed;
        if(g<=0)
        {
            g=800;
        j=0;
        }
    }

    cx.fillStyle="white";
    cx.fillRect(x,arr[y],50,50);
    //cx.fillStyle="blue";
   // cx.fillRect(80,postion,50,50);
    drawt(postion);
    cd=col_dic();
    var cd;
    scr_text.fillStyle="Black";
    scr_text.font = "15px Arial";
    scr_text.fillText("Score:"+score/100,700,80);
    scr_text.fillStyle="RED";
    scr_text.font = "15px Arial";
    scr_text.fillText("Highest Score:"+Hscore,655,100);
    if(((y==0&&postion==50)&&(x>80&&x<180))||((y==1&&postion==350)&&(x>=50&&x<130))||cd==0||((h==0&&postion==50)&&(g>80&&g<180))||((h==1&&postion==350)&&(g>=50&&g<130)))
    {
            
            t=1;
            if(Hscore<score/100)
            {
            localStorage.setItem("Hscore",score/100);
            scr_text.fillStyle="BLUE";
            scr_text.font="20px Arial";
            scr_text.fillText("Congratulation! You Have Crossed Highest Score!",200,250);
            }
             gameovercheck=1;
            cancelAnimationFrame(animate);
            scr_text.font="20px Arial";
            scr_text.fillStyle="RED";
            scr_text.fillText("Game Over!",370,200);
            scr_text.fillText("Press Enter key to Restart!",310,220);
            return 0;
    }
    speed+=0.001;
    x-=speed;
    score++;
    if(y1==80)
    {
    i=0;
    }
    if(y1==320)
    {
        i=1;
    }
    if(i==0)
    {
    y1+=2;
    }
    if(i==1)
    {
    y1-=2;
    }
    x1-=0.5;
    if(x1<30)
    {
    x1=750;
    y1=80;
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
       if(postion==350)
       {
        postion=50;
        v=130;
        u=145;
        w=100;
       }
       else{
        postion=350;
        v=80;
        u=115;
        w=300;
       }
    }
    if(e.keyCode==13)
       if(gameovercheck==1)
       location.reload();
}
function drawt(pos)
{
    context.fillStyle = "#FFFFFF";
    context.beginPath();
    context.moveTo(u,w);
    context.lineTo(v, pos);
    context.lineTo(v+50, pos);
    context.closePath();
    context.lineWidth = 2;
    context.strokeStyle = '#666666';
    context.stroke();
    context.fillStyle = "#FCCF00";
    context.fill();
}
function drawcircle(x1,y1)
{
ctx.beginPath();
ctx.arc(x1, y1, 30, 0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle="#ACCF11";
ctx.fill();
}
function col_dic()
{
    var xx =u-x1;
    var yy=w-y1;
    var xy=xx*xx+yy*yy;
    var d=Math.sqrt(xy);
    console.log(x1);
    if(d<30)
    {
    return 0;
    }
    else
    return 1;
}