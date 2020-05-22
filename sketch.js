//import { text } from "body-parser";

//import { text } from "body-parser";

//import { text } from "body-parser";


//create all the variables
var playerImage;
var keyImg;
var score = 0;
var temp = 0;
var play = 1;
var end = 0;
var gameState = play;
var emy1Img;
var start = 2;
var random = 0;
var gry = true;
// let sound1;

function preload() {

  //load the images

  playerImage = loadImage("player4.png");
  keyImg = loadImage("keyimg.jpg");
  //soundFormats('wav');
  
  // sound1 = loadSound('tada.mp3');
 
  

 


}

function setup() {

  //create the canvas
  createCanvas(windowWidth, windowHeight);

  // sound1 = createAudio("./bunny.mid");
  // sound1.autoplay(true);

  
  //create the maze boundary
  object1 = createSprite(50, 100, 30, 1200);
  object2 = createSprite(685, 700, 1300, 30);
  object3 = createSprite(1350, 115, 30, 1200);
  object4 = createSprite(685, 10, 1300, 30);

  //craete the maze
  object5 = createSprite(125, 400, 125, 10);
  object6 = createSprite(550, 125, 10, 200);
  object7 = createSprite(510, 300, 500, 10);
  object8 = createSprite(190, 190, 10, 225);
  object9 = createSprite(240, 80, 100, 10);
  object10 = createSprite(295, 150, 10, 150);
  object11 = createSprite(365, 225, 150, 10);
  object12 = createSprite(440, 150, 10, 150);
  object13 = createSprite(375, 125, 10, 100);
  object14 = createSprite(240, 125, 10, 100);
  object15 = createSprite(265, 340, 10, 75);
  object16 = createSprite(120, 125, 30, 10);
  object17 = createSprite(120, 200, 30, 10);
  object18 = createSprite(120, 275, 30, 10);
  object19 = createSprite(690, 395, 10, 200);
  object20 = createSprite(620, 380, 150, 10);
  object21 = createSprite(550, 420, 10, 75);
  object22 = createSprite(500, 455, 100, 10);
  object23 = createSprite(295, 125, 10, 100);
  object24 = createSprite(445, 500, 10, 100);
  object25 = createSprite(365, 260, 100, 10);
  object26 = createSprite(500, 180, 10, 100);
  object27 = createSprite(230, 550, 150, 10);
  object28 = createSprite(250, 525, 10, 150);
  object29 = createSprite(350, 400, 100, 10);
  object30 = createSprite(300, 635, 150, 10);
  object31 = createSprite(1100, 80, 150, 10);
  object32 = createSprite(1025, 130, 10, 150);
  object33 = createSprite(950, 200, 150, 10);
  object34 = createSprite(880, 270, 10, 150);
  object35 = createSprite(880, 350, 150, 10);
  object36 = createSprite(750, 140, 250, 10);
  object37 = createSprite(750, 80, 150, 10);
  object38 = createSprite(900, 65, 10, 75);
  object39 = createSprite(945, 200, 10, 100);
  object40 = createSprite(1200, 300, 10, 150);
  object41 = createSprite(1200, 150, 150, 10);
  object42 = createSprite(1100, 400, 10, 200);
  object43 = createSprite(1100, 220, 100, 10);
  object44 = createSprite(1000, 300, 100, 10);
  object45 = createSprite(950, 450, 10, 100);
  object46 = createSprite(1200, 375, 100, 10);
  object47 = createSprite(1300, 300, 75, 10);
  object48 = createSprite(1250, 65, 10, 75);
  object49 = createSprite(600, 65, 10, 75);
  object50 = createSprite(700, 200, 10, 100);
  object51 = createSprite(630, 240, 50, 10);
  object52 = createSprite(650, 210, 10, 50);
  object53 = createSprite(800, 180, 10, 50);
  object54 = createSprite(775, 250, 50, 10);
  object55 = createSprite(110, 500, 10, 200);
  object56 = createSprite(775, 450, 10, 150);
  object57 = createSprite(750, 575, 200, 10);
  object58 = createSprite(650, 595, 10, 50);
  object59 = createSprite(850, 540, 10, 75);
  object60 = createSprite(870, 430, 75, 10);
  object61 = createSprite(1025, 440, 50, 10);
  object62 = createSprite(1080, 575, 230, 10);
  object63 = createSprite(1030, 545, 10, 65);
  object64 = createSprite(1190, 570, 10, 100);
  object65 = createSprite(1210, 450, 100, 10);
  object66 = createSprite(1250, 570, 10, 140);
  object67 = createSprite(900, 630, 300, 10);
  object68 = createSprite(520, 570, 10, 100);
  object69 = createSprite(610, 470, 10, 100);


  //key = createSprite(1285, 650, 20, 20);


  //craete the player
  player = createSprite(100, 50, 20, 20);



  //give color 
  object1.shapeColor = "white";
  object2.shapeColor = "white";
  object3.shapeColor = "white";
  object4.shapeColor = "white";

  object5.shapeColor = "yellow";
  object7.shapeColor = "yellow";
  object9.shapeColor = "yellow";
  object11.shapeColor = "yellow";
  object16.shapeColor = "yellow";
  object17.shapeColor = "yellow";
  object18.shapeColor = "yellow";
  object20.shapeColor = "yellow";
  object22.shapeColor = "yellow";
  object25.shapeColor = "yellow";
  object27.shapeColor = "yellow";
  object29.shapeColor = "yellow";
  object30.shapeColor = "yellow";
  object31.shapeColor = "yellow";
  object33.shapeColor = "yellow";
  object35.shapeColor = "yellow";
  object36.shapeColor = "yellow";
  object37.shapeColor = "yellow";
  object41.shapeColor = "yellow";
  object43.shapeColor = "yellow";
  object44.shapeColor = "yellow";
  object46.shapeColor = "yellow";
  object47.shapeColor = "yellow";
  object51.shapeColor = "yellow";
  object54.shapeColor = "yellow";
  object57.shapeColor = "yellow";
  object60.shapeColor = "yellow";
  object61.shapeColor = "yellow";
  object62.shapeColor = "yellow";
  object65.shapeColor = "yellow";
  object67.shapeColor = "yellow";


  object6.shapeColor = "yellow";
  object8.shapeColor = "yellow";
  object10.shapeColor = "yellow";
  object12.shapeColor = "yellow";
  object13.shapeColor = "yellow";
  object14.shapeColor = "yellow";
  object15.shapeColor = "yellow";
  object19.shapeColor = "yellow";
  object21.shapeColor = "yellow";
  object23.shapeColor = "yellow";
  object24.shapeColor = "yellow";
  object26.shapeColor = "yellow";
  object28.shapeColor = "yellow";
  object32.shapeColor = "yellow";
  object34.shapeColor = "yellow";
  object38.shapeColor = "yellow";
  object39.shapeColor = "yellow";
  object40.shapeColor = "yellow";
  object42.shapeColor = "yellow";
  object45.shapeColor = "yellow";
  object48.shapeColor = "yellow";
  object49.shapeColor = "yellow";
  object50.shapeColor = "yellow";
  object52.shapeColor = "yellow";
  object53.shapeColor = "yellow";
  object55.shapeColor = "yellow";
  object56.shapeColor = "yellow";
  object58.shapeColor = "yellow";
  object59.shapeColor = "yellow";
  object63.shapeColor = "yellow";
  object64.shapeColor = "yellow";
  object66.shapeColor = "yellow";
  object68.shapeColor = "yellow";
  object69.shapeColor = "yellow";
  //object6.shapeColor = "yellow";

  player.shapeColor = "blue";

  //add and scale the image
  player.addImage(playerImage);
  player.scale = 0.2;



  //create the enemies give color and velocity to them
  enemy1 = createSprite(430, 400, 20, 20);
  enemy2 = createSprite(900, 120, 20, 20);
  enemy3 = createSprite(1100, 550, 20, 20);
  enemy4 = createSprite(730, 330, 20, 20);
  enemy5 = createSprite(150,300,20,20);
  enemy6 = createSprite(730,50,20,20);
  enemy7 = createSprite(600,280,20,20);

  enemy1.shapeColor = "red";
  enemy2.shapeColor = "red";
  enemy3.shapeColor = "red";
  enemy4.shapeColor = "red";
  enemy5.shapeColor = "red";
  enemy6.shapeColor = "red";
  enemy7.shapeColor = "red";

  enemy1.velocityX = 3;
  enemy1.velocityY = 2;

  enemy2.velocityX = 3;
  enemy2.velocityY = 2;

  enemy3.velocityX = 3;
  enemy3.velocityY = 2;

  
  enemy4.addImage(keyImg);
  enemy4.scale = 0.12;
  
  enemy5.velocityX = 3;
  enemy5.velocityY = 2;

  enemy6.velocityX = 3;
  enemy6.velocityY = 2;

  enemy7.velocityX = 3;
  enemy7.velocityY = 2;

  // sound1.autoplay(true);
 // sound1.play();
 
 

}



