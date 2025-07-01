/**
 * Modulo "NightSky" gera o efeito de ceu noturno de forma
 * desacoplada do restante da pagina.
 * Todos os elementos e valores de estilo sao centralizados
 * para facilitar manutencao e reutilizacao.
 */
const NightSky = (() => {
  'use strict';

  /**
   * Configurações padrão centralizadas para reduzir o acoplamento
   * com o CSS. Podem ser sobrescritas chamando a função configure().
   */
  const DEFAULT_CONFIG = {
    // Seletores utilizados para localizar elementos principais na página
    selectors: {
      stars: '.stars',
      cross: '.stars-cross',
      crossAux: '.stars-cross-aux'
    },
    // Demais classes manipuladas pelo script
    classes: {
      blur: 'blur',
      nebula: 'nebulosa'
    },
    starPalette: ['#280F36', '#632B6C', '#BE6590', '#FFC1A0', '#FE9C7F'],
    nebulaPalette: [
      '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff', '#e6e6fa',
      '#fff0f5', '#e0ffff', '#f0fff0', '#f0ffff', '#ffe4e1', '#f5f5dc',
      '#e0e0e0', '#e6ffe6', '#fffff0'
    ],
    // Distribuição espectral aproximada das estrelas
    spectralDistribution: [
      { cls: 'star-o', weight: 1 },
      { cls: 'star-b', weight: 3 },
      { cls: 'star-a', weight: 6 },
      { cls: 'star-f', weight: 30 },
      { cls: 'star-g', weight: 60 },
      { cls: 'star-k', weight: 100 },
      { cls: 'star-m', weight: 300 }
    ],
    // Classes CSS utilizadas para cada tipo de estrela
    starClasses: {
      smallBlink: 'star star-1 blink',
      mediumBlink: 'star star-2 blink',
      smallStatic: 'star star-0',
      crossBlink: 'star star-4 blink',
      crossAux: 'star star-2',
      special: 'star star-5'
    },
    // Quantidades de entidades geradas
    counts: {
      starPairs: 500,
      staticStars: 50,
      spectralStars: 200,
      crossStars: 12,
      crossAux: 50,
      nebulas: 3
    }
  };

  // Instância atual de configuração (cópia mutável)
  let config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

  // Registro de posicoes ja ocupadas por nebulosas.
  const nebulaBases = [];

  /**
   * Atualiza a configuração do módulo mesclando valores informados.
   * Pode ser utilizado para alterar seletores ou quantidades sem
   * modificar o código fonte.
   */
  function configure(opts = {}) {
    for (const key in opts) {
      if (!Object.prototype.hasOwnProperty.call(config, key)) continue;
      if (typeof config[key] === 'object' && !Array.isArray(config[key])) {
        config[key] = { ...config[key], ...opts[key] };
      } else {
        config[key] = opts[key];
      }
    }
  }

  /**
   * Atalho para document.querySelector a fim de simplificar as chamadas.
   */
  const $ = (selector) => document.querySelector(selector);

  /** Retorna numero aleatorio no intervalo [min, max]. */
  const rand = (min, max) => Math.random() * (max - min) + min;

  /**
   * Aplica rapidamente um objeto de estilos a um elemento HTML.
   * Utilizado para evitar espalhar atribuições de estilo pelo código.
   */
  function applyStyles(el, styles) {
    Object.assign(el.style, styles);
  }

  /**
   * Calcula posicao X com leve agrupamento para dar profundidade.
   */
  function clusteredX() {
    if (Math.random() < 0.7) return rand(0, 100);
    const clusters = [
      { center: 30, spread: 10 },
      { center: 60, spread: 8 },
      { center: 80, spread: 6 }
    ];
    const c = clusters[Math.floor(Math.random() * clusters.length)];
    const val = c.center + rand(-c.spread, c.spread);
    return Math.max(0, Math.min(100, val));
  }

  /** Variante para o eixo Y seguindo a mesma logica de agrupamento. */
  function clusteredY() {
    if (Math.random() < 0.7) return rand(0, 100);
    const clusters = [
      { center: 20, spread: 10 },
      { center: 70, spread: 8 },
      { center: 50, spread: 6 }
    ];
    const c = clusters[Math.floor(Math.random() * clusters.length)];
    const val = c.center + rand(-c.spread, c.spread);
    return Math.max(0, Math.min(100, val));
  }

  // As informações de espectro e classes de estrelas estão em config

  /**
   * Define a classe espectral conforme a posicao Y.
   * Estrelas proximas ao horizonte tendem a ser mais frias.
   */
  function spectralClass(y) {
    const bias = y < 30 ? 0.5 : 1.0;
    const dist = config.spectralDistribution;
    const total = dist.reduce((sum, s) => sum + s.weight * bias, 0);
    let r = Math.random() * total;
    for (const s of dist) {
      if (r < s.weight * bias) return s.cls;
      r -= s.weight * bias;
    }
    return dist[dist.length - 1].cls;
  }

  /** Converte cor hexadecimal para array HSL. */
  function hexToHsl(hex) {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16) / 255;
    const g = parseInt(clean.substring(2, 4), 16) / 255;
    const b = parseInt(clean.substring(4, 6), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s;
    let l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // escala de cinza
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return [h * 360, s * 100, l * 100];
  }

  /** Cria string CSS a partir de valores HSL. */
  const hslCss = (h, s, l) => `hsl(${h.toFixed(1)}, ${s.toFixed(1)}%, ${l.toFixed(1)}%)`;

  /**
   * Interpola suavemente dois tons e retorna string de gradiente.
   */
  function interpolatedGradient(color1, color2, steps) {
    const hsl1 = hexToHsl(color1);
    const hsl2 = hexToHsl(color2);
    const stops = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const h = hsl1[0] + (hsl2[0] - hsl1[0]) * t;
      const s = hsl1[1] + (hsl2[1] - hsl1[1]) * t;
      const l = hsl1[2] + (hsl2[2] - hsl1[2]) * t;
      stops.push(`${hslCss(h, s, l)} ${(t * 100).toFixed(1)}%`);
    }
    return stops.join(', ');
  }

  /**
   * Cria elemento DOM representando uma estrela.
   * Valores default permitem uso flexivel em diferentes contextos.
   */
  function createStar(className, opts = {}) {
    const el = document.createElement('div');
    el.className = className;
    const topUnit = opts.topUnit || 'vh';
    const leftUnit = opts.leftUnit || 'vw';
    applyStyles(el, {
      top: `${opts.top}${topUnit}`,
      left: `${opts.left}${leftUnit}`,
      animationDuration: `${opts.duration}s`,
      animationDelay: `${opts.delay}s`,
      backgroundColor: opts.color,
      boxShadow: opts.shadow,
      opacity: opts.opacity
    });
    return el;
  }

  /**
   * Insere estrela em contêiner em posicoes aleatorias.
   */
  function appendRandomStar(container, className, opts = {}) {
    container.appendChild(
      createStar(className, {
        top: clusteredY(),
        left: clusteredX(),
        duration: rand(1.5, 7),
        delay: rand(0, 10),
        ...opts
      })
    );
  }

  /** Cria halo difuso usado em estrelas cruzadas. */
  function createBlur(top, left, color) {
    const div = document.createElement('div');
    div.className = config.classes.blur;
    applyStyles(div, {
      top: `${top}%`,
      left: `${left}%`,
      backgroundColor: color
    });
    return div;
  }

  /**
   * Gera o conjunto principal de estrelas de fundo.
   * Controla quantidade e distribuicao por tipo.
   */
  function populateStars() {
    const stars = $(config.selectors.stars);

    for (let i = 0; i < config.counts.starPairs; i++) {
      appendRandomStar(stars, config.starClasses.smallBlink);
      appendRandomStar(stars, config.starClasses.mediumBlink, { duration: rand(2, 8) });
    }

    for (let i = 0; i < config.counts.staticStars; i++) {
      appendRandomStar(stars, config.starClasses.smallStatic, { duration: rand(1, 5) });
    }

    for (let i = 0; i < config.counts.spectralStars; i++) {
      const ypos = clusteredY();
      appendRandomStar(stars, `star ${spectralClass(ypos)}`, { top: ypos });
    }

    const cross = $(config.selectors.cross);

    for (let i = 0; i < config.counts.crossStars; i++) {
      appendRandomStar(cross, config.starClasses.crossBlink, {
        duration: rand(3, 10),
        delay: rand(0, 15)
      });

      const color = config.starPalette[Math.floor(rand(0, config.starPalette.length))];
      cross.appendChild(createBlur(clusteredY(), clusteredX(), color));

      appendRandomStar(cross, config.starClasses.smallBlink, {
        topUnit: '%',
        leftUnit: '%',
        duration: rand(6, 15),
        delay: rand(0, 10),
        color,
        shadow: `0 0 6px 1px ${color}`
      });
    }

    const aux = $(config.selectors.crossAux);
    for (let i = 0; i < config.counts.crossAux; i++) {
      const color = config.starPalette[Math.floor(rand(0, config.starPalette.length))];
      if (i % 2 === 0) {
        appendRandomStar(stars, config.starClasses.special, {
          duration: rand(3, 12),
          color
        });
      }
      aux.appendChild(createBlur(clusteredY(), clusteredX(), color));
      appendRandomStar(aux, config.starClasses.crossAux, {
        topUnit: '%',
        leftUnit: '%',
        duration: rand(5, 14),
        delay: rand(0, 10),
        color,
        shadow: `0 0 10px 1px ${color}`,
        opacity: 0.7
      });
    }
  }

  /**
   * Variante mais suave da interpolacao de cor para nebulosas.
   */
  function interpolatedGradientSoft(c1, c2, steps) {
    const hsl1 = hexToHsl(c1);
    const hsl2 = hexToHsl(c2);
    const stops = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const h = hsl1[0] + (hsl2[0] - hsl1[0]) * t;
      const s = (hsl1[1] + (hsl2[1] - hsl1[1]) * t) * 0.5;
      const l = (hsl1[2] + (hsl2[2] - hsl1[2]) * t) * 0.7;
      stops.push(`${hslCss(h, s, l)} ${(t * 100).toFixed(1)}%`);
    }
    return stops.join(', ');
  }

  /**
   * Gera nebulosas de forma procedural evitando sobreposicoes.
   */
  function createNebula() {
    const MIN_PART_DIST = 10; // distancia minima entre cada "nuvem"
    let baseTop, baseLeft;
    let attempts = 0;

    // Encontra posicao base que nao conflite com outras nebulosas
    do {
      baseTop = rand(0, 100);
      baseLeft = rand(0, 100);
      attempts++;
    } while (
      attempts < 10 &&
      !nebulaBases.every(b => {
        const dx = b.left - baseLeft;
        const dy = b.top - baseTop;
        return Math.sqrt(dx * dx + dy * dy) > 35;
      })
    );

    // Registra a posicao para evitar colisao
    nebulaBases.push({ top: baseTop, left: baseLeft });

    const parts = Math.floor(rand(5, 9));
    const c1 = config.nebulaPalette[Math.floor(rand(0, config.nebulaPalette.length))];
    const c2 = config.nebulaPalette[Math.floor(rand(0, config.nebulaPalette.length))];
    const gradient = interpolatedGradientSoft(c1, c2, 100);

    let curTop = baseTop;
    let curLeft = baseLeft;
    const partPositions = [];

    for (let p = 0; p < parts; p++) {
      if (p > 0) {
        let attempt = 0;
        let newTop, newLeft;
        do {
          newTop = curTop + rand(-12, 12);
          newLeft = curLeft + rand(-12, 12);
          newTop = Math.max(0, Math.min(100, newTop));
          newLeft = Math.max(0, Math.min(100, newLeft));
          attempt++;
        } while (
          attempt < 10 &&
          !partPositions.every(pos => {
            const dx = pos.left - newLeft;
            const dy = pos.top - newTop;
            return Math.sqrt(dx * dx + dy * dy) >= MIN_PART_DIST;
          })
        );
        curTop = newTop;
        curLeft = newLeft;
      }

      curTop = Math.max(0, Math.min(100, curTop));
      curLeft = Math.max(0, Math.min(100, curLeft));
      const size = rand(4, 10);

      const neb = document.createElement('div');
      neb.className = config.classes.nebula;
      applyStyles(neb, {
        top: `${curTop.toFixed(1)}vh`,
        left: `${curLeft.toFixed(1)}vw`,
        width: `${size.toFixed(1)}vw`,
        height: `${size.toFixed(1)}vw`,
        background: `radial-gradient(circle, ${gradient})`,
        opacity: rand(0.05, 0.15).toFixed(2),
        filter: `blur(${rand(20, 40).toFixed(1)}px)`,
        borderRadius: `${rand(40, 100).toFixed(0)}%`,
        transform: `rotate(${rand(0, 360).toFixed(0)}deg) scale(${rand(0.8, 1.4).toFixed(2)})`
      });

      $(config.selectors.crossAux).appendChild(neb);
      partPositions.push({ top: curTop, left: curLeft });
    }
  }

  /** Inicializa o efeito de céu noturno na página.
   *  É possível passar opções para configurar o módulo.
   */
  function init(options = {}) {
    configure(options);
    populateStars();
    for (let i = 0; i < config.counts.nebulas; i++) createNebula();
  }

  // Expondo métodos públicos para inicialização e configuração.
  return { init, configure };
})();

// Função auxiliar para iniciar o efeito apenas uma vez por inserção
// da seção ".sky" no DOM. Necessário para funcionar com a navegação
// instantânea do MkDocs Material, que troca o conteúdo sem recarregar
// a página por completo.
function bootstrapNightSky() {
  const skyContainer = document.querySelector('.sky');
  if (skyContainer && !skyContainer.dataset.nightSkyLoaded) {
    skyContainer.dataset.nightSkyLoaded = 'true';
    NightSky.init();
  }
}

// Inicializa ao carregar o DOM inicialmente
window.addEventListener('DOMContentLoaded', bootstrapNightSky);

// Observa alterações no body para reinicializar ao navegar entre páginas
const nightSkyObserver = new MutationObserver(bootstrapNightSky);
nightSkyObserver.observe(document.body, { childList: true, subtree: true });
