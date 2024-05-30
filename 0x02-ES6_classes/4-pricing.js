//import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    const { name, code } = this._currency;
    return `${this.amount} ${name} (${code}) `;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
