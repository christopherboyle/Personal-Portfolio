$(document).ready(function () {
    $("#down-arrow").click(function () {
        $('html,body').animate({
            scrollTop: $(".experience-content").offset().top
        }, 'slow');
    });

    $("#up-arrow").click(function () {
        $('html,body').animate({
            scrollTop: $(".main-content").offset().top
        }, 'slow');
    });
});