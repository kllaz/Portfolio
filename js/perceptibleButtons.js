/* making buttons more perceptible */
function perceptibleFirstButton() {
    document.getElementById('secondlink').style.textIndent = '-5px';
    document.getElementById('secondlink').style.borderColor = 'rgb(60, 60, 60)';
    document.getElementById('secondlink').style.color = 'rgb(60, 60, 60)';
    document.getElementById('secondlink').style.borderRadius = '10px';

    document.getElementById('thirdlink').style.textIndent = '-10px';
    document.getElementById('thirdlink').style.borderColor = 'rgb(40, 40, 40)';
    document.getElementById('thirdlink').style.color = 'rgb(40, 40, 40)';
    document.getElementById('thirdlink').style.borderRadius = '10px'
}


function perceptibleSecondButton() {
    document.getElementById('firstlink').style.textIndent = '-5px';
    document.getElementById('firstlink').style.borderColor = 'rgb(60, 60, 60)';
    document.getElementById('firstlink').style.color = 'rgb(60, 60, 60)';
    document.getElementById('firstlink').style.borderRadius = '10px';

    document.getElementById('thirdlink').style.textIndent = '-5px';
    document.getElementById('thirdlink').style.borderColor = 'rgb(60, 60, 60)';
    document.getElementById('thirdlink').style.color = 'rgb(60, 60, 60)';
    document.getElementById('thirdlink').style.borderRadius = '10px';
}


function perceptibleThirdButton() {
    document.getElementById('secondlink').style.textIndent = '-5px';
    document.getElementById('secondlink').style.borderColor = 'rgb(60, 60, 60)';
    document.getElementById('secondlink').style.color = 'rgb(60, 60, 60)';
    document.getElementById('secondlink').style.borderRadius = '10px';

    document.getElementById('firstlink').style.textIndent = '-5px';
    document.getElementById('firstlink').style.borderColor = 'rgb(40, 40, 40)';
    document.getElementById('firstlink').style.color = 'rgb(40, 40, 40)';
    document.getElementById('firstlink').style.borderRadius = '10px';
}
/* denying previous function */
function simpleFirstButton() {
    document.getElementById('secondlink').style.textIndent = '5px';
    document.getElementById('secondlink').style.borderColor = 'white';
    document.getElementById('secondlink').style.color = 'white';
    document.getElementById('secondlink').style.borderRadius = '0px'; 

    document.getElementById('thirdlink').style.textIndent = '10px';
    document.getElementById('thirdlink').style.borderColor = 'white';
    document.getElementById('thirdlink').style.color = 'white';
    document.getElementById('thirdlink').style.borderRadius = '0px'; 
}


function simpleSecondButton() {
    document.getElementById('firstlink').style.textIndent = '5px';
    document.getElementById('firstlink').style.borderColor = 'white';
    document.getElementById('firstlink').style.color = 'white';
    document.getElementById('firstlink').style.borderRadius = '0px'; 

    document.getElementById('thirdlink').style.textIndent = '5px';
    document.getElementById('thirdlink').style.borderColor = 'white';
    document.getElementById('thirdlink').style.color = 'white';
    document.getElementById('thirdlink').style.borderRadius = '0px'; 
}


function simpleThirdButton() {
    document.getElementById('secondlink').style.textIndent = '5px';
    document.getElementById('secondlink').style.borderColor = 'white';
    document.getElementById('secondlink').style.color = 'white';
    document.getElementById('secondlink').style.borderRadius = '0px'; 

    document.getElementById('firstlink').style.textIndent = '10px';
    document.getElementById('firstlink').style.borderColor = 'white';
    document.getElementById('firstlink').style.color = 'white';
    document.getElementById('firstlink').style.borderRadius = '0px'; 
}