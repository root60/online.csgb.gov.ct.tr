
jQuery(document).ready(function () {


}); //document.ready


function HaberOkuYap(HaberPkey) {

    $.ajax({
        type: "POST",
        url: getBaseURL() + "Haber/HaberOkuYap",
        dataType: "json",
        data: { HaberPkey: HaberPkey },
        success: function (result) {
            if (result.durum == "Kaydedildi") {

                var id = "#hbr" + HaberPkey;
                $(id).html('');
                $(id).remove();

                showtoast("info", "Bilgi", "Haberi okuduğunuz için teşekkür ederiz.");
                
                var ichtml = $('#hbrana').html().trim();
                if (ichtml === '')
                {
                    $('#haberpopupmodal').modal('toggle');
                }
     
            }
            if (result.durum != "Kaydedildi") {
                showtoast("error", "Hata", result.hatastr);
            }

        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        },
    });
}



function HaberGosterYapPopUp(tModulPkey) {
    $.ajax({
        type: "POST",
        url: getBaseURL() + "Haber/HaberGosterYapPopUp",
        dataType: "json",
        data: { TModulPkey: tModulPkey },
        success: function (result) {
            if (result != "") {

                $('#haberpopupmodal').modal({ backdrop: 'static', keyboard: false }, 'show');
                $("#haberpopupyazi").html(result);
            }
        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        },
    });
}


