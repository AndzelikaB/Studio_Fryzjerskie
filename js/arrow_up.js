$(document).ready(function () {

    $(document).scroll(function () {
        var position = $(this).scrollTop();
        if (position > 500) {
            $("#upp").show();
        }
        else {
            $("#upp").hide();
        }
    });

    $("#upp").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});