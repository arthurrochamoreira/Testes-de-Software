(function (window) {
  "use strict";

  // CONFIGURAÇÕES personalizáveis
  const STAR_CONFIG = {
    quantidadeMultiplicador: 2, // multiplica a quantidade de estrelas a cada ciclo
    intervalo: 2000, // intervalo padrão entre criações de estrelas (ms)
  };

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomizeStar(el) {
    if (!el) return;
    el.style.setProperty("--shooting-top", rand(0, 100) + "%");
    el.style.setProperty("--shooting-right", rand(0, 100) + "%");
    el.style.setProperty("--shooting-distance", rand(600, 1200) + "px");
  }

  function createTemporaryStar(parent) {
    parent = parent || document.body;
    const star = document.createElement("div");
    star.className = "shooting_star";
    star.style.animationIterationCount = "1";
    randomizeStar(star);
    parent.appendChild(star);

    function handleAnimationEnd(e) {
      if (e.animationName !== "shooting") return;
      star.removeEventListener("animationend", handleAnimationEnd);
      star.classList.remove("active");
      setTimeout(() => {
        parent.removeChild(star);
      }, 500);
    }

    star.addEventListener("animationend", handleAnimationEnd);

    requestAnimationFrame(() => {
      star.classList.add("active");
    });
  }

  function startAutoStars(parent) {
    parent = parent || document.body;

    let intervalId;

    function gerarEstrelas() {
      // cria múltiplas estrelas conforme o multiplicador
      for (let i = 0; i < STAR_CONFIG.quantidadeMultiplicador; i++) {
        createTemporaryStar(parent);
      }
    }

    function startInterval() {
      if (!intervalId) {
        intervalId = setInterval(gerarEstrelas, STAR_CONFIG.intervalo);
      }
    }

    function stopInterval() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopInterval();
      } else {
        gerarEstrelas();
        startInterval();
      }
    });

    gerarEstrelas();
    startInterval();
  }

  function init(root = document) {
    root.querySelectorAll(".shooting_star").forEach(function (el) {
      randomizeStar(el);
      attachIterationHandler(el);
      requestAnimationFrame(() => {
        el.classList.add("active");
      });
    });
  }

  function attachIterationHandler(el) {
    if (!el) return;
    el.addEventListener("animationiteration", function (e) {
      if (e.animationName === "shooting") {
        randomizeStar(el);
      }
    });
  }

  window.ShootingStars = {
    randomizeStar,
    attachIterationHandler,
    createTemporaryStar,
    init,
    startAutoStars,
    config: STAR_CONFIG, // expõe as configurações
  };

  function bootstrapShootingStars() {
    const container = document.querySelector(".night");
    if (!container || container.dataset.shootingStarsLoaded) return;
    container.dataset.shootingStarsLoaded = "true";
    ShootingStars.startAutoStars(container);
  }

  window.addEventListener("DOMContentLoaded", bootstrapShootingStars);
  const shootingObserver = new MutationObserver(bootstrapShootingStars);
  shootingObserver.observe(document.body, { childList: true, subtree: true });
})(window);
