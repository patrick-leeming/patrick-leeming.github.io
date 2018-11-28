$(document).ready(function() {

    $(".toggle-accordion").on("click", function() {
        var accordionId = $(this).attr("accordion-id"),
            numPanelOpen = $(accordionId + ' .collapse.in').length;

        $(this).toggleClass("active");

        if (numPanelOpen == 0) {
            openAllPanels(accordionId);
        } else {
            closeAllPanels(accordionId);
        }
    })

    openAllPanels = function(aId) {
        console.log("setAllPanelOpen");
        $(aId + ' .panel-collapse:not(".in")').collapse('show');
    }
    closeAllPanels = function(aId) {
        console.log("setAllPanelclose");
        $(aId + ' .panel-collapse.in').collapse('hide');
    }

});
function myFunction(){
        $("#toggle1").addClass("blu");
        }
function myFunction2() {
    $("#toggle1").removeClass("blu");
}
function myFunction3() {
    $("#toggle2").addClass("blu");
}
function myFunction4() {
    $("#toggle2").removeClass("blu");
}
