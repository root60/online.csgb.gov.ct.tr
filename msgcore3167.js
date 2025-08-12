jQuery(document).ready(function () {


    msgokunmamisuyariver();
    //onlinekullanicibul();

    //msguyarikontrol();
    onlinekullanicikontrol();

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    $('#msggonderbutton').click(function (e) {


        var hata = "0";
        var alanpkey,msgmetin;
        alanpkey = document.getElementById('alanpkey').value;
        msgmetin = document.getElementById('msgmetin').value;

        if (alanpkey == "" || alanpkey=="0") {
            $('#alanpkey').focus();
            hata = "1"
            pulsate("#alanpkey", "#ff0000");
            showtoast("error", "HATA", "Alıcıyı seçmediniz.");
        }

        if (msgmetin == "") {
            $('#msgmetin').focus();
            hata = "1"
            pulsate("#msgmetin", "#ff0000");
            showtoast("error", "HATA", "Göndereceğiniz mesajı yazmadınız.");
        }


        if (hata == "0") {
            msggonder(alanpkey, msgmetin);
            buttonloadyap("#msggonderbutton");
        }

    });



});


//HER 1 DAKİKADA BİR MESAJ GELİP GELMEDİĞİNİ KONTROL ET!
//120000
//function msguyarikontrol() {
    //window.setInterval(msgokunmamisuyariver, 120000);
//}

function onlinekullanicikontrol() {
    //window.setInterval(onlinekullanicibul, 120000);
}




function msggonder(alanpkey, msgmetin) {


    $.ajax({
        type: "POST",
        url: getBaseURL() + "Msg/msggonder",
        dataType: "json",
        data: { alanpkey: alanpkey, msgmetin: msgmetin},
        success: function (result) {
            if (result.durum == "Kaydedildi") {
                showtoast("success", "Başarılı", "Mesaj gönderildi.");
                buttonloadbitir('#msggonderbutton'); 
                GelenMesajlarim();
            }
            if (result.durum != "Kaydedildi") {
                showtoast("error", "Hata", result.hatastr);
                buttonloadbitir('#msggonderbutton');
            }

        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
            buttonloadbitir('#msggonderbutton');
        }
    });

}



function msgokunmamisuyariver() {

    $.ajax({
        type: "POST",
        url: getBaseURL() + "Msg/OkunmamisMsgSayisi",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result > 0) {
                var adet = result;

                var msgmetin = "Okunmamış toplam " + adet + " mesajınız var";
                toastr.info(msgmetin, "Mesajlarım");
            }
        },
        error: function () {
            //alert('Veri düzenleme yaparken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
        }
    });
}


function onlinekullanicibul() {

    $.ajax({
        type: "POST",
        url: getBaseURL() + "Kullanici/OnlineKullaniciUyari",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result.durum != "Kaydedildi") {
                toastr.error(result.hatastr, "Dikkat");
            }
        },
        error: function () {
            //alert('Veri düzenleme yaparken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
        }
    });
}


function GelenMesajlarim() {

    $.ajax({
        type: "POST",
        url: getBaseURL() + "Msg/GelenMesajlarim",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#Labelchat").html("");
            $("#Labelchat").html(result);
        },
        error: function () {
            //alert('Veri düzenleme yaparken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
        }
    });
}
