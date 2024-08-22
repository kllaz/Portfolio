import random
n = int(input('Введите загаданное число:'))
num = random.randint(0,999)
cur_num = int(input('Угадайте число:'))
left, right = 0,999
while cur_num != n:
    if cur_num < right and cur_num > n:
        print('Слишком справа. Возьмите левее ;)')
        right = cur_num
    elif cur_num > left and cur_num < n:
        print('Слишком слева. Возьмите правее ;)')
        left = cur_num
    else:
        print(f'Не забывайте! Число между {left} и {right}')
    cur_num = int(input())
else:
    print('Поздравляю! Число угадано <3')