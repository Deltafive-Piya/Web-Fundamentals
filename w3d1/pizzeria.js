// sandwich definaition
var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

// function sandwich factory
var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

// make a pizzaOven function
function pizzaOven ( crustType, sauseType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauseType = sauseType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish","traditional","mozzarella",["pepperoni","sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(p2);

var p3 = pizzaOven("","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(p2);

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza
}


    crustType = ["hand tossed", "thin crust", "thick crust"];
    sauceType = ["marinara", "BBQ sauce", "traditional"];
    cheeses = ["mozzarella", "feta", "provel"];
    toppings = ["jalapenos", "onions", "sausage"];
    var arr = []
    var crustTypeValue = crustType[Math.floor((Math.random()*crustType.length))]
    var sauceTypeValue = sauceType[Math.floor((Math.random()*sauceType.length))]
    var cheesesValue = cheeses[Math.floor((Math.random()*cheeses.length))]
    var toppingsValue = toppings[Math.floor((Math.random()*toppings.length))]

    console.log(pizzaOven(crustTypeValue, sauceTypeValue, cheesesValue, toppingsValue))