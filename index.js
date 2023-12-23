const card = document.querySelector(".snowflake-frame");

// create snowflake every random interval
setInterval(() => {
    card.appendChild(createFlake());
}, 100);

// remove snowflakes when they reach the bottom of the screen
document.addEventListener("animationend", (e) => {
    if (e.target.classList.contains("snowflake")) {
        e.target.remove();
    }
});

// create random snowflakes
function createFlake() {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.style.left = `${Math.random() * 100}%`;
    // flake.style.animationDuration = `15s`;
    flake.style.animationDuration = `${Math.random() * 3 + 8}s`;
    flake.style.opacity = Math.random();
    flake.innerText = "❄️";

    return flake;
}
