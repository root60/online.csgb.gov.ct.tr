jQuery(document).ready(function () {

    //google chrome un otomatik datetime 'ını disable etmek için.
    $('input[type="datetime-local"]').attr('type', 'text');


    //enter tuşunu her yerde iptal ediyoruz.
    $(window).keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

});

function fancyopen(src) {
    $.fancybox.open({
        src: getBaseURL() + src,
        type: 'iframe'
    });
}

function getfancy() {

    $("#iframe").fancybox({
        'autoDimensions': false,
        'width': '100%',
        'height': '100%',
        'autoScale': true,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'hideOnOverlayClick': false,
        'hideOnContentClick': false,
        'title': 'Bilgi Ekranı'
    });

}

function getfancyCan() {

    $("#canicin").fancybox({
        'autoDimensions': false,
        'width': '100%',
        'height': '100%',
        'autoScale': true,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'hideOnOverlayClick': false,
        'hideOnContentClick': false,
        'title': 'Bilgi Ekranı'
    });

}

function TarihDogrumu(tarih,callback) {

    $.ajax({
        type: "POST",
        url: getBaseURL() + 'AjaxValidation/TarihDogrumu',
        dataType: "json",
        data: { tarih: tarih },
        async:false,
        success: function (result) {
            if (typeof (callback) === 'function') {
                callback(result);
            }
        },
        error: function (request, status, error) {
            alert('Tarih bilgisinin doğru olup olmadığını kontrol ederken bir sorun oluştu:' + request.responseText);
        }
    });
}





function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}


function temizle_list(id) {
    $('#' + id).empty();
}

