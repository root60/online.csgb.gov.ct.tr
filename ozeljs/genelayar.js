jQuery(document).ready(function () {


    $('#mesajayar').change(function (e) {

        var emailgonderilsinmi = "Hayır"; 
        if ($('#mesajayar').is(":checked") == true) {
            emailgonderilsinmi = "Evet";
        }
        else {
            emailgonderilsinmi = "Hayır";
        }

        emailgonderilsinmi_ayardegistir(emailgonderilsinmi);
 
    });

    $('#girisemailbilgilendirmeayar').change(function (e) {

        var giristeemailgonder = "Hayır";
        if ($('#girisemailbilgilendirmeayar').is(":checked") == true) {
            giristeemailgonder = "Evet";
        }
        else {
            giristeemailgonder = "Hayır";
        }

        giristeemailgonder_ayardegistir(giristeemailgonder);

    });

});


function emailgonderilsinmi_ayardegistir(emailgonderilsinmi) {


    $.ajax({
        type: "POST",
        url: getBaseURL() + "Kullanici/emailgonderilsinmi_ayardegistir",
        dataType: "json",
        data: { emailgonderilsinmi: emailgonderilsinmi},
        success: function (result) {
            if (result.durum == "Kaydedildi") {
                showtoast("success", "Başarılı", "Ayar güncellendi."); 
            }
            if (result.durum != "Kaydedildi") {
                showtoast("error", "Hata", result.hatastr); 
            }

        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });

}


function giristeemailgonder_ayardegistir(giristeemailgonder) {


    $.ajax({
        type: "POST",
        url: getBaseURL() + "Kullanici/giristeemailgonder_ayardegistir",
        dataType: "json",
        data: { giristeemailgonder: giristeemailgonder },
        success: function (result) {
            if (result.durum == "Kaydedildi") {
                showtoast("success", "Başarılı", "Ayar güncellendi.");
            }
            if (result.durum != "Kaydedildi") {
                showtoast("error", "Hata", result.hatastr);
            }

        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });

}

