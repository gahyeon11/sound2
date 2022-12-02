var wave;
var playing=false;
var button;
var slider;
var ampValue=0;

function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(720,260);
  wave = new p5.Oscillator();
  wave.setType('sine');
  // wave.start();
  wave.freq(440);
  wave.amp(0); //amp 값 올리고 내릴 수 있음

  //이렇게 하면 실행 되지 않음 왜냐면 구글에서 실행하면서 영상이나 소리가 나오는 것을 못하게 막아놓았기 때문에
  button=createButton('play/pause');
  button.mousePressed(toggle);
}
function draw(){
  // wave.freq(slider.value());
  // if(playing){
  //   background(255,0,255);
  // }else{
  //   background(51);
  // }

   wave.freq(ampValue);
}
function toggle(){
  if(!playing){
    wave.start();
    wave.amp(ampValue,1);
    playing = true;
  }else{
    wave.amp(0,1);
    playing=false;
  }
}
function deviceMoved(){
  ampValue=accelerationX*1000;
  background(accelerationX);
}

// function draw() {
//   background(220);
// }