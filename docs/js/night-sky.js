$(function () {
  var nightsky = ["#280F36", "#632B6C", "#BE6590", "#FFC1A0", "#FE9C7F"];

  function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }

  var star0 =
    "<div class='star star-0' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;animation-delay:{{delay}}s;'></div>";

  var star1 =
    "<div class='star star-1 blink' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;animation-delay:{{delay}}s;'></div>";

  var star2 =
    "<div class='star star-2 blink' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;animation-delay:{{delay}}s;'></div>";

  var star3 =
    "<div class='star star-3' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;animation-delay:{{delay}}s;'></div>";

  var star4 =
    "<div class='star star-4 blink' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;animation-delay:{{delay}}s;'></div>";

  var star5 =
    "<div class='star star-5' style='top:{{top}}vh;left:{{left}}vw;animation-duration:{{duration}}s;animation-delay:{{delay}}s;background-color:{{color}}'></div>";

  var star1pt =
    "<div class='star star-1 blink' style='top:{{top}}%;left:{{left}}%;animation-duration:{{duration}}s;animation-delay:{{delay}}s;background-color:{{color}};box-shadow:0px 0px 6px 1px {{shadow}}'></div>";

  var star2pt =
    "<div class='star star-2' style='top:{{top}}%;left:{{left}}%;animation-duration:{{duration}}s;animation-delay:{{delay}}s;background-color:{{color}};box-shadow:0px 0px 10px 1px {{shadow}};opacity:0.7'></div>";

  var blur =
    "<div class='blur' style='top:{{top}}%;left:{{left}}%;background-color:{{color}}'></div>";

  for (let i = 0; i < 500; i++) {
    $(".stars").append(
      star1
        .replace("{{top}}", getRandomInt(0, 100)) // distribuição uniforme
        .replace("{{left}}", getRandomInt(0, 100))
        .replace("{{duration}}", getRandomInt(1.5, 7)) // durações mais aleatórias
        .replace("{{delay}}", getRandomInt(0, 10))
    );

    $(".stars").append(
      star2
        .replace("{{top}}", getRandomInt(0, 100))
        .replace("{{left}}", getRandomInt(0, 100))
        .replace("{{duration}}", getRandomInt(2, 8))
        .replace("{{delay}}", getRandomInt(0, 10))
    );
  }

  for (let i = 0; i < 50; i++) {
    $(".stars").append(
      star0
        .replace("{{top}}", getRandomInt(0, 100))
        .replace("{{left}}", getRandomInt(0, 100))
        .replace("{{duration}}", getRandomInt(1, 5))
        .replace("{{delay}}", getRandomInt(0, 10))
    );
  }

  for (let i = 0; i < 12; i++) {
    $(".stars").append(
      star4
        .replace("{{top}}", getRandomInt(0, 100))
        .replace("{{left}}", getRandomInt(0, 100))
        .replace("{{duration}}", getRandomInt(3, 10))
        .replace("{{delay}}", getRandomInt(0, 15))
    );

    $(".stars-cross").append(
      blur
        .replace("{{top}}", getRandomInt(0, 100))
        .replace("{{left}}", getRandomInt(0, 100))
        .replace(
          "{{color}}",
          nightsky[Math.floor(getRandomInt(0, nightsky.length))]
        )
    );

    $(".stars-cross").append(
      star1pt
        .replace("{{top}}", getRandomInt(0, 100))
        .replace("{{left}}", getRandomInt(0, 100))
        .replace("{{duration}}", getRandomInt(6, 15))
        .replace("{{delay}}", getRandomInt(0, 10))
        .replace(
          "{{color}}",
          nightsky[Math.floor(getRandomInt(0, nightsky.length))]
        )
        .replace(
          "{{shadow}}",
          nightsky[Math.floor(getRandomInt(0, nightsky.length))]
        )
    );
  }

  for (let i = 0; i < 50; i++) {
    if (i % 2 == 0) {
      $(".stars").append(
        star5
          .replace("{{top}}", getRandomInt(0, 100))
          .replace("{{left}}", getRandomInt(0, 100))
          .replace("{{duration}}", getRandomInt(3, 12))
          .replace("{{delay}}", getRandomInt(0, 10))
          .replace(
            "{{color}}",
            nightsky[Math.floor(getRandomInt(0, nightsky.length))]
          )
      );
    }

    $(".stars-cross-aux").append(
      blur
        .replace("{{top}}", getRandomInt(0, 100))
        .replace("{{left}}", getRandomInt(0, 100))
        .replace(
          "{{color}}",
          nightsky[Math.floor(getRandomInt(0, nightsky.length))]
        )
    );

    $(".stars-cross-aux").append(
      star2pt
        .replace("{{top}}", getRandomInt(0, 100))
        .replace("{{left}}", getRandomInt(0, 100))
        .replace("{{duration}}", getRandomInt(5, 14))
        .replace("{{delay}}", getRandomInt(0, 10))
        .replace(
          "{{color}}",
          nightsky[Math.floor(getRandomInt(0, nightsky.length))]
        )
        .replace(
          "{{shadow}}",
          nightsky[Math.floor(getRandomInt(0, nightsky.length))]
        )
    );
  }
});
