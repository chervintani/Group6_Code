$(document).ready(function () {
    
  

    $('#logout').click(function(){
        location.href="http://localhost:8080"
    })

    $('#alert').hide();
    $('#alert2').hide();

    //C# SHOW MANUAL BUTTON 
    $('#showManual1').click(function () {
        $('#manual1').toggle();
    });

    //C# MANUAL BUTTON ONCLICK
    $('#manualC').click(function(){
        $(this).attr("disabled", "disabled")
        setTimeout(function() {
            $("#manualC").removeAttr("disabled");      
        }, 3000);
    })
    
    //SEED MANUAL BUTTON ONCLICK
    $('#manualSeed').click(function(){
        $(this).attr("disabled", "disabled")
        setTimeout(function() {
            $("#manualSeed").removeAttr("disabled");      
        }, 3000);
    })

    $('#showManual2').click(function () {
        $('#manual2').toggle();
    });

    $('#showManual3').click(function () {
        $('#manual3').toggle();
    });

    $('#showManual4').click(function () {
        $('#manual4').toggle();
    });

    $('#showManual5').click(function () {
        $('#manual5').toggle();
    });

    $('#showManual6').click(function () {
        $('#manual6').toggle();
    });

    $('#showManual7').click(function () {
        $('#manual7').toggle();
    });

    $('#showManual8').click(function () {
        $('#manual8').toggle();
    });

    $('#showManual9').click(function () {
        $('#manual9').toggle();
    });

    $('#showManual10').click(function () {
        $('#manual10').toggle();
    });

    $('#showManual11').click(function () {
        $('#manual11').toggle();
    });

    $('#showManual12').click(function () {
        $('#manual12').toggle();
    });
    $('#showManual13').click(function () {
        $('#manual13').toggle();
    });

    $('#showManual14').click(function () {
        $('#manual14').toggle();
    });

    $('#showManual15').click(function () {
        $('#manual15').toggle();
    });

    $('#showManual16').click(function () {
        $('#manual16').toggle();
    });

    $('#showManual17').click(function () {
        $('#manual17').toggle();
    });
})