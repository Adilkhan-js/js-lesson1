var name = prompt('Введите ваше имя')
    alert(' Привет ' +name+ ' Ответь на вопросы ')
var question1 = prompt('Какое растение существует на самом деле? 1 - Лох чилийский, 2 - Лох индийский, 3 - Лох греческий, 4 - Лох русский')
if(question1 == 2) {
    alert('Правильно!')
}
else{
    alert('Вы проиграли')
}
alert(name+ ' идем дальше! ')
var question2 = prompt('Какая страна считается родиной футбола? 1 - Бразилия, 2 - Россия, 3 - Англия, 4 - Кыргызстан')
if(question2 == 3) {
    alert(' Правильно! ' +name)
}
else{
    alert('Попробуй еще раз')
}
alert(name+ ' идем дальше! ')
var question3 = prompt('Если игрок забивает в свои ворота, этот гол называется? 1 - Офсайд, 2 - Пента-трик, 3 - Гол, 4 - Автогол')
if(question3 == 4) {
    alert('Верно!')
}
else{
    alert('Вы проиграли')
}
alert(name+ ' идем дальше! Осталось немного')
var question4 = prompt('Сколько игроков одновременно находится на поле с обеих сторон? 1 - 22, 2 - 24, 3 - 11, 4 - 34')
if(question4 == 1) {
    alert('Верно!')
}
else{
    alert('Вы проиграли')
}
alert(name+ ' идем дальше! Остался один вопрос!')
var question5 = prompt('Сколько размеров футбольных мячей существует? 1 - три, 2 - четыре, 3 - пять, 4 - шесть')
if(question5 == 3) {
    alert('Верно! Ты ответил на все вопросы!')
}
else{
    alert('Вы проиграли')
}
