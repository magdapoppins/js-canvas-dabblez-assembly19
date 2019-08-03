const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let counter = 0
let currentTimeLeft = 10

function drawBox (x, y, height, width, color) {
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

function displayTime (x, y, time) {
	ctx.font = "15px Arial";
	ctx.fillText(time, x, y);
}

function updateTime (timeLeft) {
	return timeLeft - 0.01
}

function pixelRain () {
	for (let y = 0; y < canvas.height / 10; y++) {
		for (let x = 0; x < canvas.width / 10; x++) {
			ctx.beginPath()
			ctx.rect(x * 10, y * 10, 100, 100)
			ctx.fillStyle = randomHexColor()
			ctx.fill()
			ctx.closePath()
		}
	}
}

function randomHexColor () {
	let colorHex = '#'
	const hexValues = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

	for (let i = 0; i < 6; i++) {
		colorHex += hexValues[Math.floor(Math.random() * hexValues.length)]
	}
	
	return colorHex
}

function drawSnake(snakeSize, startPointY) {
	for (let i = 0; i < snakeSize; i++) {
		ctx.beginPath();
		ctx.rect(0 + i * 10, startPointY, 10, 10)
		console.log("drawing to ", 0 + i * 10, startPointY)
		ctx.fillStyle = "green"
		ctx.fill()
		ctx.closePath()
	}
}

function draw() {
	if (currentTimeLeft  > 0) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		switch(currentTimeLeft) {
			case currentTimeLeft > 50:
				console.log("Intro")
				pixelRain()

			case currentTimeLeft > 40 && currentTimeLeft < 50:
				console.log("Scene 1")
				drawBox(currentTimeLeft * 100, 100, 30, 30, "black")

			case currentTimeLeft > 30 && currentTimeLeft < 40:
				console.log("Scene 2")
				drawSnake(5, 400)

			case currentTimeLeft > 20 && currentTimeLeft < 30:
				console.log("Scene 3")

			case currentTimeLeft > 10 && currentTimeLeft < 20:
				console.log("Scene 4")

			default:
				break;
		}

		currentTimeLeft = updateTime(currentTimeLeft)
		displayTime(10, 10, Math.round(currentTimeLeft * 100)/100)
	}
}

setInterval(draw, 10)

