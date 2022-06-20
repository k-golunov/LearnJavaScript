let calculator = {
	number1 : 0,
	number2 : 0, 
	read() {
		this.number1 = +prompt("Введите первое значение", 0);
		this.number2 = +prompt("Введите второе значение", 0);
	},

	sum(){
		return this.number1 + this.number2;
	},

	mul(){
		return this.number1	* this.number2;
	},
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );