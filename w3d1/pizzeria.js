// function pizzaOven(crustType, sauceType, cheeses, toppings) {
// 	var pizza = {};
// 	pizza.crustType = crustType;
// 	pizza.sauceType = sauceType;
// 	pizza.cheeses = cheeses;
// 	pizza.toppings = toppings;
// 	return pizza;
// }
// // part one
// var pizza1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"]);
// console.log(pizza1);
// // part 2
// var pizza2 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
// console.log(pizza2);




//bonus round
var crustTypes = ["Chicago", "Lunchables", "thin and crispy", "NY Style"];
var sauceTypes = ["red", "white", "asian", "kewpie"];
var cheeses = ["cow cheese", "goat cheese", "parmesan"];
var toppings = ["ribs", "beef", "corn", "olives"];

function randomRange(max, min) {
	return Math.floor(Math.random() * max - min) + min;
}

function randomSelector(arr) {
	var i = Math.floor(arr.length * Math.random());
	return arr[i];
}

function randomPizza() {
	var pizza = {};
	pizza.crustType = randomSelector(crustTypes);
	pizza.sauceType = randomSelector(sauceTypes);
	pizza.cheeses = [];
	pizza.toppings = [];
	for (var i = 0; i < randomRange(5, 1); i++) {
		pizza.cheeses.push(randomSelector(cheeses));
	}
	for (var i = 0; i < randomRange(4, 0); i++) {
		pizza.toppings.push(randomSelector(toppings));
	}
	return pizza;
}

console.log(randomPizza());