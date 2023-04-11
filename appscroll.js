let docTitle = document.title; window.addEventListener("blur", () => { document.title = "Come back :(";
});
window.addEventListener("focus", () => { document.title = docTitle;
});

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1100;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);


function toggleText1() {
  var x = document.querySelector(".TextSous1 p");
  var div = document.querySelector(".TextSous1");
  if (x.style.opacity === "0") {
      x.style.opacity = "1";
      div.classList.add("expand1"); /* ajouter la classe pour augmenter la hauteur */
  } else {
      x.style.opacity = "0";
      div.classList.remove("expand1"); /* supprimer la classe pour revenir à la hauteur par défaut */
  }
}

function toggleText2() {
  var x = document.querySelector(".TextSous2 p");
  var div = document.querySelector(".TextSous2");
  if (x.style.opacity === "0") {
      x.style.opacity = "1";
      div.classList.add("expand2"); /* ajouter la classe pour augmenter la hauteur */
  } else {
      x.style.opacity = "0";
      div.classList.remove("expand2"); /* supprimer la classe pour revenir à la hauteur par défaut */
  }
}

function toggleText3() {
  var x = document.querySelector(".TextSous3 p");
  var div = document.querySelector(".TextSous3");
  if (x.style.opacity === "0") {
      x.style.opacity = "1";
      div.classList.add("expand3"); /* ajouter la classe pour augmenter la hauteur */
  } else {
      x.style.opacity = "0";
      div.classList.remove("expand3"); /* supprimer la classe pour revenir à la hauteur par défaut */
  }
}

//