function formatJSONDate(jsonDate) {
    var newDate = dateFormat(jsonDate, "dd.mm.yyyy"); return newDate;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function parseLocalNum(num) {
    return num.replace(",", ".");
}

function tersparseLocalNum(num) {
    return num.replace(".", ",");
}


function corenumericyap(event, idx) {
    if (event.which != 0) {
        // nokta koyarsa engelle
        if (event.which == 46 || event.which == 58 || event.which == 59) {
            event.preventDefault();
        }
        if ((event.which < 46 || event.which > 59) && event.which != 8) {
            event.preventDefault();
        } // prevent if not number
    }
}

function numericyap(event, idx) {
    if (event.which != 0) {
        // nokta koyarsa engelle
        if (event.which == 46 || event.which == 58 || event.which == 59) {
            event.preventDefault();
        }
        if ((event.which < 46 || event.which > 59) && event.which != 8 && event.which != 44) {
            event.preventDefault();
        } // prevent if not number/comma
    }
    if (event.which == 44 && $(idx).val().indexOf(',') != -1) {
        event.preventDefault();
    } // prevent if already comma
}


function slideryap(id, inputluid, deger) {

    // slider yanlış şifre
    var slider = document.getElementById(id);
    var sliderInput = document.getElementById(inputluid);

    if (deger === undefined || deger == null) {
        deger = 0;
    }

    noUiSlider.create(slider, {
        start: deger,
        step: 1,
        range: {
            'min': [0],
            'max': [10]
        },
        format: wNumb({
            decimals: 0
        })
    });

    slider.noUiSlider.on('update', function (values, handle) {
        sliderInput.value = values[handle];
    });
    sliderInput.addEventListener('change', function () {
        slider.noUiSlider.set(this.value);
    });

    return slider;

}




function datetimesecyap(id) {

    var arrows;
    if (mUtil.isRTL()) {
        arrows = {
            leftArrow: '<i class="la la-angle-right"></i>',
            rightArrow: '<i class="la la-angle-left"></i>'
        }
    } else {
        arrows = {
            leftArrow: '<i class="la la-angle-left"></i>',
            rightArrow: '<i class="la la-angle-right"></i>'
        }
    }

    $('#' + id).datetimepicker({
        rtl: mUtil.isRTL(),
        todayHighlight: true,
        orientation: "bottom left",
        templates: arrows,
        language: 'tr',
        autoclose: true
    });

}


function datetimesecyapEng(id) {

    var arrows;
    if (mUtil.isRTL()) {
        arrows = {
            leftArrow: '<i class="la la-angle-right"></i>',
            rightArrow: '<i class="la la-angle-left"></i>'
        }
    } else {
        arrows = {
            leftArrow: '<i class="la la-angle-left"></i>',
            rightArrow: '<i class="la la-angle-right"></i>'
        }
    }

    $('#' + id).datetimepicker({
        rtl: mUtil.isRTL(),
        todayHighlight: true,
        orientation: "bottom left",
        templates: arrows,
        format: "mm/dd/yyyy hh:ii:ss",
        language: 'en',
        autoclose: true
    });

}


function datesecyapEng(id) {

    var arrows;
    if (mUtil.isRTL()) {
        arrows = {
            leftArrow: '<i class="la la-angle-right"></i>',
            rightArrow: '<i class="la la-angle-left"></i>'
        }
    } else {
        arrows = {
            leftArrow: '<i class="la la-angle-left"></i>',
            rightArrow: '<i class="la la-angle-right"></i>'
        }
    }

    $('#' + id).datepicker({
        rtl: mUtil.isRTL(),
        todayHighlight: true,
        orientation: "bottom left",
        templates: arrows,
        format: "mm/dd/yyyy",
        language: 'en',
        autoclose: true
    });

}



function datesecyap(id) {


    var arrows;
    if (mUtil.isRTL()) {
        arrows = {
            leftArrow: '<i class="la la-angle-right"></i>',
            rightArrow: '<i class="la la-angle-left"></i>'
        }
    } else {
        arrows = {
            leftArrow: '<i class="la la-angle-left"></i>',
            rightArrow: '<i class="la la-angle-right"></i>'
        }
    }

    $('#' + id).datepicker({
        rtl: mUtil.isRTL(),
        todayHighlight: true,
        orientation: "bottom left",
        templates: arrows,
        language: 'tr',
        autoclose: true
    });


}

function setSliderValue(id, inputluid, deger) {

    slider=slideryap(id, inputluid);
    slider.noUiSlider.set(deger);

}


function pulsate(id, colorx) {
    $(id).pulsate({
        color: colorx,
        reach: 60,
        repeat: 10,
        speed: 50,
        glow: true
    });
}




//success info warning error
function showtoast(tip, title, msg) {

    var toastCount = 0;
    var shortCutFunction = tip;
    var $showDuration = 100;
    var $hideDuration = 100;
    var $timeOut = 6000;
    var $extendedTimeOut = 500;
    var $showEasing = 'swing';
    var $hideEasing = 'linear';
    var $showMethod = 'fadeIn';
    var $hideMethod = 'fadeOut';
    var $progressBar = true;
    var toastIndex = toastCount++;

    toastr.options = {
        closeButton: 1,
        debug: $('#debugInfo').prop('checked'),
        positionClass: 'toast-top-center',
        onclick: null
    };

    if ($('#addBehaviorOnToastClick').prop('checked')) {
        toastr.options.onclick = function () {
            alert('You can perform some custom action after a toast goes away');
        };
    }

    //if ($showDuration.val().length) {
    toastr.options.showDuration = $showDuration;
    //}

    //if ($hideDuration.val().length) {
    toastr.options.hideDuration = $hideDuration;
    //}

    //if ($timeOut.val().length) {
    toastr.options.timeOut = $timeOut;
    //}

    //if ($extendedTimeOut.val().length) {
    toastr.options.extendedTimeOut = $extendedTimeOut;
    //}

    //if ($showEasing.val().length) {
    toastr.options.showEasing = $showEasing;
    //}

    //if ($hideEasing.val().length) {
    toastr.options.hideEasing = $hideEasing;
    //}

    //if ($showMethod.val().length) {
    toastr.options.showMethod = $showMethod;
    //}

    //if ($hideMethod.val().length) {
    toastr.options.hideMethod = $hideMethod;
    //}

    toastr.options.progressBar = true;


    $("#toastrOptions").text("Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2));

    var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    $toastlast = $toast;
    if ($toast.find('#okBtn').length) {
        $toast.delegate('#okBtn', 'click', function () {
            alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
            $toast.remove();
        });
    }
    if ($toast.find('#surpriseBtn').length) {
        $toast.delegate('#surpriseBtn', 'click', function () {
            alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
        });
    }

    $('#clearlasttoast').click(function () {
        toastr.clear($toastlast);
    });

}



function showtoastsureli(tip, title, msg,sure) {

    var toastCount = 0;
    var shortCutFunction = tip;
    var $showDuration = sure;
    var $hideDuration = 100;
    var $timeOut = sure;
    var $extendedTimeOut = 500;
    var $showEasing = 'swing';
    var $hideEasing = 'linear';
    var $showMethod = 'fadeIn';
    var $hideMethod = 'fadeOut';
    var $progressBar = true;
    var toastIndex = toastCount++;

    toastr.options = {
        closeButton: 1,
        debug: $('#debugInfo').prop('checked'),
        positionClass: 'toast-top-center',
        onclick: null
    };

    if ($('#addBehaviorOnToastClick').prop('checked')) {
        toastr.options.onclick = function () {
            alert('You can perform some custom action after a toast goes away');
        };
    }

    //if ($showDuration.val().length) {
    toastr.options.showDuration = $showDuration;
    //}

    //if ($hideDuration.val().length) {
    toastr.options.hideDuration = $hideDuration;
    //}

    //if ($timeOut.val().length) {
    toastr.options.timeOut = $timeOut;
    //}

    //if ($extendedTimeOut.val().length) {
    toastr.options.extendedTimeOut = $extendedTimeOut;
    //}

    //if ($showEasing.val().length) {
    toastr.options.showEasing = $showEasing;
    //}

    //if ($hideEasing.val().length) {
    toastr.options.hideEasing = $hideEasing;
    //}

    //if ($showMethod.val().length) {
    toastr.options.showMethod = $showMethod;
    //}

    //if ($hideMethod.val().length) {
    toastr.options.hideMethod = $hideMethod;
    //}

    toastr.options.progressBar = true;


    $("#toastrOptions").text("Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2));

    var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    $toastlast = $toast;
    if ($toast.find('#okBtn').length) {
        $toast.delegate('#okBtn', 'click', function () {
            alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
            $toast.remove();
        });
    }
    if ($toast.find('#surpriseBtn').length) {
        $toast.delegate('#surpriseBtn', 'click', function () {
            alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
        });
    }

    $('#clearlasttoast').click(function () {
        toastr.clear($toastlast);
    });

}



$('#cleartoasts').click(function () {
    toastr.clear();
});



function getBaseURL() {
    var url = location.href;  // entire url including querystring - also: window.location.href;
    var baseURL = url.substring(0, url.indexOf('/', 14));


    if (baseURL.indexOf('http://localhost') != -1) {
        // Base Url for localhost
        var url = location.href;  // window.location.href;
        var pathname = location.pathname;  // window.location.pathname;
        var index1 = url.indexOf(pathname);
        var index2 = url.indexOf("/", index1 + 1);
        var baseLocalUrl = url.substr(0, index2);

        return baseLocalUrl + "/";
    }
    else {
        // Root Url for domain name
        return baseURL + "/";
    }

}


function buttonloadyap(id) {

    $(id).addClass('m-loader m-loader--right m-loader--light').attr('disabled', true);

}

function buttonloadbitir(id) {

    $(id).removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);

}


function clear_form_elements(containerid) {

    $(containerid).find(':input').each(function () {
        switch (this.type) {
            case 'password':
            case 'text':
            case 'number':
            case 'textarea':
                $(this).val('');
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
        }
    });
}


function GetControllerNameForArea() {

    var url = window.location.pathname.split("/");
    var controllerNameStr = url[2];
    return controllerNameStr;

}

function GetUrlForArea() {

    var url = window.location.pathname + window.location.search;
    return url;

}

function randomidOlustur(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}








