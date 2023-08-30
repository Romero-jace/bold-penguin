// Import the necessary modules
import { PrimeNumbers, InvalidValueError } from "./primeNumber";

describe("PrimeNumbers", () => {
  it("should raise InvalidValueError if list arguments aren't integers", () => {
    expect(() => PrimeNumbers.list(null, 10)).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
    expect(() => PrimeNumbers.list(null, 10.1)).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
    expect(() => PrimeNumbers.list(12.1, 10.1)).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
    expect(() => PrimeNumbers.list(10, null)).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
    expect(() => PrimeNumbers.list(null, null)).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
    expect(() => PrimeNumbers.list(10, "nil")).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
    expect(() => PrimeNumbers.list("10", "nil")).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
  });

  it("should raise InvalidValueError if list arguments aren't >0", () => {
    expect(() => PrimeNumbers.list(-1, 10)).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
    expect(() => PrimeNumbers.list(1, -1)).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
    expect(() => PrimeNumbers.list(-22, -33)).toThrowError(
      InvalidValueError,
      "Invalid Input Value(s)"
    );
  });

  it("should raise InvalidValueError if isPrime argument is not an integer", () => {
    expect(() => PrimeNumbers.isPrime(null)).toThrowError(
      InvalidValueError,
      "Invalid Input Value"
    );
    expect(() => PrimeNumbers.isPrime("nil")).toThrowError(
      InvalidValueError,
      "Invalid Input Value"
    );
    expect(() => PrimeNumbers.isPrime("")).toThrowError(
      InvalidValueError,
      "Invalid Input Value"
    );
    expect(() => PrimeNumbers.isPrime(1.34)).toThrowError(
      InvalidValueError,
      "Invalid Input Value"
    );
  });

  it("should raise InvalidValueError if isPrime argument is <= 0", () => {
    expect(() => PrimeNumbers.isPrime(-1)).toThrowError(
      InvalidValueError,
      "Invalid Input Value"
    );
    expect(() => PrimeNumbers.isPrime(0)).toThrowError(
      InvalidValueError,
      "Invalid Input Value"
    );
  });

  it("should check isPrime with valid argument", () => {
    expect(PrimeNumbers.isPrime(11)).toBe(true);
    expect(PrimeNumbers.isPrime(10)).toBe(false);
  });

  it("should check list with valid arguments", () => {
    expect(PrimeNumbers.list(7900, 7920)).toEqual([7901, 7907, 7919]);
    expect(PrimeNumbers.list(1, 10)).toEqual([1, 2, 3, 5, 7]);
  });

  it("should check list against reverse interval, same but reverse intervals should return the same list", () => {
    const outputList = PrimeNumbers.list(1, 10);
    expect(PrimeNumbers.list(10, 1)).toEqual(outputList);
  });
});
