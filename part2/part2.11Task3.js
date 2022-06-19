let login = prompt("Введите свой логин", '');

if (login == "Админ"){
	let password = prompt("Введите пароль");
	if (password == "Я главный") {
		alert("Здравствуйте!");
	}
	else if (password == '' || password == null) {
		alert("Отменено");
	}
	else{
		alert("Пароль неверный!");
	}
}
else if (login == '' || login == null) {
	alert("Отменено");
}
else{
	alert("Неизвестный логин");
}
