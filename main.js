var canvas = new fabric.Canvas('my_canvas');
var block_width = 30;
var block_height = 30;

var superhero_x = 10;
var superhero_y = 10;

var superhero_object = "";
var block_object = "";

function superhero_update() {
  fabric.Image.fromURL("Superhero.jpg",function(Img){
    superhero_object = Img;
    superhero_object.scaleToWidth(150);
    superhero_object.scaleToHeight(140);
    superhero_object.set({
      top: superhero_y,
      left:superhero_x
    });
    canvas.add(superhero_object)
  })
}
function new_image(get_image) {
  fabric.Image.fromURL(get_image,function(Img){
    block_object = Img;
   block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
      top: superhero_y,
      left: superhero_x
    });
    canvas.add(block_object)
  })
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
  var key_pressed = e.keyCode;
  console.log(key_pressed);

  if (key_pressed == 70) {
    new_image('hulk_face.png');
    console.log("f");
  }
  if (key_pressed == 70) {
    new_image('ironman_face.png');
    console.log("f");
  }
  if (key_pressed == 70) {
    new_image('spiderman_face.png');
    console.log("f");
  }
  if (key_pressed == 70) {
    new_image('thor_face.png');
    console.log("f");
  }
  if (key_pressed == 72) {
    new_image('hulk_left_hand.png');
    console.log("h");
  }
  if (key_pressed == 82) {
    new_image('hulk_right_hand.png');
    console.log("r");
  }
  if (key_pressed == 66) {
    new_image('hulkd_body.png');
    console.log("b");
  }
  if (key_pressed == 76) {
    new_image('hulk_legs.png');
    console.log("l");
  }
  if (key_pressed == 72) {
    new_image('ironman_left_hand.png');
    console.log("h");
  }
  if (key_pressed == 82) {
    new_image('ironman_right_hand.png');
    console.log("a");
  }
  if (key_pressed == 66) {
    new_image('ironman_body.png');
    console.log("b");
  }
  if (key_pressed == 76) {
    new_image('ironman_legs.png');
    console.log("l");
  }
  if (key_pressed == 72) {
    new_image('spiderman_left_hand.png');
    console.log("h");
  }
  if (key_pressed == 82) {
    new_image('spiderman_right_hand.png');
    console.log("r");
  }
  if (key_pressed == 66) {
    new_image('spiderman_body.png');
    console.log("b");
  }
  if (key_pressed == 76) {
    new_image('spiderman_legs.png');
    console.log("l");
  }
  if (key_pressed == 72) {
    new_image('thor_left_hand.png');
    console.log("h");
  }
  if (key_pressed == 82) {
    new_image('thor_right_hand.png');
    console.log("r");
  }
  if (key_pressed == 37) {
    left();
    console.log("left");
  }
  if (key_pressed == 39) {
    right();
    console.log("right");
  }
  if (key_pressed == 38) {
    up();
    console.log("up");
  }
  if (key_pressed == 40) {
    down();
    console.log("down");
  }
  if (key_pressed == 77 && e.shiftKey == true) {
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
  }
  if (key_pressed == 80 && e.shiftKey == true) {
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
  }
}
