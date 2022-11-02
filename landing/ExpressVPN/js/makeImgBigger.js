/* makin neccesary images bigger */
document.getElementById('moonland').onmouseover = function() {
    document.getElementById('moonland').style.width = "98%";
    document.getElementById('moonland').style.marginLeft = '-1%';
}
/* denying previous functions */
document.getElementById('moonland').onmouseout = function() {
    document.getElementById('moonland').style.width = "96%";
    document.getElementById('moonland').style.marginLeft = '0%';
}