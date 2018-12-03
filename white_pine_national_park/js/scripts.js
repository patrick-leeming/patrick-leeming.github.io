$(document).ready(function(){
    $(".every").click(function () {
        $("#notShow1").removeClass("d-nne");
        $("#notShow2").removeClass("d-nne");
    });
    $("#not_repeating").click(function () {
        $("#notShow1").addClass("d-nne");
        $("#notShow2").addClass("d-nne");
    });
    $("#shw").click(function(){
        $(".collapse2").collapse('show');
    });
    $("#hde").click(function(){
        $(".collapse2").collapse('hide');
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
