function Calculator(){
	let number1 = 0;
	let number2 = 0; 
	this.read = function(){
		this.number1 = +prompt("Введите первое значение", 0);
		this.number2 = +prompt("Введите второе значение", 0);
	};

	this.sum = function(){
		return this.number1 + this.number2;
	};

	this.mul = function(){
		return this.number1	* this.number2;
	};
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );