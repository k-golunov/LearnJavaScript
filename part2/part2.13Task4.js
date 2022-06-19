let n = prompt("Введите, до какого числа вывести простые числа", 0);

primeNumber:
for (let i = 2; i <= n; i++) {
	for (var j = 2; j < i; j++) {
		if (i % j == 0){
			continue primeNumber;
		}
	}
	alert(i);
}