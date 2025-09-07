$(document).ready(function(){
    // Calcul de la largeur totale du carrousel
    var totalWidth = 0;
    $(".news-item").each(function() {
        totalWidth += $(this).outerWidth(true);
    });

    // Appliquer la largeur totale au carrousel
    $("#carousel").width(totalWidth);

    // Interval de 3 secondes entre chaque actualité
    setInterval(function(){
        // Déplacer le premier élément au bout de la liste
        $("#carousel .news-item:first")
            .animate({marginLeft: -$("#carousel .news-item:first").outerWidth(true)}, 1000, function() {
                $(this).appendTo("#carousel").css({marginLeft: 0});
            });
    }, 4000);
});

