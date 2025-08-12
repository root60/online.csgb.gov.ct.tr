var scriptload;

//DİNAMİK RAPOR İÇİN GEREKLİ OLAN CORE FONKSİYONLAR
function AraBirimOlustur(arabirimholderid, raporpkey) {

    var veriler = { raporpkey: raporpkey };

    $.ajax({
        type: "POST",
        url: getBaseURL() +"dinamikraporservis/arabirimolustur",
        dataType: "json",
        async: false,
        data: veriler,
        success: function (result) {
            $(arabirimholderid).html(result);
        },
        error: function (request, status, error) {
            alert('Dinamik rapor için arabirim oluşturamıyorum:' + request.responseText);
        }
    });
}


function AraBirimBaslikOlustur(arabirimraporadid, arabirimraporaciklamaid, raporpkey) {

    var veriler = { raporpkey: raporpkey };

    $.ajax({
        type: "POST",
        url: getBaseURL() +"dinamikraporservis/bultek",
        dataType: "json",
        async: false,
        data: veriler,
        success: function (result) {
            $(arabirimraporadid).html(result.Raporad);
            $(arabirimraporaciklamaid).html(result.Aciklama);
        },
        error: function (request, status, error) {
            alert('Dinamik rapor için başlık oluşturamıyorum:' + request.responseText);
        }
    });
}


function RaporPkeyKaydet(raporpkey) {

    var veriler = { raporpkey: raporpkey };

    $.ajax({
        type: "POST",
        url: getBaseURL() +"dinamikraporservis/RaporPkeyKaydet",
        dataType: "json",
        async: false,
        data: veriler,
        success: function (result) {
        },
        error: function (request, status, error) {
            alert('Rapor anahtarını kaydedemiyorum:' + request.responseText);
        }
    });
}


function calistir(raporpkey, portletid, arabirimholder, arabirimraporad, arabirimraporaciklama) {

    JavaScriptDosyaYaratVeGom(raporpkey);
    RaporPkeyKaydet(raporpkey);
    var arabirimholderid = '#' + arabirimholder;
    var arabirimraporadid = '#' + arabirimraporad;
    var arabirimraporaciklamaid = '#' + arabirimraporaciklama;

    var veriler = { raporpkey: raporpkey };

    $.ajax({
        type: "POST",
        url: getBaseURL() +"dinamikraporservis/BulTekRapor",
        dataType: "json",
        async: false,
        data: veriler,
        success: function (result) {
            if (result.Arabirimolsunmu == "Evet") {
                AraBirimBaslikOlustur(arabirimraporadid, arabirimraporaciklamaid, raporpkey);
                AraBirimOlustur(arabirimholderid, raporpkey);
                $('#' + portletid).modal('show');
            }
            if (result.Arabirimolsunmu == "Hayır") {
                var link;
                link = getBaseURL() + "DinamikRaporGoster/Index?raporpkey=" + raporpkey;
                window.location.href = link;
            }
        },
        error: function (request, status, error) {
            alert('Raporu çalıştıramıyorum:' + request.responseText);
        }
    });
}


function GrafikBilgiBul(raporpkey, callback) {

    var veriler = { raporpkey: raporpkey };

    $.ajax({
        type: "POST",
        url: getBaseURL() +"dinamikraporgrafik/bultek",
        dataType: "json",
        data: veriler,
        success: function (result) {
            if (typeof (callback) === 'function') {
                callback(result);
            }
        },
        error: function (request, status, error) {
            alert('Dinamik rapor grafik bilgilerini alamıyorum:' + request.responseText);
        }
    });
}



function JavaScriptDosyaYaratVeGom(raporpkey) {

    var veriler = { raporpkey: raporpkey };

    $.ajax({
        type: "POST",
        url: getBaseURL() +"dinamikraporservis/JavaScriptDosyaYaratVeGom",
        dataType: "json",
        async: false,
        data: veriler,
        success: function (result) {
            if (result.etkilenen == 1) {
                if (scriptload != 1) {
                    $.getScript(result.durum)
                        .done(function (script, textStatus) {
                            console.log(textStatus);
                            scriptload = 1;
                        })
                        .fail(function (jqxhr, settings, exception) {
                            //alert("Sınırlandırma Javascript'i yükleyemedim.")
                        });
                }
            }
        },
        error: function (request, status, error) {
            //alert('Sınırlandırma Javascript yükleyemedim:' + request.responseText);
        }
    });
}




function ikitariharasigunfark(tarih1, tarih2, callback) {

    var veriler = { tarih1: tarih1, tarih2: tarih2 };

    $.ajax({
        type: "POST",
        url: getBaseURL() + "dinamikraporservis/ikitariharasigunfark",
        dataType: "json",
        async: false,
        data: veriler,
        success: function (result) {
            if (typeof (callback) === 'function') {
                callback(result);
            }
        },
        error: function (request, status, error) {
            alert('İki tarih arasındaki gün farkını hesaplayamadım.:' + request.responseText);
        }
    });
}

//ÇALIŞTIR DÜĞMESİNE BASTIĞINDA OLACAKLAR
function calistir_listeden(raporpkey) {

    if (raporpkey != "0") {

        var arabirimholderid = "arabirimholder";
        var arabirimraporadid = 'arabirimraporad';
        var arabirimraporaciklamaid = 'arabirimraporaciklama';

        calistir(raporpkey, "portlet-config", arabirimholderid, arabirimraporadid, arabirimraporaciklamaid);
    }
}










