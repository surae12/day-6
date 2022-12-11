
//Write a “person” class to hold all the details.

class Person {

    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }

}


//write a class to calculate the uber price in javascript


let baseFee = .44
let cities = ["Providence", "Boston", "New York",]
let uberRates = [5, 10, 15]

let customerName = "Wendy"
let customerCity = "Providence"
console.log("Hello", customerName + ", welcome to the Uber Rate Program")

function getRate(customerCity) {

    function uberRate(customerCity, index) {

        let finalRate = (uberRates[index]) * baseFee
        return finalRate
    }

    console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)
