
jQuery(document).ready(function () {

    $('#CalisanDogumTarih').mask("99.99.9999", { placeholder: "." });

    $('#DosyaNo').keypress(function (event) {
        corenumericyap(event, "#DosyaNo");
    });

});

