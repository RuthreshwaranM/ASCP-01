/* Draws one card for every game in data/games.js. You do not need to edit this file. */
(function () {
  const box = document.getElementById("games");
  const list = window.GAMES || [];

  if (!list.length) {
    box.innerHTML = '<p>No games yet. Check back soon.</p>';
    return;
  }

  list.forEach((g) => {
    const card = document.createElement("a");
    card.className = "game-card";
    card.href = g.url;
    card.target = "_blank";          // opens in a new tab; delete this line to open in the same tab
    card.rel = "noopener";

    // picture area: emoji first, replaced by your image once it loads
    const art = document.createElement("div");
    art.className = "game-card__art";
    art.textContent = g.emoji || "🎮";
    if (g.icon) {
      const img = new Image();
      img.alt = g.name;
      img.loading = "lazy";
      img.onload = () => { art.textContent = ""; art.appendChild(img); };
      img.src = g.icon;
    }

    const body = document.createElement("div");
    body.className = "game-card__body";

    const name = document.createElement("div");
    name.className = "game-card__name";
    name.textContent = g.name;

    const blurb = document.createElement("div");
    blurb.className = "game-card__blurb";
    blurb.textContent = g.blurb || "";

    const play = document.createElement("div");
    play.className = "game-card__play";
    play.textContent = "Play now \u2192";

    body.append(name, blurb, play);
    card.append(art, body);
    box.appendChild(card);
  });
})();