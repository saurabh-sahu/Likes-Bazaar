  $(document).ready(function() {
// Order form validations.
    $('#order_form').bootstrapValidator({
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
                    }
                }
            }
        },
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();    
        });

// Contact Us form validations.
        $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your name'
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
                    }
                }
            },
            comment: {
                validators: {
                        stringLength: {
                        min: 20,
                        message: 'Min 20 chars required.'
                    },
                        notEmpty: {
                        message: 'Please leave a comment.'
                    }
                }
            }
        },
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();    
        });

});

// Order form submit.
$('#order_form').on('submit', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    var attr = $("#order_form").serializeArray();
    var error = false;
    $.each(attr, function (index, value) {
        if ( !value.value ) {
            console.log('Some values missing');
            error = true;
        }
    });
    if (!error) {
        $.ajax({
            type: "POST",
            url: 'http://sujokodisha.com/Likes-Bazaar/order.php',
            data: $("#order_form").serialize(), // serializes the form's elements.
            success: function(data)
            {
                console.log(data);
                if (data == 'OK') {
                    $('#success_message').show();
                    $('#failure_message').hide();
                    $('#order_button').hide();
                } else {
                    $('#failure_message').show();
                    $('#success_message').hide();
                }
            }
        });
    }    
    return false;
});

// Contact form submit.
$('#contact_form').on('submit', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    var attr = $("#contact_form").serializeArray();
    var error = false;
    $.each(attr, function (index, value) {
        if ( !value.value ) {
            console.log('Some values missing');
            error = true;
        }
    });
    
    if (!error) {
        $.ajax({
            type: "POST",
            url: 'http://sujokodisha.com/Likes-Bazaar/contact-us.php',
            data: $("#contact_form").serialize(), 
            success: function(data)
            {
                console.log(data);
                if (data == 'OK') {
                    $('#success_message').show();
                    $('#failure_message').hide();
                    $('#send_button').hide();
                } else {
                    $('#failure_message').show();
                    $('#success_message').hide();
                }
            }
        });
    }    
    return false;

});