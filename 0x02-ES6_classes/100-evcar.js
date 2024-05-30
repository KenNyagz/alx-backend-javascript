import Car from './10-car'

// Private symbols for each attribute
const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');
const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  
   cloneCar() {
    const car = new Car(this.brand, this.color); // Use public getters from Car
    return car;
  }


}
