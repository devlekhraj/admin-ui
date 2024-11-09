// ========== LEFT SIDEBAR JS ======= //
$(document).on('click','#sidebar li a',function(e) {
    e.preventDefault(0);
    $(document).find("#sidebar li a").removeClass('active-sidenav');
    $(this).addClass('active-sidenav');
})

$(".sub-menu ul").hide();
$(".sub-menu a").click(function() {
    $(".sub-menu a").not(this).find(".right").removeClass("fa-caret-up").addClass("fa-caret-down");
    // Toggle the current submenu
    $(this).siblings("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

// =============== SIDEBAR TOGGLE ==========//

$(document).ready(function() {
    $("#toggleBar").click(function() {
        $(".left-menu").toggleClass('hide');
        $(".content-wrapper").toggleClass('hide');
    })
})

$(document).ready( function () {
    $('#myTable').DataTable();
    
} );