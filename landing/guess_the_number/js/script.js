function checkWindowSize() {
    const coverBox = document.getElementById('coverBox');
    const halfScreenWidth = window.screen.width / 2;
    if (window.innerWidth <= halfScreenWidth) {
        coverBox.style.flexDirection = 'column';
    } else {
        coverBox.style.flexDirection = 'row';
    }
}
window.addEventListener('resize', checkWindowSize);
window.addEventListener('load', checkWindowSize);