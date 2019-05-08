function testInfo(phoneInput,re,id){

var OK = re.exec(phoneInput);

if (!OK){
  $(id).text("Fel input");
}
else{
  $(id).text("");
}

}



$( document ).ready(function() {

$(".nav1 > ul").append("<li class='os'>OM OSS</li><li class='ko'>KONTAKTA</li>");


$("#phone").keyup(function(){

  var re = /^[0]{1}[0-9]{6,15}$/;
  var id="#phonev";
  testInfo($('#phone').val(),re,id);

});

$("#name").keyup(function(){

  var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var id="#namev";
  testInfo($('#name').val(),re,id);

});

$("#email").keyup(function(){

  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  var id="#emailv";
  testInfo($('#email').val(),re,id);

});


$(".ko").click(function(){

  $('html, body').animate({
        scrollTop: $("footer").offset().top+200
    }, 1000);
});

$(".os").click(function(){

  $('html, body').animate({
        scrollTop: $("#om_oss_text").offset().top-50
    }, 1000);
});





});
