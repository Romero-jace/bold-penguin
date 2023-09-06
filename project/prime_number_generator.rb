class InvalidValueError < StandardError
end

def sieve_of_eratosthenes(start_range, end_range) #thanks internet
  end_range, start_range = start_range, end_range if start_range > end_range

  is_prime = Array.new(end_range + 1, true)
  is_prime[0] = is_prime[1] = false

  (2..Math.sqrt(end_range)).each do |num|
    next unless is_prime[num]

    (num**2..end_range).step(num) do |multiple|
      is_prime[multiple] = false
    end
  end

  (start_range..end_range).select { |num| is_prime[num] }
end

def get_integer_input(prompt) #reusability I guess
  print prompt
  input = gets.chomp

  Integer(input)
rescue ArgumentError
  raise InvalidValueError, "Invalid Input Value"
end

def integer_input #since negative numbers can be integers, don't want that to happen for this scenario because negative numbers cant be prime
  start_range = get_integer_input("Enter the start of the range: ")
  end_range = get_integer_input("Enter the end of the range: ")

  raise InvalidValueError, "Invalid input. Please enter valid integers greater than 0." if start_range <= 0 || end_range <= 0

  [start_range, end_range]
end

def main #run it all
  begin
    start_range, end_range = integer_input
    primes = sieve_of_eratosthenes(start_range, end_range)
    puts "Prime numbers between #{start_range} and #{end_range}: #{primes.join(', ')}"
  rescue InvalidValueError => e
    puts e.message
  end
end

main if __FILE__ == $0
