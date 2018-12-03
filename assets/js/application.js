

$(document).ready(function() {

$('.img_nav').css('background-color','yellow');
$('.nav .nav-item a').removeClass('active');
$('li:nth-child(4) a').addClass('active');
$('a:contains(Promos)').html('Promotions');
$('a:contains(Création)').css('color','green');
$('h1~p').css('font-family','Trebuchet');
$('.slide:gt(2) a img').css('border','2px solid #333');

$('slide').mouseenter(function (){
    $(this).css('border','2px solid #333')
});
$('slide').mouseleave(function (){
    $(this).css('border','2px solid red')
});

$('.bouton').click(function (){
    $('span').css('background-color','yellow');
    let search = $('.champ').val();
    $('p:contains(search)').html('<span>" "</span>');
    alert(search);
});

})
/*var liste = [

    "Draggable",

    "Droppable",

    "Resizable",

    "Selectable",

    "Sortable"

];


$('#recherche').autocomplete({

    source : liste

});*/