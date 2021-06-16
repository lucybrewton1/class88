var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=20;

blockWidth=30;
blockHeight=30;

blockImg="";
playerImg="";

function uploadPlayer() {
    fabric.Image.fromURL("player.png",function(Img)
    {
        playerImg=Img;
        playerImg.scaleToHeight(150);
        playerImg.scaleToWidth(150);
        playerImg.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerImg);
    }
    );
}
function uploadblock(getPicture) {
    fabric.Image.fromURL(getPicture,function(Img)
    {
        blockImg=Img;
        blockImg.scaleToHeight(blockHeight);
        blockImg.scaleToWidth(blockWidth);
        blockImg.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockImg);
    }
    );
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;

    if (e.shiftKey==true&&keypressed=="80") {
        console.log("Shift and P are both pressed");
        blockWidth=blockWidth+10;
        blockHeight=blockHeight+10;
        document.getElementById("block_width").innerHTML=blockWidth;
        document.getElementById("block_height").innerHTML=blockHeight;
    }
    if (e.shiftKey==true&&keypressed=="77") {
        console.log("Shift and M are both pressed");
        blockWidth=blockWidth-10;
        blockHeight=blockHeight-10;
        document.getElementById("block_width").innerHTML=blockWidth;
        document.getElementById("block_height").innerHTML=blockHeight;
    }
    if (keypressed=="38") {
        console.log("Up is pressed");
        up();
    }
    if (keypressed=="40") {
        console.log("Down is pressed");
        down();
    }
    if (keypressed=="37") {
        console.log("Left is pressed");
        left();
    }
    if (keypressed=="39") {
        console.log("Right is pressed");
        right();
    }
    if (keypressed=="87") {
        console.log("W is pressed");
        uploadblock("wall.jpg");
    }
    if (keypressed=="71") {
        console.log("G is pressed");
        uploadblock("ground.png");
    }
    if (keypressed=="76") {
        console.log("L is pressed");
        uploadblock("light_green.png");
    }
    if (keypressed=="84") {
        console.log("T is pressed");
        uploadblock("trunk.jpg");
    }
    if (keypressed=="82") {
        console.log("R is pressed");
        uploadblock("roof.jpg"); 
    }
    if (keypressed=="89") {
        console.log("Y is pressed");
        uploadblock("yellow_wall.png");
    }
    if (keypressed=="68") {
        console.log("D is pressed");
        uploadblock("dark_green.png");
    }
    if (keypressed=="85") {
        console.log("U is pressed");
        uploadblock("unique.png");
    }
    if (keypressed=="67") {
        console.log("C is pressed");
        uploadblock("cloud.jpg");
    }
    if (keypressed=="79") {
        console.log("O is pressed");
        uploadblock("Ocean.png");
    }
}
function up() {
    if (player_y>=0) {
        player_y=player_y-10;
        canvas.remove(playerImg);
        uploadPlayer();
        console.log("When up arrow is pressed, x= "+player_x+" and y= "+player_y);
    }
}
function down() {
    if (player_y<=500) {
        player_y=player_y+10;
        canvas.remove(playerImg);
        uploadPlayer();
        console.log("When down arrow is pressed, x= "+player_x+" and y= "+player_y);
    }
}
function right() {
    if (player_x<=700) {
        player_x=player_x+10;
        canvas.remove(playerImg);
        uploadPlayer()
        console.log("When right arrow is pressed, x= "+player_x+" and y= "+player_y);
    }
}
function left() {
    if (player_x>=0) {
        player_x=player_x-10;
        canvas.remove(playerImg);
        uploadPlayer();
        console.log("When left arrow is pressed, x= " +player_x+" and y= "+player_y);
    }
}