$( document ).ready(function() {
  if ($("body").data("title") === "main" ||
  $("body").data("title") === "blog" ||
  $("body").data("title") === "account") {
    const titlesAndAnchors = [
      {
        nom: "A propos de moi",
        anchors: "index.html#main-section"
      },
      {
        nom: "Gallérie",
        anchors: "index.html#gallery-section"
      },
      {
        nom: "Blog",
        anchors: "blog.html"
      },
      {
        nom: "Contact",
        anchors: "account.html"
      }
    ];
// Création de la navbar et le footer communs pour les trois pages
    const header = $('#header-navbar');
    const navbar = $(document.createElement('nav'));
    const logo = $(document.createElement('img'));
    const ul = $(document.createElement('ul'));
    const main = $('#main-section');
    const about = $(document.createElement('section'));
    // anonymous self-invoking fonction qui crée les elements de la navbar
    (function (){
      for(let i=0; i<titlesAndAnchors.length; i++){
        let individualLi = $(document.createElement('li'));
        let anchor = $(document.createElement('a'));
        anchor.attr( {"href": `${titlesAndAnchors[i].anchors}`,"class": "link-in-navbar"});
        individualLi.attr({"class": "list-item "});
        $(ul).append(individualLi);
        anchor.append(document.createTextNode(titlesAndAnchors[i].nom));
        $(individualLi).append(anchor);
        $(main).append(about.attr({"id": "section-about"}));
      }
    })();
    $(logo).attr({"src": "assets/img/julialogo.png", "alt": "Logo de Julia", "id": "logo-img"});
    $(navbar).append(logo);
    $(navbar).append(ul);
    $(header).append(navbar);
      $('.link-in-navbar').on('mouseenter', function(){
        console.log($(this).text());
      })
// Création de la section Gallérie
    const gallerySection = $('#gallery-section');
    class Paintings {
      constructor(technic, name, img, info) {
        this.technic = technic;
        this.name = name;
        this.img = img;
        this.info = info;
        }
      }
    const poppy = new Paintings("acryl", "Coquelicot", "assets/img/acryl-flowers.jpg", ["acrylic painting"]);
    const mountain = new Paintings("acryl", "Village de montagne", "assets/img/acryl-mountain.jpg", ["couleurs et inspiration"]);
    const sea = new Paintings("acryl", "Les falaises", "assets/img/acryl-sea.jpg", ["les nuances du gris et blue"]);
    const village = new Paintings("acryl", "Village sous le soleil", "assets/img/acryl-village.jpg", ["la vivacité des couleurs"]);
    const sunflowers = new Paintings("acryl", "Tournesols", "assets/img/acryl-sunflower.jpg", ["la beauté des contrasts"]);
    const galleryArray = [poppy, mountain, sea, village, sunflowers];
// // Creation de la div pour l'image principale de la caroussel
    const secondDivInCaroussel = $(document.createElement('div'));
    const mainDivInCaroussel = $(document.createElement('div'));
    $(mainDivInCaroussel).attr({"class": "gtco-testimonials"})
    $(secondDivInCaroussel).attr({"class": "owl-carousel owl-carousel1 owl-theme"});
    $(mainDivInCaroussel).append(secondDivInCaroussel);
    $(gallerySection).append(mainDivInCaroussel);
// Creation des elements de la gallérie de class="acryl"
    for(let i=0; i<galleryArray.length; i++){
      const divPictureParent =$(document.createElement('div'));
      $(divPictureParent).attr({"class": "card pictures-hidden"});
      const picture = $(document.createElement('img'));
      $(picture).attr({"class": "card-img-top", "src": `${galleryArray[i].img}`, "alt": `${galleryArray[i].name}`})
      const spanForText = $(document.createElement('span'));
      spanForText.append(document.createTextNode(galleryArray[i].name));
      $(divPictureParent).append(picture);
      $(divPictureParent).append(spanForText);
      $(secondDivInCaroussel).append(divPictureParent);
    }
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();




  }
});
