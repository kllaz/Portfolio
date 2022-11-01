/* opens log in form */
document.getElementById('log-in').onclick = function() {
    document.getElementById('log-in-form').style.visibility = 'visible';
    document.getElementById('log-in-form').style.opacity = '1';
    document.getElementById('log-in-form').style.filter = 'drop-shadow(0px 0px 800px black)';
    document.getElementById('close').style.visibility='visible'
}
/* closes log in form */
document.getElementById('close').onclick = function() {
    document.getElementById('log-in-form').style.opacity = '0';
    document.getElementById('log-in-form').style.visibility = 'hidden';
    document.getElementById('close').style.visibility='hidden'
}