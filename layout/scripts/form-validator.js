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
            restaurant_name: {
                validators: {
                        stringLength: {
                        min: 2
                    },
                        notEmpty: {
                        message: 'Please give your restaurant name'
                    }
                }
            },
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
                    regexp: {
                        regexp: /https:\/\/www\.facebook\.com/,
                        message: 'This doesn\'t look like a facebook URL. Please follow <a href="how-to-use.html">how to use</a>.'
                    },
                    notEmpty: {
                        message: 'Please enter your Facebook photo or page url'
                    }
                }
            },
            zomato_url: {
                validators: {
                    regexp: {
                        regexp: /https:\/\/www\.zomato\.com/,
                        message: 'This doesn\'t look like a facebook URL. Please follow <a href="how-to-use.html">how to use</a>.'
                    },
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

//Cost by package for FACEBOOK
$('#package').on('change', function(e) {
    switch ($('#package').val()) {
        case '10 Facebook Likes':
            $("#number_of_likes").text('10');
            $("#no_of_days").text('1 Day');
            $("#cost").text('₹0');
            break;
        case '50 Facebook Likes':
            $("#number_of_likes").text('50');
            $("#no_of_days").text('1-2 Days');
            $("#cost").text('₹49');
            break;
        case '100 Facebook Likes':
            $("#number_of_likes").text('100');
            $("#no_of_days").text('2-3 Days');
            $("#cost").text('₹89');
            break;
        case '500 Facebook Likes':
            $("#number_of_likes").text('500');
            $("#no_of_days").text('3-4 Days');
            $("#cost").text('₹399');
            break;
        case '1000 Facebook Likes':
            $("#number_of_likes").text('1000');
            $("#no_of_days").text('4-5 Days');
            $("#cost").text('₹799');
            break;
        case '2500 Facebook Likes':
            $("#number_of_likes").text('2500');
            $("#no_of_days").text('5-7 Day');
            $("#cost").text('₹1999');
            break;
    }   
});

//Cost by package for ZOMATO
$('#zomato_package').on('change', function(e) {
    switch ($('#zomato_package').val()) {
        case '10 Reviews':
            $("#number_of_reviews").text('10');
            $("#no_of_days").text('5 Day');
            $("#cost").text('₹0');
            break;
        case '50 Reviews':
            $("#number_of_reviews").text('50');
            $("#no_of_days").text('20 Days');
            $("#cost").text('₹49');
            break;
        case '100 Reviews':
            $("#number_of_reviews").text('100');
            $("#no_of_days").text('~45 Days');
            $("#cost").text('₹89');
            break;
        case '150 Reviews':
            $("#number_of_reviews").text('150');
            $("#no_of_days").text('~70 Days');
            $("#cost").text('₹399');
            break;
        case '200 Reviews':
            $("#number_of_reviews").text('200');
            $("#no_of_days").text('~100 Days');
            $("#cost").text('₹799');
            break;
        case '300 Reviews':
            $("#number_of_reviews").text('300');
            $("#no_of_days").text('~125 Day');
            $("#cost").text('₹1999');
            break;
    }   
});

// Order form submit.
$('#order_button').on('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var id = null;
    var free = false;
    var attr = $("#order_form").serializeArray();
    var error = false;
    $.each(attr, function (index, value) {
        if ( !value.value ) {
            console.log('Some values missing');
            error = true;
        }
    });

    if ( attr['0'].name == "restaurant_name" ) {

        switch (attr['3'].value) {
            case '10 Reviews':
                free = true;
                break;
            case '50 Reviews':
                id = 'EC592AA3FE037AB8871395DE5D5C2C2A';
                break;
            case '100 Reviews':
                id = '3ED29F94A41F794DC2D41DB8DD797508';
                break;
            case '150 Reviews':
                id = '17D2AFA5005E612F0ABE90BF20A3C40E';
                break;
            case '200 Reviews':
                id = 'A56E36BBFE82AF036B758A81C4DEBB5A';
                break;
            case '300 Reviews':
                id = '310641';
                break;
        }

    } else {
        switch (attr['5'].value) {
            case '10 Facebook Likes':
                free = true;
                break;
            case '50 Facebook Likes':
                id = '309113';
                break;
            case '100 Facebook Likes':
                id = 'FC0287F0B9332821B296978DEDDCCBB2';
                break;
            case '500 Facebook Likes':
                id = 'DD669E225E4008CAF4AF0915E610A4BB';
                break;
            case '1000 Facebook Likes':
                id = '3A5AD586428B79EDF3AB3231D42C9E97';
                break;
            case '2500 Facebook Likes':
                id = '1C907F79C644EBA57FFBE18A020636F0';
                break;
        }   
    }

    if (!error) {
        $.ajax({
            type: "POST",
            url: 'http://sujokodisha.com/Likes-Bazaar/order.php',
            data: $("#order_form").serialize(), // serializes the form's elements.
            success: function(data)
            {
                console.log(data);
                if (data == 'OK') {
                    if (free) {
                        $('#success_message').show();
                        $('#failure_message').hide();    
                    } else {
                        window.location = 'https://www.payumoney.com/paybypayumoney/#/' + id;
                    }
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