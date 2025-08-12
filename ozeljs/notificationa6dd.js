$(document).ready(function () {
    var connection = new signalR.HubConnectionBuilder().withUrl("/notificationHub").build();

    connection.on("ReceiveNotification", function (message) {

        swal({
            title: "Dikkat!",
            html: message,
            type: 'info',
            confirmButtonText: "<span><i class='la la-check'></i><span> Tamam</span></span>",
            confirmButtonClass: "btn btn-success m-btn m-btn--pill m-btn--air m-btn--icon",
            showCancelButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false
        });

    });

    connection.start().catch(function (err) {
        console.error(err.toString());
    });

});

