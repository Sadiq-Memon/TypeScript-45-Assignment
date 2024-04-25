// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// { manufacturer: 'Toyota', model: 'Corolla', color: 'Red', year: 2022 }
// {
//   manufacturer: 'Honda',
//   model: 'Civic',       
//   color: 'Blue',        
//   year: 2023,
//   features: 'Sunroof'   
// }

function Cars(manufacturer: string , model: string , color: string , year: number){
    console.log(`Manufacturer: ${manufacturer} , Model: ${model} , Color ${color} , Year: ${year}`);
    
};
Cars("Toyota" , "Corolla" , "Black" , 2023);

function createCar(manufacturer: string, modelName: string, ...options: any): { [key: string]: any } {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add optional features to the car object
    for (let option of options) {
        const [key, value] = option;
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional name-value pairs
const carInfo = createCar("Toyota", "Corolla", ["color", "red"], ["sunroof", true]);

// Print the returned object
console.log(carInfo);
