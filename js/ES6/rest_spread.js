function addNumbers(numbers = [0]) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0)
}