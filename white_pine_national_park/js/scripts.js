$(document).ready(function(){
    $("#every").click(function() {
        $("#notShow1").removeClass("d-nne");
        $("#notShow2").removeClass("d-nne");
        $("#notShow3").removeClass("d-nne");
        $("#notShow4").removeClass("d-nne");
        $("#notShow5").removeClass("d-nne");
    });
    $("#not_repeating").click(function() {
        $("#notShow1").addClass("d-nne");
        $("#notShow2").addClass("d-nne");
        $("#notShow3").addClass("d-nne");
        $("#notShow4").addClass("d-nne");
        $("#notShow5").addClass("d-nne");
    });
    $("#other").click(function() {
        $("#price").removeClass("d-nne");
    });
    $(".dsply").click(function(){
        $("#price").addClass("d-nne");
    });
    $("#shw").click(function() {
        $(".collapse2").collapse('show');
    });
    $("#hde").click(function(){
        $(".collapse2").collapse('hide');
    });
    $('.carousel').carousel({
        interval: 1000 * 35
    });
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
