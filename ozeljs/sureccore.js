function KapatmaSurecleriDoldur(ne, ilgilipkey, id) {

    var veriler = { Ne: ne, IlgiliPkey: ilgilipkey };

    var listeid = "#" + id;
    var drop = $(listeid);

    //hepsini boşalt
    $(listeid + "> option").remove();
    drop.append($("<option></option>").val("0").html("Seçiniz"));
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelKapatma/IlgiliKapatmaSurecleriDoldur",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                drop.append($("<option></option>").val(result[i].Value).html(result[i].Text));
            }
        },
        error: function (request, status, error) {
            alert('Verileri alırken bir sorun oluştu.' + request.responseText);
        }
    });
}


function HavaleSurecleriDoldur(ne, ilgilipkey, id) {

    var veriler = { Ne: ne, IlgiliPkey: ilgilipkey };

    var listeid = "#" + id;
    var drop = $(listeid);

    //hepsini boşalt
    $(listeid + "> option").remove();
    drop.append($("<option></option>").val("0").html("Seçiniz"));
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelHavale/IlgiliHavaleSurecleriDoldur",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                drop.append($("<option></option>").val(result[i].Value).html(result[i].Text));
            }
        },
        error: function (request, status, error) {
            alert('Verileri alırken bir sorun oluştu.' + request.responseText);
        }
    });
}


function SurecleriDoldur(ne,id) {

    var veriler = { Ne: ne };

    var listeid = "#" + id;
    var drop = $(listeid);

    //hepsini boşalt
    $(listeid + "> option").remove();
    drop.append($("<option></option>").val("0").html("Seçiniz"));
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelHavale/IlgiliTumSurecleriDoldur",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                drop.append($("<option></option>").val(result[i].Value).html(result[i].Text));
            }
        },
        error: function (request, status, error) {
            alert('Verileri alırken bir sorun oluştu.' + request.responseText);
        }
    });
}



function IlgiliBirimleriDoldur(surecadimpkey, id) {

    var veriler = { SurecAdimPkey: surecadimpkey };

    var listeid = "#" + id;
    var drop = $(listeid);
    //hepsini boşalt
    $(listeid + "> option").remove();
    drop.append($("<option></option>").val("0").html("Seçiniz"));
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelHavale/IlgiliBirimleriDoldur",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                drop.append($("<option></option>").val(result[i].Value).html(result[i].Text));
            }
        },
        error: function (request, status, error) {
            alert('Verileri alırken bir sorun oluştu.' + request.responseText);
        }
    });
}


function IlgiliBirimleriDoldurKendiKaza(surecadimpkey, id) {

    var veriler = { SurecAdimPkey: surecadimpkey };

    var listeid = "#" + id;
    var drop = $(listeid);

    //hepsini boşalt
    $(listeid + "> option").remove();
    drop.append($("<option></option>").val("0").html("Seçiniz"));
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelHavale/IlgiliBirimleriDoldurKendiKaza",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                drop.append($("<option></option>").val(result[i].Value).html(result[i].Text));
            }
        },
        error: function (request, status, error) {
            alert('Verileri alırken bir sorun oluştu.' + request.responseText);
        }
    });
}



function IlgiliKullanicilariDoldur(surecadimpkey, birimpkey, id,kullanicitip) {

    var veriler = { SurecAdimPkey: surecadimpkey, BirimPkey:birimpkey, KullaniciTip:kullanicitip };

    var listeid = "#" + id;
    var drop = $(listeid);

    //hepsini boşalt
    $(listeid + "> option").remove();
    drop.append($("<option></option>").val("0").html("Seçiniz"));
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelHavale/IlgiliKullanicilariDoldur",
        dataType: "json",
        data: veriler,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                drop.append($("<option></option>").val(result[i].Value).html(result[i].Text));
            }
        },
        error: function (request, status, error) {
            alert('Verileri alırken bir sorun oluştu.' + request.responseText);
        }
    });
}


function GerekliBelgeleriDoldur(ne, ilgilipkey, id) {

    var veriler = { Ne: ne, IlgiliPkey: ilgilipkey };

    var listeid = "#" + id;
    var drop = $(listeid);

    //hepsini boşalt
    $(listeid + "> option").remove();
    drop.append($("<option></option>").val("0").html("Seçiniz"));
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelScanEvrak/GerekliBelgeleriDoldur",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                drop.append($("<option></option>").val(result[i].Value).html(result[i].Text));
            }
        },
        error: function (request, status, error) {
            alert('Verileri alırken bir sorun oluştu.' + request.responseText);
        }
    });
}



