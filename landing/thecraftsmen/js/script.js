/* white box */
document.getElementById('whiteBox').onmouseover = function() {
    document.getElementById('blackBox').style.height = '230px';
    document.getElementById('disappearedTextWhiteBox').style.opacity = '0';
    document.getElementById('textAnimationWhiteBox').style.opacity = '1';
    document.getElementById('rectangle').style.width = '100px';
    document.getElementById('rectangle').style.opacity = '1';
    document.getElementById('triangle').style.width = '50px';
    document.getElementById('circle').style.width = '40px';
}
document.getElementById('whiteBox').onmouseout = function() {
    document.getElementById('blackBox').style.height = '250px';
    document.getElementById('disappearedTextWhiteBox').style.opacity = '1';
    document.getElementById('textAnimationWhiteBox').style.opacity = '0';
    document.getElementById('rectangle').style.width = '70px';
    document.getElementById('rectangle').style.opacity = '0.6';
    document.getElementById('triangle').style.width = '80px';
    document.getElementById('circle').style.width = '70px';
}
/* black box */
document.getElementById('blackBox').onmouseover = function() {
    document.getElementById('whiteBox').style.height = '230px';
    document.getElementById('disappearedTextBlackBox').style.opacity = '0';
    document.getElementById('textAnimationBlackBox').style.opacity = '1';
    document.getElementById('circle').style.width = '100px';
    document.getElementById('circle').style.opacity = '1';
    document.getElementById('triangle').style.width = '50px';
    document.getElementById('rectangle').style.width = '40px';
}
document.getElementById('blackBox').onmouseout = function() {
    document.getElementById('whiteBox').style.height = '250px';
    document.getElementById('disappearedTextBlackBox').style.opacity = '1';
    document.getElementById('textAnimationBlackBox').style.opacity = '0';
    document.getElementById('circle').style.width = '70px';
    document.getElementById('circle').style.opacity = '0.6';
    document.getElementById('triangle').style.width = '80px';
    document.getElementById('rectangle').style.width = '70px';
}
/* yellow box */
document.getElementById('yellowBox').onmouseover = function() {
    document.getElementById('disappearedTextYellowBox').style.opacity = '0';
    document.getElementById('textAnimationYellowBox').style.opacity = '1';
    document.getElementById('triangle').style.opacity = '1';
    document.getElementById('triangle').style.width = '110px';
    document.getElementById('rectangle').style.width = '40px';
    document.getElementById('circle').style.width = '40px';
}
document.getElementById('yellowBox').onmouseout = function() {
    document.getElementById('disappearedTextYellowBox').style.opacity = '1';
    document.getElementById('textAnimationYellowBox').style.opacity = '0';
    document.getElementById('triangle').style.opacity = '0.6';
    document.getElementById('triangle').style.width = '80px';
    document.getElementById('rectangle').style.width = '70px';
    document.getElementById('circle').style.width = '70px';
}

/* text-animation */
document.getElementById('littleBoxes').onmouseover = function() {
    document.getElementById('mainBoxTextAnimation').style.opacity = '0';
}
document.getElementById('littleBoxes').onmouseout = function() {
    document.getElementById('mainBoxTextAnimation').style.opacity = '1';
}





/* first description */
document.getElementById('first').onmouseover = function() {
    document.getElementById('firstLeft').style.height = '280px';
    document.getElementById('firstLeft').style.width = '49%';
    document.getElementById('firstRight').style.height = '280px';
    document.getElementById('firstRight').style.width = '49%';
    document.getElementById('firstLeft').style.marginLeft = '1%';
    document.getElementById('firstdescription').style.marginTop = '80px'
    document.getElementById('firstsignature').style.marginTop = '50px'
}
document.getElementById('first').onmouseout = function() {
    document.getElementById('firstLeft').style.height = '300px';
    document.getElementById('firstLeft').style.width = '50%';
    document.getElementById('firstRight').style.height = '300px';
    document.getElementById('firstRight').style.width = '50%';
    document.getElementById('firstLeft').style.marginLeft = '0%';
    document.getElementById('firstdescription').style.marginTop = '90px'
    document.getElementById('firstsignature').style.marginTop = '60px'
}
/* second description */
document.getElementById('second').onmouseover = function() {
    document.getElementById('secondLeft').style.height = '280px';
    document.getElementById('secondLeft').style.width = '49%';
    document.getElementById('secondRight').style.height = '280px';
    document.getElementById('secondRight').style.width = '49%';
    document.getElementById('secondLeft').style.marginLeft = '1%';
    document.getElementById('seconddescription').style.marginTop = '80px'
    document.getElementById('secondsignature').style.marginTop = '50px'
}
document.getElementById('second').onmouseout = function() {
    document.getElementById('secondLeft').style.height = '300px';
    document.getElementById('secondLeft').style.width = '50%';
    document.getElementById('secondRight').style.height = '300px';
    document.getElementById('secondRight').style.width = '50%';
    document.getElementById('secondLeft').style.marginLeft = '0%';
    document.getElementById('seconddescription').style.marginTop = '90px'
    document.getElementById('secondsignature').style.marginTop = '60px'
}
/* third description */
document.getElementById('third').onmouseover = function() {
    document.getElementById('thirdLeft').style.height = '280px';
    document.getElementById('thirdLeft').style.width = '49%';
    document.getElementById('thirdRight').style.height = '280px';
    document.getElementById('thirdRight').style.width = '49%';
    document.getElementById('thirdLeft').style.marginLeft = '1%';
    document.getElementById('thirddescription').style.marginTop = '80px'
    document.getElementById('thirdsignature').style.marginTop = '50px'
}
document.getElementById('third').onmouseout = function() {
    document.getElementById('thirdLeft').style.height = '300px';
    document.getElementById('thirdLeft').style.width = '50%';
    document.getElementById('thirdRight').style.height = '300px';
    document.getElementById('thirdRight').style.width = '50%';
    document.getElementById('thirdLeft').style.marginLeft = '0%';
    document.getElementById('thirddescription').style.marginTop = '90px';
    document.getElementById('thirdsignature').style.marginTop = '60px';
}

/* figures animation */
document.getElementById('mainBox').onmouseover = function() {
    document.getElementById('rectangle').style.opacity = '1';
    document.getElementById('triangle').style.opacity = '1';
    document.getElementById('circle').style.opacity = '1';
    document.getElementById('rectangle').style.width = '90px';
    document.getElementById('triangle').style.width = '90px';
    document.getElementById('circle').style.width = '90px';
    document.getElementById('animation-text').style.opacity = '0';

    document.getElementById('rotation').style.marginLeft = '31%';
    document.getElementById('rotation').style.marginTop = '7%';
}

document.getElementById('mainBox').onmouseout = function() {
    document.getElementById('rectangle').style.opacity = '0.6';
    document.getElementById('triangle').style.opacity = '0.6';
    document.getElementById('circle').style.opacity = '0.6';
    document.getElementById('rectangle').style.width = '70px';
    document.getElementById('triangle').style.width = '80px';
    document.getElementById('circle').style.width = '70px';
    document.getElementById('animation-text').style.opacity = '1';

    document.getElementById('rotation').style.marginLeft = '32%';
    document.getElementById('rotation').style.marginTop = '8%';
}

/* height */

let leftEl = document.querySelector('.left');
let stylesLeft = window.getComputedStyle(leftEl);
let height = stylesLeft.height;
let rightEl = document.querySelector('.right');
rightEl.style.setProperty('--height', height + 'px');
