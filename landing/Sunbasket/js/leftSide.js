/* openning left side */
document.getElementById('open').onclick = function() {
    document.getElementById('aside').style.visibility = 'visible';
    document.getElementById('aside').style.opacity = '1';
    document.getElementById('aside').style.marginleft = '10%';
    document.getElementById('top').style.marginTop = "56px"
    document.getElementById('close').style.visibility='visible';
}
/* closing left side */
document.getElementById('close').onclick = function() {
    document.getElementById('aside').style.opacity = '0';
    document.getElementById('aside').style.visibility = 'hidden';
    document.getElementById('close').style.visibility='hidden';
}