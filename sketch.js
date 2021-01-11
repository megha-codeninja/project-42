var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    translate(200,200)
    rotate(-90)

    
    hr = hour();
    mn = minute();
    sc = second();

    
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    
    push();
    //seconds hand
    rotate(scAngle); 
    stroke("maroon");
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //minute hand
    push();
    rotate(mnAngle);
    stroke("red");
    strokeWeight(9);
    line(0,0,75,0);
    pop()

    //hour hand
    push();
    rotate(hrAngle);
    stroke("pink");
    strokeWeight(11);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    
    strokeWeight(10);
    noFill();
    
    stroke("white");
    arc(0,0,300,300,0,scAngle);
    
    stroke("brown");
    arc(0,0,280,280,0,mnAngle);
    
    stroke("dark brown");
    arc(0,0,260,260,0,hrAngle);
}