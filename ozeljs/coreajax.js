function KontrolNull(ninputs, hmesajlari) {

    var hata = "0";

    for (index = 0; index < ninputs.length; ++index) {
        if (IsEmpty(ninputs[index]) == false) {
            hata = "1";
            showtoast("error", "HATA", hmesajlari[index]);
            pulsate("#" + ninputs[index], "#ff0000");
        }
    }
    return hata;

}


function IsEmpty(id) {

    var idx = "#" + id;
    var v = $(idx).val();
    if (v == null || v == "") {
        return false;
    }
    return true;
}