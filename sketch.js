
function preload() {
    bgImage = loadImage("background-1.jpg")
    
    platformImg1 = loadImage("Platform 2.png")
    platformImg2 = loadImage("Platform3.png")
    commandoImage = loadAnimation("Commando/commando 1.png","Commando/commando 2.png", "Commando/commando 3.png",
                                    "Commando/commando 4.png","Commando/commando 5.png","Commando/commando 6.png")

    villian1Img = loadAnimation("villain 1.gif");
}
function setup(){

    createCanvas(windowWidth, windowHeight);

  //  var villian = createSprite(250, height-200, 50,80)
   // villian.addAnimation("vill",villian1Img);

    bg = createSprite(385,200,width,height)
    bg.addImage(bgImage);
    bg.scale = 2.35;
    bg.velocityX = -5

    commando = createSprite(130, height-200, 50,80)
    commando.scale = 0.7;
    commando.addAnimation("commando_running", commandoImage)
}

function draw(){
    background("#EFA588");

    if(bg.x < 350) {
        bg.x = width/2;
    }
    
    spawnPlatforms();



    drawSprites();
}

function spawnPlatforms() {
    
    if(frameCount % 100 === 0) {
        var y = Math.round(random(200,500));
        platform = createSprite(width, y, 100, 20)
        platform.velocityX = -7;
        platform.scale = 0.3

        var rand =  Math.round(random(1,2));
        if(rand ===1) {
            platform.addImage(platformImg1);
        }
        if(rand ===2) {
            platform.addImage(platformImg2);
        }
    }
}