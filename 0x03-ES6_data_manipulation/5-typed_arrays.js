export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const uint8View = new Uint8Array(buffer);
  uint8View[position] = value;

  return uint8View;
}
