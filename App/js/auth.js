var btnLogin = document.getElementById('btn-login');
var btnId = document.getElementById('id');
var btnPass = document.getElementById('pass');

btnLogin.addEventListener('click', function(){
    event.preventDefault()
    if (btnPass.value == 'api9632') {
        console.log('pass');
        window.location.href = '../html/desktop.html';
    } else {
        console.log('invalid');
    }
});

