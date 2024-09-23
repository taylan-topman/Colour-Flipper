const colourBtn = document.getElementById('colourBtn');
const colours = ['#CCFF00', '#9900FF', '#FF1493', '#FF4500', '#00CED1', '#FFB6B', '#00FFFF', '#00FF00', '#FF00FF', '#0000FF'] //An array of colors

//The addEventListener() method attaches an event handler to the specified element. The specified element is the Button to change the color stating that when it receives a click run the changeColor function

colourBtn.addEventListener('click', changeColor);

function changeColor() {

	//create random index to get a floating point number
	const randomIndex = Math.floor(Math.random() * colours.length);

	document.body.style.backgroundColor = colours[randomIndex];
}