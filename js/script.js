$(document).ready(function(){
    
   // Menu de Navegacion
   var activo = true;

   $('.btn-menu').on('click', function(){
     
    //Intercalar Iconos
    $('.btn-menu i').toggleClass('fa-times');

    //Animacion Menu
    if(activo){
      $('.list-container').animate({
          left: '0px'
      }, 500);

      activo = false;

    }else{
        activo = true;

     $('.list-container').animate({
         left: '-100%'
     }, 500);

       activo = true;
    }

   });

   // Intercalar Clase "Activo" Enlaces menu de navegacion

   var enlaces = document.querySelectorAll('.lists li a');

   enlaces.forEach( (element) => {
     
    element.addEventListener('click', (event) =>{
      enlaces.forEach((link) => {
          link.classList.remove('activo');
      });

      event.target.classList.add('activo');

    });
   });

   // Scroll Efect

   var prevScrollPos = window.pageYOffset;

   window.onscroll = () => {

    // OCultar Y Mostrar menu al hace scroll
    var currentScrollPos = window.pageYOffset;

    if(prevScrollPos > currentScrollPos){

      $('.menu').css("top", "0px");
      $('.menu').css("transition", "0.5s");

    }else{
      $('.menu').css("top", "-60px");
      $('.menu').css("transition", "0.5s");
    }
   prevScrollPos = currentScrollPos;

   // Condiciones
   var posicion = window.pageYOffset;

   if (posicion <= 600) {
    // Ocultar Estilos Menu Scroll
    $('.menu').css("borderBottom", "none");

    //Ocultar Ir Arriba
    $('.go-top').css("right", "-100%");

   }else{
     // Mostrar Estilos Menu Scroll
     $('.menu').css("borderBottom", "3px solid #ce2eff");

     //Mostrar Ir Arriba
    $('.go-top').css("right", "0");
    $('.go-top').css("transition", "500ms");

   }
 }

 // Funcion ir arriba
 $('.go-top').on('click', function(){
     $('body, html').animate({
         scrollTop: '0'
     }, 500);
 });

 // Funcion ver abajo
 $('#abajo').on('click', function(){
   $('body, html').animate({
      scrollTop: '600px'
   }, 500);
 });

});