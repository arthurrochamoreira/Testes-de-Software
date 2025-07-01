function bootstrapStarfield() {
  const container = document.getElementById("stars-dynamic");
  if (!container || container.dataset.starfieldLoaded) return;
  container.dataset.starfieldLoaded = "true";

  const starCount = 45; // Number of stars to create
  const shootingStarInterval = 8000; // Interval between shooting stars in milliseconds

  const spectralDistribution = [
    { cls: "star-o", weight: 1 },
    { cls: "star-b", weight: 3 },
    { cls: "star-a", weight: 6 },
    { cls: "star-f", weight: 30 },
    { cls: "star-g", weight: 60 },
    { cls: "star-k", weight: 100 },
    { cls: "star-m", weight: 300 },
  ];

  function getSpectralClass() {
    const total = spectralDistribution.reduce((sum, s) => sum + s.weight, 0);
    let r = Math.random() * total;
    for (const s of spectralDistribution) {
      if (r < s.weight) return s.cls;
      r -= s.weight;
    }
    return spectralDistribution[spectralDistribution.length - 1].cls;
  }

  function createStar() {
    const star = document.createElement("div");
    star.className = `star ${getSpectralClass()}`;
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

  let shootingTimeout;

  function scheduleShootingStar() {
    const interval = Math.random() * shootingStarInterval;
    shootingTimeout = setTimeout(function() {
      spawnShootingStar();
      scheduleShootingStar();
    }, interval);
  }

  function stopShootingStar() {
    if (shootingTimeout) {
      clearTimeout(shootingTimeout);
      shootingTimeout = null;
    }
  }

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stopShootingStar();
    } else {
      spawnShootingStar();
      scheduleShootingStar();
    }
  });

  // Initial shooting star
  scheduleShootingStar();
}

window.addEventListener("DOMContentLoaded", bootstrapStarfield);
const starfieldObserver = new MutationObserver(bootstrapStarfield);
starfieldObserver.observe(document.body, { childList: true, subtree: true });
