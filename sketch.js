var database;
var form;
var user;
var peopleCount=0;

function setup() {
  createCanvas(1000, 1100);
  database = firebase.database();
  form = new Form();
  form.display();
  User = new UserData();
  User.getCount();
 
}

function draw() {
  background("lightyellow");
  
}