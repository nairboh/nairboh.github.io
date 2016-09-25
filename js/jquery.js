$(window).resize(function () { 
    $('body').css('padding-top', parseInt($('nav').css("height"))+10);
    // $('footer').css('padding-top', parseInt($('body').css("height")));
});

$(window).load(function () { 
    $('body').css('padding-top', parseInt($('nav').css("height"))+10);
    // $('footer').css('padding-top', parseInt($('body').css("height")));         
});