function SurecAdimiIcinGerekliBelgeleriDoldur(surecadimpkey,id) {

    var veriler = { SurecAdimPkey: surecadimpkey};

    var listeid = "#" + id;
    var drop = $(listeid);

    //hepsini boşalt
    $(listeid + "> option").remove();
    drop.append($("<option></option>").val("0").html("Seçiniz"));
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelScanEvrak/SurecAdimiIcinGerekliBelgeleriDoldur",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                drop.append($("<option></option>").val(result[i].Value).html(result[i].Text));
            }
        },
        error: function (request, status, error) {
            alert('Verileri alırken bir sorun oluştu.' + request.responseText);
        }
    });
}


function GorselliSurec(ne, ilgilipkey) {

    $("#gorsellisurecmodal").modal('show');

    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/Basvuru/GorselliSurec",
        dataType: "json",
        data: { Ne: ne, IlgiliPkey:ilgilipkey },
        success: function (result) {
            $("#gorsellisurecsonuc").html(result);

        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });
}

function GorselliSurecVatandas(ne, ilgilipkey) {

    $("#gorsellisurecmodal").modal('show');

    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/Basvuru/GorselliSurecVatandas",
        dataType: "json",
        data: { Ne: ne, IlgiliPkey: ilgilipkey },
        success: function (result) {
            $("#gorsellisurecsonuc").html(result);

        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });
}




function ScanEvrakIcinSiraNoBul(ne, ilgilipkey, id) {

    var veriler = { Ne: ne, IlgiliPkey: ilgilipkey };
    var id = "#" + id;

    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/GenelScanEvrak/SiraNoBul",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            $(id).val(result);
        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });

}

function WizardNavYap(basvurutippkey) {

    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/Surec/WizardNavYapBasvuruTipPkey",
        dataType: "json",
        data: { BasvuruTipPkey: basvurutippkey },
        success: function (result) {
            $("#wizardnav").html(result);
        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });
}

function IleriValidation(ControllerName,BasvuruAnaPkey) {

    var veriler = { BasvuruAnaPkey: BasvuruAnaPkey };
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/" + ControllerName +"/IleriValidation",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            if (result.validmi == "Evet" && result.inputid !="") {
                window.location.href = result.hatastr;
            }
            if (result.validmi == "Evet" && result.inputid == "Kurum") {
                window.location.href = getBaseURL() + "CIP/BasvuruTesekkur/Index?BasvuruAnaPkey=" + BasvuruAnaPkey;
            }
            if (result.validmi == "Hayır") {
                pulsate("#BasvuruTipPkey", "#ff0000");
                showtoast("error", "Hata", result.hatastr);
            }
        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });
}

function GeriValidation(ControllerName,BasvuruAnaPkey) {

    var veriler = { BasvuruAnaPkey: BasvuruAnaPkey };
    $.ajax({
        type: "POST",
        url: getBaseURL() + "CIP/" + ControllerName +"/GeriValidation",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            if (result.validmi == "Evet") {
                showtoast("success", "Başarılı", "İşlem başarılı.");
                window.location.href = result.hatastr;
            }
            if (result.validmi == "Hayır") {
                pulsate("#BasvuruTipPkey", "#ff0000");
                showtoast("error", "Hata", result.hatastr);
            }
        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });
}


function IleriValidationWithArea(ControllerName, BasvuruAnaPkey, Area) {

    var veriler = { BasvuruAnaPkey: BasvuruAnaPkey };
    $.ajax({
        type: "POST",
        url: getBaseURL() + Area+ "/" + ControllerName + "/IleriValidation",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            if (result.validmi == "Evet" && result.inputid != "") {
                window.location.href = result.hatastr;
            }
            if (result.validmi == "Evet" && result.inputid == "Kurum") {
                window.location.href = getBaseURL() + "CIP/BasvuruTesekkur/Index?BasvuruAnaPkey=" + BasvuruAnaPkey;
            }
            if (result.validmi == "Hayır") {
                pulsate("#BasvuruTipPkey", "#ff0000");
                showtoast("error", "Hata", result.hatastr);
            }
        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });
}

function GeriValidationWithArea(ControllerName, BasvuruAnaPkey, Area) {

    var veriler = { BasvuruAnaPkey: BasvuruAnaPkey };
    $.ajax({
        type: "POST",
        url: getBaseURL() + Area +"/" + ControllerName + "/GeriValidation",
        dataType: "json",
        data: veriler,
        async: false,
        success: function (result) {
            if (result.validmi == "Evet") {
                showtoast("success", "Başarılı", "İşlem başarılı.");
                window.location.href = result.hatastr;
            }
            if (result.validmi == "Hayır") {
                pulsate("#BasvuruTipPkey", "#ff0000");
                showtoast("error", "Hata", result.hatastr);
            }
        },
        error: function (request, status, error) {
            showtoast("error", "Hata", request.responseText);
        }
    });
}




