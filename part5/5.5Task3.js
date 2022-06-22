function filterRangeInPlace(arr, a, b){
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		if (element < a || element > b){
			arr.splice(i, 1);
			i--;
		}
	}
}