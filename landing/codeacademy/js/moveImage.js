/* moves image upper and righter, adds a shdow */
function moveImage() {
    document.getElementById('introduce').style.marginLeft = '7.5%';
    document.getElementById('introduce').style.marginTop = '90px';
    document.getElementById('introduce').style.webkitFilter = 'drop-shadow(-10px 10px 10px gray)';
    document.getElementById('introduce').style.filter = 'drop-shadow(-10px 10px 10px gray)';
}
/* cancels previous function */
function moveImageBack() {
    document.getElementById('introduce').style.marginLeft = '7%';
    document.getElementById('introduce').style.marginTop = '100px';
    document.getElementById('introduce').style.webkitFilter = 'none';
    document.getElementById('introduce').style.filter = 'none';
}