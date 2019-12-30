var email;
email = prompt('Input your e-mail.');
if (email === '' || email === null) {
    alert('Canceled.');
} else if (email.length < 5) {
    alert('I don\'t know any emails having name length less than 5 symbols.');
} else {
    if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
        var pass = prompt('Input your password.');
    } else {
        alert('I don’t know you.');
    }
}
if (pass === null || pass === '') {
    alert('Canceled.');
} else {
    if (email === 'admin@gmail.com' && pass === 'AdminPass'
        || email === 'user@gmail.com' && pass === 'UserPass') {
        var newpass = confirm('Do you want to change your password?');
        if (newpass === false) {
            alert('You have failed the change.');
        } else if (newpass === true) {
            var oldpass = prompt('Please write the old password.');
        } else if (oldpass === null || oldpass === '') {
            alert('Canceled.');
        }
        if (email === 'admin@gmail.com' && oldpass === 'AdminPass'
            || email === 'user@gmail.com' && oldpass === 'UserPass') {
            newpass = prompt('Enter a new passsword');
                if (newpass === null || newpass === '') {
                    alert('Canceled');
                } else if (newpass.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    var newpasscheck = prompt('Please enter it again.');
                }
            }
            if (newpass !== newpasscheck) {
                alert('You wrote the wrong password.');
            } else if (newpass === newpasscheck) {
                alert('You have successfully changed your password.');
            }
        } else {
            alert('Wrong password.');
        }
    }
