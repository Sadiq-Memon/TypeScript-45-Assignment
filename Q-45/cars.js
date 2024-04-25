// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// { manufacturer: 'Toyota', model: 'Corolla', color: 'Red', year: 2022 }
// {
//   manufacturer: 'Honda',
//   model: 'Civic',       
//   color: 'Blue',        
//   year: 2023,
//   features: 'Sunroof'   
// }
function Cars(manufacturer, model, color, year) {
    console.log("Manufacturer: ".concat(manufacturer, " , Model: ").concat(model, " , Color ").concat(color, " , Year: ").concat(year));
}
;
Cars("Toyota", "Corolla", "Black", 2023);
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add optional features to the car object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0], value = option[1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var carInfo = createCar("Toyota", "Corolla", ["color", "red"], ["sunroof", true]);
// Print the returned object
console.log(carInfo);
