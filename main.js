var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
roverx = 20;
rovery = 20;
roverh = 70;
roverw = 100;
roverimg = "rover.png";
var mars_images = ["https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631230305220E02_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631240503684E03_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631270305224E03_DXXX.jpg"];
var random1 =Math.floor(Math.random()*3);
canvasbg = mars_images[random1];
function add()
{
    bg = new Image();
    bg.onload = uploadbg;
    bg.src = canvasbg;
    ri = new Image();
    ri.onload = uploadri;
    ri.src = roverimg;
}
function uploadbg()
{
    ctx.drawImage(bg, 0, 0, 700, 500);
}
function uploadri()
{
    ctx.drawImage(ri, roverx, rovery, roverw, roverh);
}
window.addEventListener("keydown", my_keyDown)
function my_keyDown(e)
{
kp = e.keyCode;
if(kp == "37")
{
left();
}
if(kp == "38")
{
up();
}
if(kp == "39")
{
right();
}
if(kp == "40")
{
down();
}
}
function left()
{
    if(roverx >= 0)
    {roverx = roverx-10;
     uploadbg();
     uploadri();
    }
}
function right()
{
    if(roverx <= 600)
    {roverx = roverx+10;
     uploadbg();
     uploadri();
    }
}
function up()
{
    if(rovery >= 0)
    {rovery = rovery-10;
     uploadbg();
     uploadri();
    }
}
function down()
{
    if(rovery <= 430)
    {rovery = rovery+10;
     uploadbg();
     uploadri();
    }
}
