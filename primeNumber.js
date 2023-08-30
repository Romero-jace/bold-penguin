export class PrimeNumbers {
  static invalidValue = (v) => !Number.isInteger(v) || v <= 0;

  static list(startingValue, endingValue) {
    if ([startingValue, endingValue].some(this.invalidValue)) {
      throw new InvalidValueError("Invalid Input Value(s)");
    }

    const [minValue, maxValue] = [startingValue, endingValue].sort(
      (a, b) => a - b
    );
    let currentValue = minValue;
    const primeNumbers = [];

    while (currentValue <= maxValue) {
      if (this.isPrime(currentValue)) {
        primeNumbers.push(currentValue);
      }
      currentValue++;
    }

    return primeNumbers;
  }

  static isPrime(value, optimize = true) {
    if (this.invalidValue(value)) {
      throw new InvalidValueError("Invalid Input Value");
    }

    const actualValue = value;
    let actualDivisor = 2;
    let isAPrimeNumber = true;
    const actualValueMax = optimize
      ? Math.floor(actualValue / 2)
      : actualValue - 1;

    while (actualDivisor <= actualValueMax) {
      if (actualValue % actualDivisor === 0) {
        isAPrimeNumber = false;
      }
      actualDivisor++;
    }

    return isAPrimeNumber;
  }
}

export class InvalidValueError extends Error {}
