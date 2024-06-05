export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !=== 'string') {
    return '';
  }
  const validValues = [];

  // Iterate through the set and add the valid values to the array
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      validValues.push(value.slice(startString.length));
    }
  }

  // Join the valid values into a string and return it
  return validValues.join('-');
}
