class Utils {
  static calculateNumber(type, a, b) {
    const A = Math.round(a);
    const B = Math.round(b);
    let c = 0;

    if (type === 'SUM') {
      c = A + B;
    } else if (type === 'SUBTRACT') {
      c = A - B;
    } else if (type === 'DIVIDE') {
      if (B === 0) { return 'Error'; }
      c = A / B;
    } else {
      throw new Error('Invalid operation');
    }
    return c;
  }

}

module.exports = Utils;
