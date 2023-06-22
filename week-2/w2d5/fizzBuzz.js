//fizz @3's
//buzz @5's
//fizzbuzz @15's

for (var i = 1; i < 101; i++) {
    //fizzbuzz @15's
	if (i % 15 == 0) {
		console.log("FizzBuzz");
    //buzz @5's
	} else if (i % 5 == 0) {
		console.log("Buzz");
	//fizz @3's
    } else if (i % 3 == 0) {
		console.log("Fizz");
    //print others normally
	} else {
		console.log(i);
	}
}