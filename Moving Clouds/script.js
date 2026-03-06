const container = document.getElementById("container");

// Cloud HTML
const cloudHTML = `
    <div class="cloud">
        <div class="cloudBubble1"></div>
        <div class="cloudBubble2"></div>
    </div>
`;

// Create multiple clouds
for (let i = 0; i < 6; i++) {
    container.insertAdjacentHTML("beforeend", cloudHTML);
}

const clouds = document.getElementsByClassName("cloud");

// Loop over ALL clouds
for (let i = 0; i < clouds.length; i++) {
    const cloud = clouds[i];

    // Random vertical position
    const randomTop = Math.random() * 70;

    // Random size
    const scale = Math.random() * 0.6 + 0.6;

    // Random speed (6–13s)
    const speed = Math.floor(Math.random() * 8) + 6;

    // Random direction (left OR right)
    const moveFromLeft = Math.random() > 0.5;

    // Random cloud color
    const colors = ["antiquewhite", "white", "#f5f5f5", "#eee"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Apply base styles
    cloud.style.position = "absolute";
    cloud.style.top = randomTop + "%";
    cloud.style.transform = `scale(${scale})`;
    cloud.style.transition = `all ${speed}s linear`;
    cloud.style.backgroundColor = color;

    // Match bubbles to cloud color
    cloud.children[0].style.backgroundColor = color;
    cloud.children[1].style.backgroundColor = color;

    // Start position
    if (moveFromLeft) {
        cloud.style.left = "-30%";
        setTimeout(() => {
            cloud.style.left = "110%";
        }, 100);
    } else {
        cloud.style.left = "110%";
        setTimeout(() => {
            cloud.style.left = "-30%";
        }, 100);
    }
}