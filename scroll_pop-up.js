$(document).ready(function(){

    PopUpHide(); //Скрыть PopUp при загрузке страницы

	var $menu = $("#menu");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 900 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 900 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        }); //scroll
      
    });

    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup").hide();
    }