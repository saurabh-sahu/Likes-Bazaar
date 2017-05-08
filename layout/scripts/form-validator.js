  $(document).ready(function() {

    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            package: {
                validators: {
                    notEmpty: {
                        message: 'Please select your package'
                    }
                }
            },
            url: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your Facebook photo or page url'
                    },
                    uri: {
                        message: 'Please enter a valid URL'
                    }
                }
            }
        },
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();    
        });

});

$('#contact_form').on('submit', function(e){

    var attr = $("#contact_form").serializeArray();

    $.each(attr, function (index, value) {
        if ( !value.value ) {
            console.log('returning');
            return false;
        }
    });
    
    $.ajax({
        type: "POST",
        url: 'http://sujokodisha.com/Likes-Bazaar/order.php',
        data: $("#contact_form").serialize(), // serializes the form's elements.
        success: function(data)
        {
           console.log(data); // show response from the php script.
        }
    });
    return false;

});