const theme = document.getElementById("theme");
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
