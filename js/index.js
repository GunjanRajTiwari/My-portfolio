const theme = document.getElementById("theme");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const body = document.body;

theme.addEventListener("click", e => {
	body.classList.toggle("dark-theme");
	if (theme.innerText == "☀️") {
		theme.innerText = "🌙";
	} else {
		theme.innerText = "☀️";
	}
});

function changeColor(hue) {
	document.documentElement.style.setProperty("--primary", hue);
}

navbar.onclick = removeSlide;
body.onscroll = removeSlide;

function removeSlide() {
	navbar.classList.remove("slide");
}

hamburger.addEventListener("click", e => {
	navbar.classList.toggle("slide");
});

const counter = document.getElementById("counter");

async function loadCounter() {
	await counter.setAttribute(
		"src",
		"https://hitwebcounter.com/counter/counter.php?page=7832010&style=0006&nbdigits=5&type=page&initCount=103"
	);
}

loadCounter();
