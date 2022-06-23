function sumTo(n){
	return (n == 1) ? 1 : n + sumTo(n-1);
}