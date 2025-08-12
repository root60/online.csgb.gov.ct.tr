jQuery(document).ready(function () {

    $('#secbutton').click(function (event) {

        var selectedValue = $('input[name="SecilenDeger"]:checked').val();

        if (!selectedValue) {

            var idx = "#SecilenDeger";
            pulsate(idx, "#ff0000");

            event.preventDefault();
            showtoast("error", "Hata", "Seçim yapmadınız.");
        }

    });

});




