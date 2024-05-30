import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._validateAmount(amount);
    this._validateCurrency(currency);

    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  set amount(amount) {
    this._validateAmount(amount);
    this._amount = amount;
  }

  set currency(currency) {
    this._validateCurrency(currency);
    this._currency = currency;
  }

  displayFullPrice() {
    const { name, code } = this._currency;
    return `${this.amount} ${name} (${code}) `;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
  }

  _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }
}
