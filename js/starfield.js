document.addEventListener("DOMContentLoaded", function() {
  const starCount = 45; // Number of stars to create
  const shootingStarInterval = 8000; // Interval between shooting stars in milliseconds

  const container = document.getElementById("stars-dynamic");
  if (!container) return;

  function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    container.appendChild(star);
  }

  function spawnShootingStar() {
    if (window.ShootingStars && typeof window.ShootingStars.createTemporaryStar === 'function') {
      window.ShootingStars.createTemporaryStar(document.body);
    }
  }

  function generateStars() {
    for (let i = 0; i < starCount; i++) {
      createStar();
    }
  }

  generateStars();
  setTimeout(spawnShootingStar, Math.random() * shootingStarInterval); // Initial shooting star

  function randomizeShootingStarInterval() {
    const interval = Math.random() * shootingStarInterval;
    setTimeout(function() {
      spawnShootingStar();
      randomizeShootingStarInterval();
    }, interval);
  }

  randomizeShootingStarInterval();
});
