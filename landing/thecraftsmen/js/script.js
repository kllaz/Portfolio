/* white box */
document.getElementById('whiteBox').onmouseover = function() {
    document.getElementById('blackBox').style.height = '230px';
    document.getElementById('disappearedTextWhiteBox').style.opacity = '0';
    document.getElementById('textAnimationWhiteBox').style.opacity = '1';
}
document.getElementById('whiteBox').onmouseout = function() {
    document.getElementById('blackBox').style.height = '250px';
    document.getElementById('disappearedTextWhiteBox').style.opacity = '1';
    document.getElementById('textAnimationWhiteBox').style.opacity = '0';
}
/* black box */
document.getElementById('blackBox').onmouseover = function() {
    document.getElementById('whiteBox').style.height = '230px';
    document.getElementById('disappearedTextBlackBox').style.opacity = '0';
    document.getElementById('textAnimationBlackBox').style.opacity = '1';
}
document.getElementById('blackBox').onmouseout = function() {
    document.getElementById('whiteBox').style.height = '250px';
    document.getElementById('disappearedTextBlackBox').style.opacity = '1';
    document.getElementById('textAnimationBlackBox').style.opacity = '0';
}
/* yellow box */
document.getElementById('yellowBox').onmouseover = function() {
    document.getElementById('disappearedTextYellowBox').style.opacity = '0';
    document.getElementById('textAnimationYellowBox').style.opacity = '1';
}
document.getElementById('yellowBox').onmouseout = function() {
    document.getElementById('disappearedTextYellowBox').style.opacity = '1';
    document.getElementById('textAnimationYellowBox').style.opacity = '0';
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
    document.getElementById('thirddescription').style.marginTop = '90px'
    document.getElementById('thirdsignature').style.marginTop = '60px'
}