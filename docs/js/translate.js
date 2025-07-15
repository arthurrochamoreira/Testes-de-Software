function insertTranslationWidget() {
  const header = document.querySelector(".md-header__inner");
  if (!header || document.getElementById("lang-select")) return;

  const select = document.createElement("select");
  select.id = "lang-select";
  select.style.marginLeft = "auto";
  select.innerHTML = `
    <option value="pt">PT</option>
    <option value="en">EN</option>
    <option value="es">ES</option>
  `;

  select.addEventListener("change", () => {
    translatePage(select.value);
  });

  header.appendChild(select);
}

async function translateText(text, target) {
  try {
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
      target +
      "&dt=t&q=" +
      encodeURIComponent(text);
    const response = await fetch(url);
    if (!response.ok) return text;
    const data = await response.json();
    return data[0]?.map((part) => part[0]).join("") || text;
  } catch (e) {
    console.error("Translation error", e);
    return text;
  }
}

async function translatePage(target) {
  const elements = document.querySelectorAll(
    "main .md-content p, main .md-content li"
  );
  for (const el of elements) {
    const originalText = el.innerText.trim();
    if (!originalText) continue;
    const translated = await translateText(originalText, target);
    el.innerText = translated;
  }
}

document$.subscribe(() => {
  insertTranslationWidget();
});
