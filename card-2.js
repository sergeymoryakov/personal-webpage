const card = document.getElementById("card");

// create snowflake every random interval
setInterval(() => {
    const flake = createFlake();
    card.appendChild(flake);
    setTimeout(() => {
        flake.remove();
    }, 5000);
}, Math.random() * 500);

// create random snowflakes
function createFlake() {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.animationDuration = `${Math.random() * 3 + 8}s`;
    // flake.style.animationDuration = `15s`;
    flake.style.opacity = Math.random();
    flake.innerText = "❄️";
    return flake;
}
