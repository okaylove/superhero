var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    })
}

function block_update(new_image){
    fabric.Image.fromURL(new_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_object);
    })
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=="80"){
        console.log("shift&p pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("blockWidth").innerHTML=block_width;
        document.getElementById("blockHeight").innerHTML=block_height;
    }

    if(e.shiftKey==true && keyPressed=="77"){
        console.log("shift&m pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("blockWidth").innerHTML=block_width;
        document.getElementById("blockHeight").innerHTML=block_height;
    }

    if(keyPressed=="38"){
        console.log("up");
        up();
    }

    if(keyPressed=="40"){
        console.log("down");
        down();
    }

    if(keyPressed=="37"){
        console.log("left");
        left();
    }

    if(keyPressed=="39"){
        console.log("right");
        right();
    }

    if(keyPressed=="70"){
        console.log("f");
        block_update("spiderman_face.png");
    }

    if(keyPressed=="66"){
        console.log("b");
        block_update("spiderman_body.png");
    }

    if(keyPressed=="76"){
        console.log("l");
        block_update("spiderman_legs.png")
    }

    if(keyPressed=="82"){
        console.log("r");
        block_update("spiderman_right_hand.png");
    }

    if(keyPressed=="72"){
        console.log("h");
        block_update("spiderman_left_hand.png");
    }
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block height="+block_height);
        console.log("when up arrow is pressed, x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block height="+block_height);
        console.log("when down arrow is pressed, x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("block width="+block_width);
        console.log("when left arrow is pressed, x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        console.log("block width="+block_width);
        console.log("when right arrow is pressed, x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}