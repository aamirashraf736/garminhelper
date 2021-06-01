
$(document).ready(function(){
    $("#display_popup").click(function(){
     showpopup();
    });
    $("#cancel_button").click(function(){
     hidepopup();
    });
    $("#close_button").click(function(){
     hidepopup();
    });
   });
   
   
   function showpopup()
   {
    $("#popup_box ,center").fadeToggle();
    $("#popup_box ,center").css({"visibility":"visible","display":"block"});
   }
   
   function hidepopup()
   {
    $("#popup_box ,center").fadeToggle();
    $("#popup_box , center ").css({"visibility":"hidden","display":"none"});
   }