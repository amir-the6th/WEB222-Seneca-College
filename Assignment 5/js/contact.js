
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input3').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() !== "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });   
    });
            

    /*==================================================================
    [ Radio Buttons ]*/
    $("#radio1").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
        }
    });

    $("#radio3").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
        }
    });

    $("#radio2").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
        }
    });
        
  
    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');
    var postal = $('.validate-input input[name="postal-code"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() === ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() === ''){
            showValidate(message);
            check=false;
        }

        if($(postal).val().trim().match(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/) === null) {
            showValidate(postal);
            check=false;
        }

        return check;
    });


    $('.validate-form .input3').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    //

    // var input = $('.validate-input .input100');

    // $('.validate-form').on('submit',function(){
    //     var check = true;

    //     for(var i=0; i<input.length; i++) {
    //         if(validate(input[i]) === false){
    //             showValidate(input[i]);
    //             check=false;
    //         }
    //     }

    //     return check;
    // });


    // $('.validate-form .input100').each(function(){
    //     $(this).focus(function(){
    //        hideValidate(this);
    //     });
    // });

    // function validate (input) {
    //     if($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
    //         if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
    //             return false;
    //         }
    //     }
    //     else {
    //         if($(input).val().trim() === ''){
    //             return false;
    //         }
    //     }
    // }

    // function showValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).addClass('alert-validate');
    // }

    // function hideValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).removeClass('alert-validate');
    // }
    

})(jQuery);