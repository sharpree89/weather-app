// set background image based on current time
var d = new Date();
var h = d.getHours();
var i;

if(h < 6) {
  i = "night.png";
  console.log('its night');
} else if(h < 9) {
  i = "dawn.png";
  console.log('its sunrise');
} else if(h < 17) {
  i = "daylight.png";
  console.log('its day');
} else if(h < 19) {
  i = "dawn.png";
  console.log('its sunset');
} else {
  i = "night.png";
  console.log('its night');
}
document.body.style.background = "url("+i+")";

// display current date and time
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

$("#date").html(monthNames[monthIndex] + " " + day + ", " + year);
$("#time").html(time);
