$(function() {
    Parse.initialize("Eto340s8ayyRdulcBtMJN5sPpfLr63YX7t6xxzAG", "unEzZIYE4MxVPqd0SFR7XOAGqmeo32ubwWQH46Nb");
});

//
//
//  Login Button
//
//

$('#loginBtn').on('click', function() {
    $('#loginBtn').addClass('ui-disabled');
    $('#loginResp').text('Please wait, validating ...');
    
    var u = $('#uname').val();
    var p = $('#pword').val();
    
    Parse.User.logIn(u, p, {
        success: function(user) {
            $('#loginBtn').removeClass('ui-disabled');
            $('#loginResp').text('Login successful, please wait...');
            $.mobile.navigate('#springboard');
        },
        error: function(user, error) {
            $('#loginBtn').removeClass('ui-disabled');
            $('#loginResp').text(error.message);
        }
    });
});

//
//
//  Register Button
//
//
$('#registerBtn').on('click', function() {
    $('#registerBtn').addClass('ui-disabled');
    $('#r_resp').text('Please wait, registering ...');
    
    var uname = $('#r_uname').val();
    var pword = $('#r_pword').val();
    var pword_2 = $('#r_pword_2').val();
    var phone = $('#r_phone').val();
    var email = $('#r_email').val();
    
    if(pword == pword_2) {
        var user = new Parse.User();
        user.set('username', uname);
        user.set('password', pword);
        user.set('email', email);
        user.set('phone', phone);
        
        user.signUp(null, {
            success: function(user) {
                $('#registerBtn').removeClass('ui-disabled');
                $('#r_resp').text('Registration successful, will now login');
                $.mobile.navigate('#springboard');
            },
            error: function(user, error) {
                $('#r_resp').text(error.message);
                $('#registerBtn').removeClass('ui-disabled');
            }
        });
    } else {
        $('#r_resp').text('Your passwords do not match.');
        $('#registerBtn').removeClass('ui-disabled');
    }
});

//
//
//  Password Reset
//
//

$('#resetBtn').on('click', function() {
    $('#resetBtn').addClass('ui-disabled');
    var email = $('#reset_email').val();
    
    Parse.User.requestPasswordReset(email, {
        success: function() {
            $('#resetResp').text('Password reset succeeded. Please check your mail');
            $('#resetBtn').removeClass('ui-disabled');
        },
        error: function(error) {
            $('#resetResp').text(error.message);
            $('#resetBtn').removeClass('ui-disabled');
        }
    });
});

//
//
//  New Customer
//
//
$('#newCustomerBtn').on('click', function() {
    alert('new customer');
});