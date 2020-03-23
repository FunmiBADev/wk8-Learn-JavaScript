class FizzBuzz {
	_isDivisibleBy(divisior, number) {
		return number % divisior === 0;
	}

	play(number) {
		if (this._isDivisibleBy(15, number)) {
			return 'FizzBuzz';
		} else if (this._isDivisibleBy(5, number)){
			return 'Buzz';
		} else if (this._isDivisibleBy(3, number)) {
			return 'Fizz';
		} else {
			return number;
		}
	}
}