function draw() {


  // if(sound1.isPlaying())
  // {


  // } else{
    
  //   sound1.play();
  //   console.log("hello");
    
  // }

 
  //clear the background
  background(0);

 

  //show the score
  textSize(30);
  textFont("Georgia");
  fill("white");
  text("SCORE " + score, 1000, 50)
  
  //start game state play
  if(gameState === play)
  {

    random = 1;
    
    


    
    
    //move the player with arrow keys
    if (keyDown(LEFT_ARROW)) 
    {

      player.velocityX = -9;
      player.velocityY = 0
    } else if (keyDown(RIGHT_ARROW)) 
    {
      //player.position(1, 0);
      player.velocityX = 9;
      player.velocityY = 0
    } else if (keyDown(UP_ARROW)) 
    {
      // player.position(0, -1);
      player.velocityX = 0;
      player.velocityY = -9;
    } else if (keyDown(DOWN_ARROW)) 
    {
      //player.position(0, +1);
      player.velocityX = 0;
      player.velocityY = 9;
    }


    //make the player collide with the maze
    
    player.collide(object5);
    player.collide(object6);
    player.collide(object7);
    player.collide(object8);
    player.collide(object9);
    player.collide(object10);
    player.collide(object11);
    player.collide(object12);
    player.collide(object13);
    player.collide(object14);
    player.collide(object15);
    player.collide(object16);
    player.collide(object17);
    player.collide(object18);
    player.collide(object19);
    player.collide(object20);
    player.collide(object21);
    player.collide(object22);
    player.collide(object23);
    player.collide(object24);
    player.collide(object25);
    player.collide(object26);
    player.collide(object27);
    player.collide(object28);
    player.collide(object29);
    player.collide(object30);
    player.collide(object31);
    player.collide(object32);
    player.collide(object33);
    player.collide(object34);
    player.collide(object35);
    player.collide(object36);
    player.collide(object37);
    player.collide(object38);
    player.collide(object39);
    player.collide(object40);
    player.collide(object41);
    player.collide(object42);
    player.collide(object43);
    player.collide(object44);
    player.collide(object45);
    player.collide(object46);
    player.collide(object47);
    player.collide(object48);
    player.collide(object49);
    player.collide(object50);
    player.collide(object51);
    player.collide(object52);
    player.collide(object53);
    player.collide(object54);
    player.collide(object55);
    player.collide(object56);
    player.collide(object57);
    player.collide(object58);
    player.collide(object59);
    player.collide(object60);
    player.collide(object61);
    player.collide(object62);
    player.collide(object63);
    player.collide(object64);
    player.collide(object65);
    player.collide(object66);
    player.collide(object67);
    player.collide(object68);
    player.collide(object69);


    //make all the enemies bounce off with the maze
    enemy1.bounceOff(object1);
    enemy1.bounceOff(object2);
    enemy1.bounceOff(object3);
    enemy1.bounceOff(object4);
    enemy1.bounceOff(object5);
    enemy1.bounceOff(object6);
    enemy1.bounceOff(object7);
    enemy1.bounceOff(object8);
    enemy1.bounceOff(object9);
    enemy1.bounceOff(object10);
    enemy1.bounceOff(object11);
    enemy1.bounceOff(object12);
    enemy1.bounceOff(object13);
    enemy1.bounceOff(object14);
    enemy1.bounceOff(object15);
    enemy1.bounceOff(object16);
    enemy1.bounceOff(object17);
    enemy1.bounceOff(object18);
    enemy1.bounceOff(object19);
    enemy1.bounceOff(object20);
    enemy1.bounceOff(object21);
    enemy1.bounceOff(object22);
    enemy1.bounceOff(object23);
    enemy1.bounceOff(object24);
    enemy1.bounceOff(object25);
    enemy1.bounceOff(object26);
    enemy1.bounceOff(object27);
    enemy1.bounceOff(object28);
    enemy1.bounceOff(object29);
    enemy1.bounceOff(object29);
    enemy1.bounceOff(object30);
    enemy1.bounceOff(object31);
    enemy1.bounceOff(object32);
    enemy1.bounceOff(object33);
    enemy1.bounceOff(object34);
    enemy1.bounceOff(object35);
    enemy1.bounceOff(object36);
    enemy1.bounceOff(object37);
    enemy1.bounceOff(object38);
    enemy1.bounceOff(object39);
    enemy1.bounceOff(object40);
    enemy1.bounceOff(object41);
    enemy1.bounceOff(object42);
    enemy1.bounceOff(object43);
    enemy1.bounceOff(object44);
    enemy1.bounceOff(object45);
    enemy1.bounceOff(object46);
    enemy1.bounceOff(object47);
    enemy1.bounceOff(object48);
    enemy1.bounceOff(object49);
    enemy1.bounceOff(object50);
    enemy1.bounceOff(object51);
    enemy1.bounceOff(object52);
    enemy1.bounceOff(object53);
    enemy1.bounceOff(object54);
    enemy1.bounceOff(object55);
    enemy1.bounceOff(object56);
    enemy1.bounceOff(object57);
    enemy1.bounceOff(object58);
    enemy1.bounceOff(object59);
    enemy1.bounceOff(object60);
    enemy1.bounceOff(object61);
    enemy1.bounceOff(object62);
    enemy1.bounceOff(object63);
    enemy1.bounceOff(object64);
    enemy1.bounceOff(object65);
    enemy1.bounceOff(object66);
    enemy1.bounceOff(object67);
    enemy1.bounceOff(object68);
    enemy1.bounceOff(object69);


    enemy2.bounceOff(object1);
    enemy2.bounceOff(object2);
    enemy2.bounceOff(object3);
    enemy2.bounceOff(object4);
    enemy2.bounceOff(object5);
    enemy2.bounceOff(object6);
    enemy2.bounceOff(object7);
    enemy2.bounceOff(object8);
    enemy2.bounceOff(object9);
    enemy2.bounceOff(object10);
    enemy2.bounceOff(object11);
    enemy2.bounceOff(object12);
    enemy2.bounceOff(object13);
    enemy2.bounceOff(object14);
    enemy2.bounceOff(object15);
    enemy2.bounceOff(object16);
    enemy2.bounceOff(object17);
    enemy2.bounceOff(object18);
    enemy2.bounceOff(object19);
    enemy2.bounceOff(object20);
    enemy2.bounceOff(object21);
    enemy2.bounceOff(object22);
    enemy2.bounceOff(object23);
    enemy2.bounceOff(object24);
    enemy2.bounceOff(object25);
    enemy2.bounceOff(object26);
    enemy2.bounceOff(object27);
    enemy2.bounceOff(object28);
    enemy2.bounceOff(object29);
    enemy2.bounceOff(object29);
    enemy2.bounceOff(object30);
    enemy2.bounceOff(object31);
    enemy2.bounceOff(object32);
    enemy2.bounceOff(object33);
    enemy2.bounceOff(object34);
    enemy2.bounceOff(object35);
    enemy2.bounceOff(object36);
    enemy2.bounceOff(object37);
    enemy2.bounceOff(object38);
    enemy2.bounceOff(object39);
    enemy2.bounceOff(object40);
    enemy2.bounceOff(object41);
    enemy2.bounceOff(object42);
    enemy2.bounceOff(object43);
    enemy2.bounceOff(object44);
    enemy2.bounceOff(object45);
    enemy2.bounceOff(object46);
    enemy2.bounceOff(object47);
    enemy2.bounceOff(object48);
    enemy2.bounceOff(object49);
    enemy2.bounceOff(object50);
    enemy2.bounceOff(object51);
    enemy2.bounceOff(object52);
    enemy2.bounceOff(object53);
    enemy2.bounceOff(object54);
    enemy2.bounceOff(object55);
    enemy2.bounceOff(object56);
    enemy2.bounceOff(object57);
    enemy2.bounceOff(object58);
    enemy2.bounceOff(object59);
    enemy2.bounceOff(object60);
    enemy2.bounceOff(object61);
    enemy2.bounceOff(object62);
    enemy2.bounceOff(object63);
    enemy2.bounceOff(object64);
    enemy2.bounceOff(object65);
    enemy2.bounceOff(object66);
    enemy2.bounceOff(object67);
    enemy2.bounceOff(object68);
    enemy2.bounceOff(object69);


    enemy3.bounceOff(object1);
    enemy3.bounceOff(object2);
    enemy3.bounceOff(object3);
    enemy3.bounceOff(object4);
    enemy3.bounceOff(object5);
    enemy3.bounceOff(object6);
    enemy3.bounceOff(object7);
    enemy3.bounceOff(object8);
    enemy3.bounceOff(object9);
    enemy3.bounceOff(object10);
    enemy3.bounceOff(object11);
    enemy3.bounceOff(object12);
    enemy3.bounceOff(object13);
    enemy3.bounceOff(object14);
    enemy3.bounceOff(object15);
    enemy3.bounceOff(object16);
    enemy3.bounceOff(object17);
    enemy3.bounceOff(object18);
    enemy3.bounceOff(object19);
    enemy3.bounceOff(object20);
    enemy3.bounceOff(object21);
    enemy3.bounceOff(object22);
    enemy3.bounceOff(object23);
    enemy3.bounceOff(object24);
    enemy3.bounceOff(object25);
    enemy3.bounceOff(object26);
    enemy3.bounceOff(object27);
    enemy3.bounceOff(object28);
    enemy3.bounceOff(object29);
    enemy3.bounceOff(object29);
    enemy3.bounceOff(object30);
    enemy3.bounceOff(object31);
    enemy3.bounceOff(object32);
    enemy3.bounceOff(object33);
    enemy3.bounceOff(object34);
    enemy3.bounceOff(object35);
    enemy3.bounceOff(object36);
    enemy3.bounceOff(object37);
    enemy3.bounceOff(object38);
    enemy3.bounceOff(object39);
    enemy3.bounceOff(object40);
    enemy3.bounceOff(object41);
    enemy3.bounceOff(object42);
    enemy3.bounceOff(object43);
    enemy3.bounceOff(object44);
    enemy3.bounceOff(object45);
    enemy3.bounceOff(object46);
    enemy3.bounceOff(object47);
    enemy3.bounceOff(object48);
    enemy3.bounceOff(object49);
    enemy3.bounceOff(object50);
    enemy3.bounceOff(object51);
    enemy3.bounceOff(object52);
    enemy3.bounceOff(object53);
    enemy3.bounceOff(object54);
    enemy3.bounceOff(object55);
    enemy3.bounceOff(object56);
    enemy3.bounceOff(object57);
    enemy3.bounceOff(object58);
    enemy3.bounceOff(object59);
    enemy3.bounceOff(object60);
    enemy3.bounceOff(object61);
    enemy3.bounceOff(object62);
    enemy3.bounceOff(object63);
    enemy3.bounceOff(object64);
    enemy3.bounceOff(object65);
    enemy3.bounceOff(object66);
    enemy3.bounceOff(object67);
    enemy3.bounceOff(object68);
    enemy3.bounceOff(object69);


    enemy5.bounceOff(object1);
    enemy5.bounceOff(object2);
    enemy5.bounceOff(object3);
    enemy5.bounceOff(object4);
    enemy5.bounceOff(object5);
    enemy5.bounceOff(object6);
    enemy5.bounceOff(object7);
    enemy5.bounceOff(object8);
    enemy5.bounceOff(object9);
    enemy5.bounceOff(object10);
    enemy5.bounceOff(object11);
    enemy5.bounceOff(object12);
    enemy5.bounceOff(object13);
    enemy5.bounceOff(object14);
    enemy5.bounceOff(object15);
    enemy5.bounceOff(object16);
    enemy5.bounceOff(object17);
    enemy5.bounceOff(object18);
    enemy5.bounceOff(object19);
    enemy5.bounceOff(object20);
    enemy5.bounceOff(object21);
    enemy5.bounceOff(object22);
    enemy5.bounceOff(object23);
    enemy5.bounceOff(object24);
    enemy5.bounceOff(object25);
    enemy5.bounceOff(object26);
    enemy5.bounceOff(object27);
    enemy5.bounceOff(object28);
    enemy5.bounceOff(object29);
    enemy5.bounceOff(object29);
    enemy5.bounceOff(object30);
    enemy5.bounceOff(object31);
    enemy5.bounceOff(object32);
    enemy5.bounceOff(object33);
    enemy5.bounceOff(object34);
    enemy5.bounceOff(object35);
    enemy5.bounceOff(object36);
    enemy5.bounceOff(object37);
    enemy5.bounceOff(object38);
    enemy5.bounceOff(object39);
    enemy5.bounceOff(object40);
    enemy5.bounceOff(object41);
    enemy5.bounceOff(object42);
    enemy5.bounceOff(object43);
    enemy5.bounceOff(object44);
    enemy5.bounceOff(object45);
    enemy5.bounceOff(object46);
    enemy5.bounceOff(object47);
    enemy5.bounceOff(object48);
    enemy5.bounceOff(object49);
    enemy5.bounceOff(object50);
    enemy5.bounceOff(object51);
    enemy5.bounceOff(object52);
    enemy5.bounceOff(object53);
    enemy5.bounceOff(object54);
    enemy5.bounceOff(object55);
    enemy5.bounceOff(object56);
    enemy5.bounceOff(object57);
    enemy5.bounceOff(object58);
    enemy5.bounceOff(object59);
    enemy5.bounceOff(object60);
    enemy5.bounceOff(object61);
    enemy5.bounceOff(object62);
    enemy5.bounceOff(object63);
    enemy5.bounceOff(object64);
    enemy5.bounceOff(object65);
    enemy5.bounceOff(object66);
    enemy5.bounceOff(object67);
    enemy5.bounceOff(object68);
    enemy5.bounceOff(object69);



    enemy6.bounceOff(object1);
    enemy6.bounceOff(object2);
    enemy6.bounceOff(object3);
    enemy6.bounceOff(object4);
    enemy6.bounceOff(object5);
    enemy6.bounceOff(object6);
    enemy6.bounceOff(object7);
    enemy6.bounceOff(object8);
    enemy6.bounceOff(object9);
    enemy6.bounceOff(object10);
    enemy6.bounceOff(object11);
    enemy6.bounceOff(object12);
    enemy6.bounceOff(object13);
    enemy6.bounceOff(object14);
    enemy6.bounceOff(object15);
    enemy6.bounceOff(object16);
    enemy6.bounceOff(object17);
    enemy6.bounceOff(object18);
    enemy6.bounceOff(object19);
    enemy6.bounceOff(object20);
    enemy6.bounceOff(object21);
    enemy6.bounceOff(object22);
    enemy6.bounceOff(object23);
    enemy6.bounceOff(object24);
    enemy6.bounceOff(object25);
    enemy6.bounceOff(object26);
    enemy6.bounceOff(object27);
    enemy6.bounceOff(object28);
    enemy6.bounceOff(object29);
    enemy6.bounceOff(object29);
    enemy6.bounceOff(object30);
    enemy6.bounceOff(object31);
    enemy6.bounceOff(object32);
    enemy6.bounceOff(object33);
    enemy6.bounceOff(object34);
    enemy6.bounceOff(object35);
    enemy6.bounceOff(object36);
    enemy6.bounceOff(object37);
    enemy6.bounceOff(object38);
    enemy6.bounceOff(object39);
    enemy6.bounceOff(object40);
    enemy6.bounceOff(object41);
    enemy6.bounceOff(object42);
    enemy6.bounceOff(object43);
    enemy6.bounceOff(object44);
    enemy6.bounceOff(object45);
    enemy6.bounceOff(object46);
    enemy6.bounceOff(object47);
    enemy6.bounceOff(object48);
    enemy6.bounceOff(object49);
    enemy6.bounceOff(object50);
    enemy6.bounceOff(object51);
    enemy6.bounceOff(object52);
    enemy6.bounceOff(object53);
    enemy6.bounceOff(object54);
    enemy6.bounceOff(object55);
    enemy6.bounceOff(object56);
    enemy6.bounceOff(object57);
    enemy6.bounceOff(object58);
    enemy6.bounceOff(object59);
    enemy6.bounceOff(object60);
    enemy6.bounceOff(object61);
    enemy6.bounceOff(object62);
    enemy6.bounceOff(object63);
    enemy6.bounceOff(object64);
    enemy6.bounceOff(object65);
    enemy6.bounceOff(object66);
    enemy6.bounceOff(object67);
    enemy6.bounceOff(object68);
    enemy6.bounceOff(object69);

    enemy7.bounceOff(object1);
    enemy7.bounceOff(object2);
    enemy7.bounceOff(object3);
    enemy7.bounceOff(object4);
    enemy7.bounceOff(object5);
    enemy7.bounceOff(object6);
    enemy7.bounceOff(object7);
    enemy7.bounceOff(object8);
    enemy7.bounceOff(object9);
    enemy7.bounceOff(object10);
    enemy7.bounceOff(object11);
    enemy7.bounceOff(object12);
    enemy7.bounceOff(object13);
    enemy7.bounceOff(object14);
    enemy7.bounceOff(object15);
    enemy7.bounceOff(object16);
    enemy7.bounceOff(object17);
    enemy7.bounceOff(object18);
    enemy7.bounceOff(object19);
    enemy7.bounceOff(object20);
    enemy7.bounceOff(object21);
    enemy7.bounceOff(object22);
    enemy7.bounceOff(object23);
    enemy7.bounceOff(object24);
    enemy7.bounceOff(object25);
    enemy7.bounceOff(object26);
    enemy7.bounceOff(object27);
    enemy7.bounceOff(object28);
    enemy7.bounceOff(object29);
    enemy7.bounceOff(object29);
    enemy7.bounceOff(object30);
    enemy7.bounceOff(object31);
    enemy7.bounceOff(object32);
    enemy7.bounceOff(object33);
    enemy7.bounceOff(object34);
    enemy7.bounceOff(object35);
    enemy7.bounceOff(object36);
    enemy7.bounceOff(object37);
    enemy7.bounceOff(object38);
    enemy7.bounceOff(object39);
    enemy7.bounceOff(object40);
    enemy7.bounceOff(object41);
    enemy7.bounceOff(object42);
    enemy7.bounceOff(object43);
    enemy7.bounceOff(object44);
    enemy7.bounceOff(object45);
    enemy7.bounceOff(object46);
    enemy7.bounceOff(object47);
    enemy7.bounceOff(object48);
    enemy7.bounceOff(object49);
    enemy7.bounceOff(object50);
    enemy7.bounceOff(object51);
    enemy7.bounceOff(object52);
    enemy7.bounceOff(object53);
    enemy7.bounceOff(object54);
    enemy7.bounceOff(object55);
    enemy7.bounceOff(object56);
    enemy7.bounceOff(object57);
    enemy7.bounceOff(object58);
    enemy7.bounceOff(object59);
    enemy7.bounceOff(object60);
    enemy7.bounceOff(object61);
    enemy7.bounceOff(object62);
    enemy7.bounceOff(object63);
    enemy7.bounceOff(object64);
    enemy7.bounceOff(object65);
    enemy7.bounceOff(object66);
    enemy7.bounceOff(object67);
    enemy7.bounceOff(object68);
    enemy7.bounceOff(object69);

    createEdgeSprites();


    //when player touch the enemy , hide it and increase the score
    if (player.isTouching(enemy1)) 
    {
      enemy1.x = 1600;
      enemy1.y = 1600;
      enemy1.velocityX = 0;
      enemy1.velocityY = 0;
      score = score + 200;

    }

    if (player.isTouching(enemy2)) 
    {
      enemy2.x = 1500;
      enemy2.y = 1500;
      enemy2.velocityX = 0;
      enemy2.velocityY = 0;
      score = score + 200;

    }

    if (player.isTouching(enemy3)) 
    {
      enemy3.x = 1700;
      enemy3.x = 1700;
      enemy3.velocityX = 0;
      enemy3.velocityY = 0;
      score = score + 200;

    }

    if (player.isTouching(enemy5)) 
    {
      enemy5.x = 2700;
      enemy5.x = 2700;
      enemy5.velocityX = 0;
      enemy5.velocityY = 0;
      score = score + 200;

    }

    if (player.isTouching(enemy6)) 
    {
      enemy6.x = 2600;
      enemy6.x = 2600;
      enemy6.velocityX = 0;
      enemy6.velocityY = 0;
      score = score + 200;

    }


    if (player.isTouching(enemy7)) 
    {
      enemy7.x = 2900;
      enemy7.x = 2900;
      enemy7.velocityX = 0;
      enemy7.velocityY = 0;
      score = score + 200;

    }

    //give the winning condition
    if (player.isTouching(enemy4) && score === 1200) 
    {
      enemy4.x = 2000;
      enemy4.y = 2000;
      

      temp = 1;
      
      gameState = end;


    }

    //when player touches the key but all the enemies are not destroyed so show the text
    if (player.isTouching(enemy4) && score < 1200) 
    {

      text("First kill all the monsters", 450, 275);
      

    }

    
  
   


  }

  
  
  //when enter is pressed change the gamestate with necessary functions
  if(gameState === end && keyDown(ENTER))
   {
     gameState = play;
     console.log("efhszwe4rtgv");
     enemy1.x = 430;
     enemy1.y = 400;
     enemy2.x = 900;
     enemy2.y = 120;
     enemy3.x = 1100;
     enemy3.y = 550;
     enemy4.x = 730;
     enemy4.y = 330;
     enemy5.x = 150;
     enemy5.y = 300;
     enemy6.x = 730;
     enemy6.y = 50;
     enemy7.x = 600;
     enemy7.y = 280;
     enemy1.velocityX = 3;
      enemy1.velocityY = 2;
      enemy2.velocityX = 3;
      enemy2.velocityY = 2;
      enemy3.velocityX = 3;
      enemy3.velocityY = 2;
      enemy5.velocityX = 3;
      enemy5.velocityY = 2;
      enemy6.velocityX = 3;
      enemy6.velocityY = 2;
      enemy7.velocityX = 3;
      enemy7.velocityY = 2;
      
      player.x = 100;
      player.y = 50;
      score = 0;
      temp = 0;


   }

   if (temp === 1) 
    {
      
      text("Press enter to restart", 400, 365);
      text("YOU WIN!", 450, 275);
      
    
    }

    //give the losing condition
if(gameState !== start)
{
  if (player.x > 1330 || player.x < 60 || player.y > 675 || player.y < 15 ) 
  {
    player.x = 2100;
    player.y = 2100;
    text("YOU LOSE !", 500, 365);
    text("Press enter to restart" , 400,330);
     gameState = end;

     

    


  }

}
     
    
  
    
   if(random === 1)
   {
    text("press space to pause" ,150 , 50)

   }

 //when game state end give the necessary functions
  if(gameState === end)
  {
   console.log("nirvighan");
   
    player.velocityX = 0;
    player.velocityY = 0;
    enemy1.velocityX = null;
    enemy1.velocityY = null;
    enemy2.velocityX = null;
    enemy2.velocityY = null;
    enemy3.velocityX = null;
    enemy3.velocityY = null;
    enemy4.velocityX = null;
    enemy4.velocityY = null;
    enemy5.velocityX = null;
    enemy5.velocityY = null;
    enemy6.velocityX = null;
    enemy6.velocityY = null;
    enemy7.velocityX = null;
    enemy7.velocityY = null;
    

  }

  
  

  

  //when the game pause make it continue again 

  if(keyDown(DOWN_ARROW) && gameState === 2)
  {
   gameState = play;
   random = 0;

   object1.x = 50;
  object2.x = 685;
  object3.x = 1350;
  object4.x = 685;
  object5.x = 125;
  object6.x = 550;
  object7.x = 510;
  object8.x = 190;
  object9.x = 240;
  object10.x = 295;
  object11.x = 365;
  object12.x = 440;
  object13.x = 375;

  object14.x = 240;
  object15.x = 265;

  object16.x = 120;
  object17.x = 120;
  object18.x = 120;
  object19.x = 690;
  object20.x = 620;
  object21.x = 550;
  object22.x = 500;
  object23.x = 295;
  object24.x = 445;
  object25.x = 365;
  object26.x = 500;

  object27.x = 230;
  object28.x = 250;
  object29.x = 350;
  object30.x = 300;
  object31.x = 1100;
  object32.x = 1025;
  object33.x = 950;
  object34.x = 880;
  object35.x = 880;
  object36.x = 750;
  object37.x = 750;
  object38.x = 900;
  object39.x = 945;

  object40.x = 1200;

  object41.x = 1200;
  object42.x = 1100;
  object43.x = 1100;
  object44.x = 1000;
  object45.x = 950;
  object46.x = 1200;
  object47.x = 1300;
  object48.x = 1250;
  object49.x = 600;
  object50.x = 700;
  object51.x = 630;
  object52.x = 650;
  object53.x = 800;
  object54.x = 775;
  object55.x = 110;

  object56.x = 775;
  object57.x = 750;
  object58.x = 650;
  object59.x = 850;
  object60.x = 870;

  object61.x = 1025;
  object62.x = 1080;
  object63.x = 1030;
  object64.x = 5000;

  object65.x = 1190;

  object66.x = 1250;
  object67.x = 900;
  object68.x = 520;
  object69.x = 610;
  player.x = 100;
  
  enemy4.x = 730;

  if(score === 0)
  {
enemy1.x = 430;
  enemy2.x = 900;
  enemy3.x = 1100;
  
  enemy5.x = 150;
  enemy6.x = 730;
  enemy7.x = 600;

  }

  if(score === 200)
  {
  enemy1.x = 5000;

  enemy2.x = 900;
  enemy3.x = 1100;
  enemy5.x = 150;
  enemy6.x = 730;
  enemy7.x = 600;

  

  }

  if(score === 400)
  {
    enemy1.x = 5000;
    enemy2.x = 5000;


    enemy3.x = 1100;
  enemy5.x = 150;
  enemy6.x = 730;
  enemy7.x = 600;


  }

  if(score === 600)
  {
    enemy1.x = 5000;
    enemy2.x = 5000;
    enemy3.x = 5000;

    enemy5.x = 150;
    enemy6.x = 730;
    enemy7.x = 600;
  
  }

  if(score === 800)
  {
    enemy1.x = 5000;
    enemy2.x = 5000;
    enemy3.x = 5000;
    enemy5.x = 5000;

    enemy6.x = 730;
    enemy7.x = 600;
  
  }


  if(score === 1000)
  {
    enemy1.x = 5000;
    enemy2.x = 5000;
    enemy3.x = 5000;
    enemy5.x = 5000;
    enemy6.x = 5000;

    enemy7.x = 600;
  }

  if(score === 1200)
  {
    enemy1.x = 5000;
    enemy2.x = 5000;
    enemy3.x = 5000;
    enemy5.x = 5000;
    enemy6.x = 5000;
    enemy7.x = 5000;
  }

  enemy1.velocityX = 3;
  enemy1.velocityY = 2;
  enemy2.velocityX = 3;
  enemy2.velocityY = 2;
  enemy3.velocityX = 3;
  enemy3.velocityY = 2;
  enemy5.velocityX = 3;
  enemy5.velocityY = 2;
  enemy6.velocityX = 3;
  enemy6.velocityY = 2;
  enemy7.velocityX = 3;
  enemy7.velocityY = 2;

  //move the player with arrow keys
  if (keyDown(LEFT_ARROW)) 
  {

    player.velocityX = -9;
    player.velocityY = 0
  } else if (keyDown(RIGHT_ARROW)) 
  {
    //player.position(1, 0);
    player.velocityX = 9;
    player.velocityY = 0
  } else if (keyDown(UP_ARROW)) 
  {
    // player.position(0, -1);
    player.velocityX = 0;
    player.velocityY = -9;
  } else if (keyDown(DOWN_ARROW)) 
  {
    //player.position(0, +1);
    player.velocityX = 0;
    player.velocityY = 9;
  }


   

  }

  //when game is paused give necessary functions

    if(gameState === start)
  {
  
  object1.x = 5000;
  object2.x = 5000;
  object3.x = 5000;
  object4.x = 5000;
  object5.x = 5000;
  object6.x = 5000;
  object7.x = 5000;
  object8.x = 5000;
  object9.x = 5000;
  object10.x = 5000;
  object11.x = 5000;
  object12.x = 5000;
  object13.x = 5000;

  object14.x = 5000;
  object15.x = 5000;

  object16.x = 5000;
  object17.x = 5000;
  object18.x = 5000;
  object19.x = 5000;
  object20.x = 5000;
  object21.x = 5000;
  object22.x = 5000;
  object23.x = 5000;
  object24.x = 5000;
  object25.x = 5000;
  object26.x = 5000;

  object27.x = 5000;
  object28.x = 5000;
  object29.x = 5000;
  object30.x = 5000;
  object31.x = 5000;
  object32.x = 5000;
  object33.x = 5000;
  object34.x = 5000;
  object35.x = 5000;
  object36.x = 5000;
  object37.x = 5000;
  object38.x = 5000;
  object39.x = 5000;

  object40.x = 5000;

  object41.x = 5000;
  object42.x = 5000;
  object43.x = 5000;
  object44.x = 5000;
  object45.x = 5000;
  object46.x = 5000;
  object47.x = 5000;
  object48.x = 5000;
  object49.x = 5000;
  object50.x = 5000;
  object51.x = 5000;
  object52.x = 5000;
  object53.x = 5000;
  object54.x = 5000;
  object55.x = 5000;

  object56.x = 5000;
  object57.x = 5000;
  object58.x = 5000;
  object59.x = 5000;
  object60.x = 5000;

  object61.x = 5000;
  object62.x = 5000;
  object63.x = 5000;
  object64.x = 5000;

  object65.x = 5000;

  object66.x = 5000;
  object67.x = 5000;
  object68.x = 5000;
  object69.x = 5000;
  player.x = 5000;
  enemy1.x = 5000;
  enemy2.x = 5000;
  enemy3.x = 5000;
  enemy4.x = 5000;
  enemy5.x = 5000;
  enemy6.x = 5000;
  enemy7.x = 5000;

  enemy1.velocityX = 0;
  enemy1.velocityY = 0;
  enemy2.velocityX = 0;
  enemy2.velocityY = 0;
  enemy3.velocityX = 0;
  enemy3.velocityY = 0;
  enemy5.velocityX = 0;
  enemy5.velocityY = 0;
  enemy6.velocityX = 0;
  enemy6.velocityY = 0;
  enemy7.velocityX = 0;
  enemy7.velocityY = 0;

  player.velocityX = 0;
  player.velocityY = 0;

  background("black");
  fill("white");
  text("WELCOME ! "  , 200 , 200);
  text("Use arrow key to move the player . " , 100, 250);
  text("you need to eat all the red monsters roaming around the maze and then collect the key to complete" , 100,300);
  text("press down arrow to start" , 100,350);
  
  }
  
 //when space is pressed make the game pause
  if (keyDown(32) && gameState === 1)
  {
  gameState = 2;

  

  }


  //create draw sprites
  drawSprites();
}

