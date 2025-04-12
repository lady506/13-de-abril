const emojis = ["💋"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = (Math.random() * 2 + 3) + "s";
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(createEmoji, 150);
