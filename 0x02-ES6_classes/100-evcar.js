import Car from './10-car';

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
