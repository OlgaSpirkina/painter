$( document ).ready(function() {
  if ($("body").data("title") === "main" ||
  $("body").data("title") === "blog" ||
  $("body").data("title") === "account") {
// Création de la navbar et le footer communs pour les trois pages
    const header = $('#header-navbar');
    const navbar = $(document.createElement('nav'));
    const logo = $(document.createElement('img'));
    const ul = $(document.createElement('ul'));
    const main = $('#main-section');
    const about = $(document.createElement('section'));
    // anonymous self-invoking fonction qui crée les elements de la navbar
    (function (){
      let titles = ["A propos de moi", "Gallerie", "Blog", "Contact"];
      for(let i=0; i<titles.length; i++){
        let individualLi = $(document.createElement('li'));
        let anchor = $(document.createElement('a'));
        anchor.attr( {"href": "#", "class": "link-in-navbar"});
        individualLi.attr({"class": "list-item "});
        $(ul).append(individualLi);
        anchor.append(document.createTextNode(titles[i]));
        $(individualLi).append(anchor);
        $(main).append(about.attr({"id": "section-about"}));
      }
    })();
    $(logo).attr({"src": "assets/img/julialogo.png", "alt": "Logo de Julia", "id": "logo-img"});
    $(navbar).append(logo);
    $(navbar).append(ul);
    $(header).append(navbar);
      $('#header-navbar').on('click', $('.link-in-navbar'), function() {
        $('.link-in-navbar').each(function(){
          console.log($(this).text());
        })
      });

  }
});
