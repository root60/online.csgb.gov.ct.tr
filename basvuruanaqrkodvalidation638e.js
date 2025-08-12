jQuery(document).ready(function () {


    $('#Pkey').keypress(function (event) {
        corenumericyap(event, "#Pkey");
    });

    $('#BruteForceKey').keypress(function (event) {
        corenumericyap(event, "#BruteForceKey");
    });


    $('#Ne').change(function (e) {
        var ne = $("#Ne").val();

        if (ne == "harc") {
            $("#basvurunoDiv").hide();
        }
        if (ne != "harc") {
            $("#basvurunoDiv").show();
        }
   
    });

    



});
