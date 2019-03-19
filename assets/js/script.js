$(function(){
    //modificar texto
    $('input').on('click',function(){
      $(this).val('');
    })

    $('textarea').on('click',function(){
      $(this).text('');
    })

    //Creando tab
    $('.parametros__indicadores > a').on('click', function(ev){
      ev.preventDefault();
      //$('.header__img').addClass('fadeinLeft');
      $('.parametros__indicadores > a').removeClass('active');
      $(this).addClass('active');

      var divSelec = $(this).children('img').attr('alt');
      $('.parametros__grafico.active').removeClass('active');
      $('.'+divSelec).addClass('active fadeIN');
    })

    //ocultar menu
    $('img.nav_menu').on('click', function(){
      if($('nav > ul').hasClass('visible')){
        $('nav > ul').removeClass('visible');
      } else{
        $('nav > ul').addClass('visible');
      }

    })

    //ajustar altura de header
    var anchoHeader = $('#inicio').width();
      console.log(anchoHeader);
      if (anchoHeader > 992){
        $('#inicio').height(anchoHeader/2.4)
      }

      //smooth scroll
      // Select all links with hashes
      $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {

            $('nav > ul').removeClass('visible');
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });


})
