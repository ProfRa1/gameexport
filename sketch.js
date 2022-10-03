var angle;
var score = 0;

var life = 3;
var score = 0;
var gameState = 1;

function preload() {
    zom3 = loadImage("zombie 3.png");
    protaImg = loadImage("protagonista.png");
    zom2Img = loadImage("zom 3.png");
    cenarioImg = loadImage("cenario.jpg");
    balaImg = loadImage("bullet1.png");
    fundoImg = loadImage("fundo.jpg");
    man = loadImage("pixel.png");
}

function setup() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        canW = displayWidth;
        canH = displayHeight;
        createCanvas(displayWidth + 80, displayHeight);
    } else {
        canW = windowWidth;
        canH = windowHeight;
        createCanvas(windowWidth, windowHeight);
    }
    angleMode(DEGREES);
    angle = 15;
    mini = createSprite(width / 2, height / 2);
    mini.addImage(man);
    mini.scale = 0.14;
    piso1 = createSprite(530, 878 + 30, 1000, 1);
    piso2 = createSprite(240, 810 + 30, 470, 1);
    piso3 = createSprite(1590, 878 + 30, 670, 1);
    piso4 = createSprite(1780, 813 + 30, 330, 1);
    piso5 = createSprite(131, 713 + 30, 260, 10);
    piso6 = createSprite(811, 613 + 30, 100, 10);

    piso7 = createSprite(670, 683 + 30, 164, 10);
    piso7.shapeColor = "red";
    piso8 = createSprite(955, 678 + 30, 49, 10);
    piso9 = createSprite(895, 578 + 30, 90, 10);
    piso10 = createSprite(1295, 578 + 30, 90, 10);
    piso10.shapeColor = "red";
    piso11 = createSprite(1466, 614 + 30, 270, 10);
    piso11.shapeColor = "red";
    piso12 = createSprite(1052, 842 + 30, 49, 10);
    piso12.shapeColor = "red";
    piso13 = createSprite(1115, 780 + 30, 79, 10);
    piso13.shapeColor = "purple";
    piso14 = createSprite(1198, 815 + 30, 79, 10);
    piso14.shapeColor = "bluw";
    piso15 = createSprite(1698, 715 + 30, 79, 12);
    piso15.shapeColor = "red";
    piso16 = createSprite(1833, 680 + 30, 177, 12);
    piso16.shapeColor = "red";

    piso1.visible = false;
    piso2.visible = false;
    piso3.visible = false;
    piso4.visible = false;
    piso5.visible = false;
    piso6.visible = false;
    piso7.visible = false;
    piso8.visible = false;
    piso9.visible = false;
    piso10.visible = false;
    piso11.visible = false;
    piso12.visible = false;
    piso13.visible = false;
    piso14.visible = false;
    piso15.visible = false;
    piso16.visible = false;
    zom1 = new Group();
    zom2 = new Group();
    balasA = new Group();
}

function draw() {
    background("#BDA297");
    image(fundoImg, 0, 0, width, height);

    drawSprites();
    spawzumbie();

    if (keyIsDown(RIGHT_ARROW)) {
        mini.x = mini.x + 6;
        mini.mirrorX(-1);
    }

    if (keyWentDown("D")) {
        bala = createSprite(200, 300);
        bala.addImage(balaImg);
        bala.scale = 0.05;
        bala.velocityX = 17;
        bala.x = mini.x;
        bala.y = mini.y;
        bala.lifetime = width / 17;
        balasA.add(bala);
    }

    if (keyIsDown(LEFT_ARROW)) {
        mini.x = mini.x - 6;
        mini.mirrorX(+1);
    }
    if (balasA.isTouching(zom1)) {
        zom1.destroyEach();
    }
    if (balasA.isTouching(zom2)) {
        zom2.destroyEach();
    }
    if (keyWentDown("A")) {
        bala = createSprite(200, 300);
        bala.addImage(balaImg);
        bala.scale = 0.05;
        bala.velocityX = -17;
        bala.x = mini.x;
        bala.y = mini.y;
        bala.lifetime = width / 17;
        balasA.add(bala);
    }

    if (keyDown("space")) {
        mini.velocityY = -10;
    }

    mini.velocityY = mini.velocityY + 0.5;
    mini.collide(piso1);
    mini.collide(piso2);
    mini.collide(piso3);
    mini.collide(piso4);
    mini.collide(piso5);
    mini.collide(piso6);
    mini.collide(piso7);
    mini.collide(piso8);
    mini.collide(piso9);
    mini.collide(piso10);
    mini.collide(piso11);
    mini.collide(piso12);
    mini.collide(piso13);
    mini.collide(piso14);
    mini.collide(piso15);
    mini.collide(piso16);

    fill("darkgreen");
    // text("Vidas: ", 750,50);
    // text(mouseX+","+mouseY, mouseX,mouseY)
    // text("Pontuação: ", 50,50);
    textFont("Jokerman");
    textSize(60);
    text("Survivor", width / 2 - 150, 60);
}

function spawzumbie() {
    if (frameCount % 100 === 0) {
        zumbie = createSprite(width, height - 70);
        zumbie.addImage(zom3);
        zumbie.velocityX = -4;
        zumbie.lifetime = 190;
        zumbie.scale = 0.32;
        zom1.add(zumbie);
    }
    if (frameCount % 150 === 0) {
        zumbie2 = createSprite(0, height - 70);
        zumbie2.addImage(zom2Img);
        zumbie2.velocityX = 7;
        zumbie2.lifetime = 200;
        zumbie2.scale = 0.15;
        zumbie2.mirrorX(-1);
        zom2.add(zumbie2);
    }
}
