$(document).ready(function() {

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    email = getUrlParameter('email');
    token = getUrlParameter('token');
    payu  = getUrlParameter('payu');

    if (payu == 'success') {
        $('#success_message').show();
        $('#failure_message').hide();
    } else if (payu == 'failure') {
        $('#failure_message').show();
        $('#success_message').hide();
    } else if ( email && token) {
            $.ajax({
                type: "POST",
                url: 'http://sujokodisha.com/Likes-Bazaar/verify.php',
                data: { email: email , token: token }, 
                success: function(data)
                {
                    console.log( data);
                    if (data !== 'invalid') {
                        $('#success_message').show();
                        $('#failure_message').hide();
                    } else {
                        $('#failure_message').show();
                        $('#success_message').hide();
                    }
                }
            });
    }    
});
