/**Please please go support the amazing author over at 'https://ihatetomatoes.net/create-custom-preloading-screen/'
Sir, I owe you my life.**/

$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 5000);

});
