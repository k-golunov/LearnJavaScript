function createCalendar(elem, year, mon) {

    let month = mon - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let date = new Date(year, month);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(date); i++) {
        table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (date.getMonth() == month) {
        table += '<td>' + date.getDate() + '</td>';

        if (getDay(date) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
        table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}

createCalendar(calendar, 2012, 9);