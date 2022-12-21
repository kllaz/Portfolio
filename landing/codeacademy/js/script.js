let form = document.getElementById('subscription');
let message = document.getElementById('subscription-text');
let namee = document.getElementById('namee');

form.onsubmit = function () {
    message.textContent = namee.value + ' has joined codecademy';
}

/* opens log in form */
document.getElementById('log-in').onclick = function() {
    document.getElementById('log-in-form').style.visibility = 'visible';
    document.getElementById('log-in-form').style.opacity = '1';
    document.getElementById('log-in-form').style.filter = 'drop-shadow(0px 0px 800px black)';
    document.getElementById('close').style.visibility = 'visible';
}
/* closes log in form */
document.getElementById('close').onclick = function() {
    document.getElementById('log-in-form').style.opacity = '0';
    document.getElementById('log-in-form').style.visibility = 'hidden';
    document.getElementById('close').style.visibility = 'hidden';
}

/* links */
document.getElementById('forBusiness').onmouseover = function() {
    document.getElementById('business').style.width = '11vw';
}
document.getElementById('forBusiness').onmouseout = function() {
    document.getElementById('business').style.width = '10vw';
}
/* moves image upper and righter, adds a shdow */
let introduce = document.getElementById('introduce');

function moveImage() {
    introduce.style.marginTop = '2.8vw';
    introduce.style.webkitFilter = 'drop-shadow(-10px 10px 10px gray)';
    introduce.style.filter = 'drop-shadow(-10px 10px 10px gray)';
}
/* cancels previous function */
function moveImageBack() {
    introduce.style.marginTop = '3.2vw';
    introduce.style.webkitFilter = 'none';
    introduce.style.filter = 'none';
}


/* select by input */
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});