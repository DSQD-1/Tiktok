const feed = document.querySelector(".feed");

const videos = [
  {
    username: "@tiktok",
    description: "Первое видео в нашей ленте 🔥",
    music: "🎵 Оригинальный звук"
  },
  {
    username: "@creator",
    description: "Скоро здесь будут реальные TikTok-видео",
    music: "🎵 Оригинальный звук"
  },
  {
    username: "@video",
    description: "Лента TikTok внутри Telegram",
    music: "🎵 Оригинальный звук"
  }
];

function createVideo(video) {
  const article = document.createElement("article");

  article.className = "video-card";

  article.innerHTML = `
    <div class="video-placeholder">
      <div class="play">▶</div>
    </div>

    <div class="info">
      <div class="username">${video.username}</div>

      <div class="description">
        ${video.description}
      </div>

      <div class="music">
        ${video.music}
      </div>
    </div>

    <div class="actions">
      <button class="like">❤️</button>
      <button>💬</button>
      <button>↗️</button>
      <button>🔖</button>
    </div>
  `;

  return article;
}

videos.forEach(video => {
  feed.appendChild(createVideo(video));
});

document.addEventListener("click", event => {
  const button = event.target.closest(".like");

  if (!button) return;

  button.classList.toggle("liked");

  if (button.classList.contains("liked")) {
    button.textContent = "❤️";
  } else {
    button.textContent = "🤍";
  }
});

function setupTelegram() {
  if (!window.Telegram?.WebApp) return;

  const tg = window.Telegram.WebApp;

  tg.ready();
  tg.expand();

  tg.setHeaderColor("#000000");
  tg.setBackgroundColor("#000000");
}

setupTelegram();