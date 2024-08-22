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
        <head>
            <link rel="stylesheet" href="../css/styles.css" type="text/css" />
        </head>
        <body>
            <p>Число {n} не соответствует условию. Введите, пожалуйста, заново!</p>
            <form action="/submit" method="post">
                <input type="number" name="data">
                <button type="submit">Submit</button>
            </form>
        </body>
                                      ''')
    else:
        return render_template_string(f'''
        <p>Попробуйте угадать загаданное число!</p>
        <form action="/guessed_submit" method="post">
            <input type="text" name="guessed_data">
            <button type="submit">Submit</button>
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
            <p>Число левее, чем {guessed_n}, попробуйте снова! ;)
            <form action="/guessed_submit" method="post">
                <input type="number" name="guessed_data">
                <button type="submit">Submit</button>
            </form>
                                          ''')
        elif guessed_n > left and guessed_n < n:
            left = guessed_n
            return render_template_string(f'''
            <p>Число праве, чем {guessed_n}, попробуйте снова! ;)
            <form action="/guessed_submit" method="post">
                <input type="number" name="guessed_data">
                <button type="submit">Submit</button>
            </form>
                                          ''')
        else:
            return render_template_string(f"Не забывайте, что число между {left} и {right}!")
    else:
        return render_template_string(f'''
        <p>Поздравляю! Число {guessed_n} угадано <3
        <form action="/index.html">
            <button type="submit">Вернуться</button>
        </form>
                                      ''')

if __name__ == '__main__':
    app.run(debug=True)
