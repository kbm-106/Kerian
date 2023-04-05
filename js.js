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


window.addEventListener('load', function () {
  var myVideo = document.getElementById("myVideo");
  var windowHeight = window.innerHeight;
  var lastScrollPos = 0;
  var scrollDirection = 'down';
  var isScrolling = false;
  var isScrollingTimeout = null;

  window.addEventListener('scroll', function () {
    isScrolling = true;
    if (isScrollingTimeout !== null) {
      clearTimeout(isScrollingTimeout);
    }
    isScrollingTimeout = setTimeout(function() {
      isScrolling = false;
      if (myVideo) {
        myVideo.pause();
      }
    }, 20);
  });

  setInterval(function() {
    if (isScrolling) {
      var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
      var progress = (scrollPos / 1000) * 0.1;
      if (myVideo) {
        myVideo.style.transition = 'transform 0.1s linear';
        if (scrollPos > lastScrollPos) {
          // Si la page est en train de défiler vers le bas
          if (scrollDirection !== 'down') {
            // Si la direction de défilement a changé
            myVideo.currentTime -= 0.1;
            myVideo.play();
            scrollDirection = 'down';
          } else {
            myVideo.currentTime += progress;
          }
        } else if (scrollPos < lastScrollPos) {
          // Si la page est en train de défiler vers le haut
          if (scrollDirection !== 'up') {
            // Si la direction de défilement a changé
            myVideo.currentTime += 0.1;
            myVideo.play();
            scrollDirection = 'up';
          } else {
            myVideo.currentTime -= progress;
          }
        }
        lastScrollPos = scrollPos;
      }
    }
  }, 50);
});

