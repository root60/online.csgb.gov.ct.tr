$(document).ajaxStart(function () {

    $("#wait").css("position", "absolute");
    $("#wait").css("top", (($([window, document]).height() - $("#wait").outerHeight()) / 2) + $([window, document]).scrollTop() + "px");
    $("#wait").css("left", (($([window, document]).width() - $("#wait").outerWidth()) / 2) + $([window, document]).scrollLeft() + "px");
    $("#wait").css("z-index", 99999);
    $("#wait").css("border-color", "Black");
    $("#wait").css("border-style", "solid");
    $("#wait").css("border-width", "thin");
    $('#wait').html("<img alt='Yükleniyor' src='/images/indicator3.gif'></img>");

    //showtoastsureli("error", "HATA", "Arka planda işlem yapılıyor. Lütfen ekranın yüklenmesini bekleyiniz.", 2000);

});

$(document).ajaxStop(function () {
    $("#wait").hide();
    $('#wait').html("");
});


