$( document ).ready(function() {
  if ($("body").data("title") === "main" ||
  $("body").data("title") === "blog" ||
  $("body").data("title") === "account") {
// le tableau contenant les info de la navbar    
    const titlesAndAnchors = [
      {
        nom: "A propos de moi",
        anchors: "index.html#section-about"
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
// Le tableau contenant les icones pour afficher sur chaque page html
    const footerIcons = [
      {
        class: "fa-facebook-square"
      },
      {
        class: "fa-pinterest-square"
      },
      {
        class: "fa-instagram"
      }
    ];
// Création de la navbar et du footer communs pour les trois pages
    const header = $('#header-navbar');
    const navbar = $(document.createElement('nav'));
    const logo = $(document.createElement('img'));
    const ul = $(document.createElement('ul'));
    // anonymous self-invoking fonction qui crée les elements de la navbar
    (function (){
      for(let i=0; i<titlesAndAnchors.length; i++){
        let individualLi = $(document.createElement('li'));
        let anchor = $(document.createElement('a'));
        anchor.attr( {"href": `${titlesAndAnchors[i].anchors}`,"class": "link-in-navbar"});
        individualLi.attr({"class": "list-item "});
        $(ul).append(individualLi);
        $(anchor).append(document.createTextNode(titlesAndAnchors[i].nom));
        $(individualLi).append(anchor);
      }
    })();
    $(logo).attr({"src": "assets/img/julialogo.png", "alt": "Logo de Julia", "id": "logo-img"});
    $(navbar).append(logo);
    $(navbar).append(ul);
    $(header).append(navbar);
      $('.link-in-navbar').on('mouseenter', function(){
        console.log($(this).text());
      });
// Création du footer pour les trois pages
    const footer = $('#footer');
    const copyright = $(document.createElement('p'));
    $(copyright).append(document.createTextNode('Olga Spirkina©2021'));
    const socialMedia = $(document.createElement('ul'));
    $(socialMedia).attr({"id": "social-media"});
    $(footer).append(copyright);
    $(footer).append(socialMedia);
    for(let i=0; i<footerIcons.length; i++){
      let mediaIcons = $(document.createElement('li'));
      let icon = $(document.createElement('i'));
      $(icon).attr({"class": `fab fa-2x ${footerIcons[i].class}`});
      $(mediaIcons).append(icon);
      $(socialMedia).append(mediaIcons);
    }

  }
// La page index.html
  if ($("body").data("title") === "main"){
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
    const portrait1 = new Paintings("portrait", "portrait d'une personne", "assets/img/portrait1.jpg", ["la série des portraits"]);
    const portrait2 = new Paintings("portrait", "portrait d'une personne", "assets/img/portrait2.jpg", ["la série des portraits"]);
    const portrait3 = new Paintings("portrait", "portrait d'une personne", "assets/img/portrait3.jpg", ["la série des portraits"]);
    const portrait4 = new Paintings("portrait", "portrait d'une personne", "assets/img/portrait4.jpg", ["la série des portraits"]);
    const portrait5 = new Paintings("portrait", "portrait d'une personne", "assets/img/portrait5.jpg", ["la série des portraits"]);
    const galleryArray = [poppy, mountain, sea, village, sunflowers, portrait1, portrait2, portrait3, portrait4, portrait5];
// // Creation de la div pour l'image principale du carrousel
    const secondDivInCaroussel = $(document.createElement('div'));
    const mainDivInCaroussel = $(document.createElement('div'));
    const headingInGallery = $(document.createElement('h2'));
    $(headingInGallery).append(document.createTextNode('Mes tableaux'));
    $(mainDivInCaroussel).attr({"class": "gtco-testimonials"})
    $(secondDivInCaroussel).attr({"class": "owl-carousel owl-carousel1 owl-theme"});
    $(mainDivInCaroussel).append(secondDivInCaroussel);
    $(gallerySection).append(headingInGallery);
    $(gallerySection).append(mainDivInCaroussel);
// Creation des elements de la gallérie de class="acryl" et class="portrait"
    for(let i=0; i<galleryArray.length; i++){
      const divPictureParent =$(document.createElement('div'));
      $(divPictureParent).attr({"class": `card pictures-hidden ${galleryArray[i].technic}_${galleryArray[i].name}`});
      const picture = $(document.createElement('img'));
      $(picture).attr({"class": `card-img-top ${galleryArray[i].technic}_${galleryArray[i].name}`, "src": `${galleryArray[i].img}`, "alt": `${galleryArray[i].info}`})
      const spanForText = $(document.createElement('span'));
      spanForText.append(document.createTextNode(galleryArray[i].name));
      $(divPictureParent).append(picture);
      $(divPictureParent).append(spanForText);
      $(secondDivInCaroussel).append(divPictureParent);
    }
// Zoom sur chaque image de la gallérie-carrousel
(function (){
  const centralFigure = $(document.createElement('figure'));
  const hugeImg = $(document.createElement('img'));
  $(centralFigure).attr({"id": "figure"});
  $(hugeImg).attr({"id": "huge-img"});
  $(centralFigure).append(hugeImg);
  $(buttonSection).append(centralFigure);
})();
// Faire apparaitre l'image central au passage de la souris sur chaque image du carrousel
  $(document).on({
      mouseenter: function () {
        $('#huge-img').attr({"src": `${$(this).attr('src')}`, "style": "width: 40rem"});
      }
  }, '.card-img-top');

// Faire disparaitre l'image central en clickant sur le body
$(function() {
  $(document).on("click",function (e) {
     if (e.target.id=="body-id") {
       $("#huge-img").fadeToggle(500);
       e.stopPropagation(); // l'evenement courant le click sur le body ne se propage plus loin
       return false;
     }
     else if ($("#huge-img").is(":visible")) {
       $("#huge-img").fadeOut(500);
     }
  });
});
  // DEBUT Owl Carousel JQuery
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
// FIN OWL CAROUSEL
  }
});
