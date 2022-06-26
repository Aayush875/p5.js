tintcolor=""

function preload(){ 

}

function setup(){
    canvas=createCanvas(600,600)
    canvas.position(700,100)
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,200,200,200,200)
   fill("blue")
   stroke("black")
   circle(40,40,80)
   circle(560,40,80)
   circle(560,560,80)
   circle(40,560,80)
   
   fill("green")
   stroke("blue")
   rect(80,550,440,20)
   rect(80,30,440,20)
   rect(30,80,20,440)
   rect(550,80,20,440)
}


function take_snapshot(){
    save("noob.png")
}