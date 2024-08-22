
let h1 = document.getElementById('titleOne');
let h3 = document.getElementById('titleTwo');
document.getElementById('checkForm').addEventListener('submit', function(event){
    event.preventDefault()
})
var targetNumber;
function checkTheNumber() {
    var targetNumberLocal = parseInt(document.getElementById('dataInput').value);
    console.log(targetNumberLocal);
    if (targetNumberLocal<0 || targetNumberLocal>999) {
        h1.textContent = 'Число должно быть между 0 и 999 включительно.';
        h3.textContent = 'Попробуйте снова!';
        targetNumberLocal = document.getElementById('dataInput').value;
    } else {
        let left = 0;
        let right = 999;
        h1.textContent = 'Попробуйте угадать загаданное число!';
        h3.textContent = 'Оно находится в диапазоне от ' + left + ' до ' + right +'!';
        document.getElementById('guessForm').style.display = 'block';
        document.getElementById('checkForm').style.display = 'none'
        targetNumber = targetNumberLocal
        console.log(targetNumber)
    }
}

document.getElementById('guessForm').addEventListener('submit', function(event){
    event.preventDefault()
})
function guessTheNumber() {
    let n = parseInt(document.getElementById('dataInputGuess').value);
    let left = 0;
    let right = 999
    if (n < right && n > targetNumber) {
        h1.textContent = 'Ваше число больше загаданного.';
        h3.textContent = 'Попробуйте взять чуть "левее" ;)';
    } else if (n > left && n < targetNumber) {
        h1.textContent = 'Ваше число меньше загаданного.'
        h3.textContent = 'Попробуйте взять чуть "правее" ;)'
    } else if (n == targetNumber){
        h1.textContent = 'Поздравляю! Вы угадали число!'
        h3.textContent = '<3'
    } else {
        h1.textContent = 'Число' + n + 'введено не по условию'
        h3.textContent = 'Пожалуйста, введите число в диапазоне от 0 до 999'
    }
}