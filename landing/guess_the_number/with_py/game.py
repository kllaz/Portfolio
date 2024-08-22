from flask import Flask, request, render_template, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    global n
    n = int(request.form['data'])
    if n < 1 or n > 999:
        return render_template_string(f'''
        <h1 style="text-align: center; font-size: 4vw;">Число {n} не соответствует условию.</h1>
        <h3 style="text-align: center; font-size: 2vw;">Введите, пожалуйста, заново!</h3>
        <form action="/submit" method="post" style="margin-left: auto; margin-right: auto; width: 12vw;">
            <input type="number" name="data" style="height: 2vw;margin-left: auto; margin-right: auto; display: block ; width = 12vw">
            <button type="submit" style="margin-top: 2vh; width: 10vw; height: 2vw; font-size: 1vw;margin-left: auto; margin-right: auto; display: block">Подтвердить</button>
        </form>
                                      ''')
    else:
        return render_template_string(f'''
        <h1 style="text-align: center; font-size: 4vw;">Попробуйте угадать загаданное число!</h1>
        <h3 style="text-align: center; font-size: 2vw;">Число находится в диапазоне от 0 до 999 включительно</h3>
        <form action="/guessed_submit" method="post" style="margin-left: auto; margin-right: auto; width: 12vw;">
            <input type="text" name="guessed_data" style="margin-left: auto; margin-right: auto; width: 12vw; height: 2vw; display: block">
            <button type="submit" style="margin-top: 2vh; width: 10vw; height: 2vw; font-size: 1vw;margin-left: auto; margin-right: auto; display: block">Подтвердить</button>
        </form>
        
                                      ''')



@app.route('/guessed_submit', methods=['POST'])
def guess():
    left, right = 0, 999
    guessed_n = int(request.form['guessed_data'])
    while guessed_n != n:
        if guessed_n < right and guessed_n > n:
            right = guessed_n
            return render_template_string(f'''
            <h1 style="text-align: center; font-size: 4vw;">Загаданное число меньше, чем {guessed_n}.</h1>
            <h3 style="text-align: center; font-size: 2vw;">Введите число "левее"! ;)</h3>
            <form action="/guessed_submit" method="post" style="margin-left: auto; margin-right: auto; width: 12vw;">
                <input type="number" name="guessed_data" style="margin-left: auto; margin-right: auto; width: 12vw; height: 2vw; display: block">
                <button type="submit" style="margin-top: 2vh; width: 10vw; height: 2vw; font-size: 1vw;margin-left: auto; margin-right: auto; display: block">Подтвердить</button>
            </form>
                                          ''')
        elif guessed_n > left and guessed_n < n:
            left = guessed_n
            return render_template_string(f'''
            <h1 style="text-align: center; font-size: 4vw;">Загаданное число больше, чем {guessed_n}</h1>
            <h3 style="text-align: center; font-size: 2vw;">Введите число "правее"! ;)</h3>
            <form action="/guessed_submit" method="post" style="margin-left: auto; margin-right: auto; width: 12vw;">
                <input type="number" name="guessed_data" style="margin-left: auto; margin-right: auto; width: 12vw; height: 2vw; display: block">
                <button type="submit" style="margin-top: 2vh; width: 10vw; height: 2vw; font-size: 1vw;margin-left: auto; margin-right: auto; display: block">Подтвердить</button>
            </form>
                                          ''')
        else:
            return render_template_string(f"Не забывайте, что число между {left} и {right}!")
    else:
        return render_template_string(f'''
        <h1 style="text-align: center; font-size: 4vw;">Поздравляю, число угадано!</h1>
        <h3 style="text-align: center; font-size: 2vw;">Если хотите сыграть ещё раз, то запустите <i>index.html</i> снова <3</h3>
                                      ''')

if __name__ == '__main__':
    app.run(debug=True)
