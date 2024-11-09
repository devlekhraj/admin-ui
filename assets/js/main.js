// ========== LEFT SIDEBAR JS ======= //
$(document).on('click','#sidebar li',function(e) {
    e.preventDefault(0);
    $(this).addClass('active').siblings().removeClass('active');
})

$(".sub-menu ul").hide();
$(".sub-menu a").click(function() {
    // Close all other submenus except the current one
    $(".sub-menu ul").not($(this).siblings("ul")).slideUp("100");
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