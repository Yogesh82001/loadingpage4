jQuery(window).load(function() {
    //$(".loader-centered").fadeOut();
    //in production change 5000 to 400
    $(".loader").delay(5000).fadeOut("slow");
    $("#loading-text").addClass('text-success').html('page loaded');
}); 