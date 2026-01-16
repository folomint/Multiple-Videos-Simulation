let count = 15;

function setCount(c) {
  count = c;
}

function generate() {
  const link = document.getElementById("instaLink").value;
  const container = document.getElementById("videos");
  container.innerHTML = "";

  if (!link) {
    alert("Please paste Instagram link");
    return;
  }

  for (let i = 0; i < count; i++) {
    const views = Math.floor(Math.random() * 9000) + 500;
    const div = document.createElement("div");
    div.className = "video-card";
    div.innerHTML = `
      <video autoplay muted loop playsinline>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      </video>
      <p>👁️ Views: ${views}</p>
    `;
    container.appendChild(div);
  }
}
