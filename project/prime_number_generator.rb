# Prime number generator using Sieve of Eratosthenes algorithm

# Error class
class InvalidValueError < StandardError
end

def generate_primes_in_range(start_range, end_range)
  raise InvalidValueError, "Invalid Input Value" if start_range.nil? || end_range.nil?
  raise InvalidValueError, "Invalid Input Value" if start_range <= 0 || end_range <= 0

  start_range, end_range = end_range, start_range if start_range > end_range

  is_prime = Array.new(end_range + 1, true)
  is_prime[0] = is_prime[1] = false

  (2..Math.sqrt(end_range)).each do |num|
    next unless is_prime[num]

    (num**2..end_range).step(num) do |multiple|
      is_prime[multiple] = false
    end
  end

  primes = []
  (start_range..end_range).each do |num|
    primes << num if is_prime[num]
  end

  primes
end

# Accept user input for range and print results
def main
  begin
    print "Enter the start of the range: "
    start_range = Integer(gets.chomp)
    raise InvalidValueError, "Invalid Input Value" if start_range <= 0

    print "Enter the end of the range: "
    end_range = Integer(gets.chomp)
    raise InvalidValueError, "Invalid Input Value" if end_range <= 0

    primes = generate_primes_in_range(start_range, end_range)
    puts "Prime numbers between #{start_range} and #{end_range}: #{primes.join(', ')}"
  rescue ArgumentError, InvalidValueError
    puts "Invalid input. Please enter valid integers greater than 0."
  end
end

# Run the main function if the script is run directly
main if __FILE__ == $0


