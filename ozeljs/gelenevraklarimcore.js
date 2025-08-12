jQuery(document).ready(function () {

    $('#gelenevraklarimcan').click(function (e) {
        gelenevraklarimyap();
    });


});


function gelenevraklarimyap() {

    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GelenEvraklarim/CanIcinGelenBasvurular",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#gelenbasvurularimajax").html(result);
        },
        error: function () {
            //alert('Veri düzenleme yaparken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
        }
    });

}



