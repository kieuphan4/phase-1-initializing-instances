class Breakfast {
    constructor (food, drink) {
        this.food = food;
        this.drink = drink;

    }
}

let mondayBreakfast = new Breakfast("cereal", "milk")
let wednesdayBreakfast = new Breakfast ("egg sandwich", "apple juice")

console.log(mondayBreakfast);
console.log(wednesdayBreakfast);

class Lunch {
    constructor (salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;

    }
}

let sundayLunch = new Lunch ("cobb", "chicken tortilla", "coke")
let thursdayLunch = new Lunch ("caesar", "broccoli and cheddar", "water")

console.log(sundayLunch);
console.log(thursdayLunch);

class Dinner {
    constructor (salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert

    }
}

let tuesdayDinner = new Dinner ("caesar", "broccoli and cheddar", "club sandwich", "chocolate mousse")
let fridayDinner = new Dinner ("korean lettuce", "miso", "bbq meats", "chocolate mousse")

console.log(tuesdayDinner);
console.log(fridayDinner);