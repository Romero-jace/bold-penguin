# require_relative( 'spec_helper')
require('./project/prime_number_generator')

# require_relative 'prime_numbers' # Assuming 'prime_numbers.rb' is the file containing the methods

RSpec.describe 'generate_primes_in_range' do
  it 'should raise InvalidValueError if list arguments are not integers' do
    expect { generate_primes_in_range(nil, 10) }.to raise_error(InvalidValueError, "Invalid Input Value")
    expect { generate_primes_in_range(nil, 10.1) }.to raise_error(InvalidValueError, "Invalid Input Value")
    expect { generate_primes_in_range(12.1, 10.1) }.to raise_error(InvalidValueError, "Invalid Input Value")
    expect { generate_primes_in_range(10, nil) }.to raise_error(InvalidValueError, "Invalid Input Value")
    expect { generate_primes_in_range(nil, nil) }.to raise_error(InvalidValueError, "Invalid Input Value")
    expect { generate_primes_in_range(10, "nil") }.to raise_error(InvalidValueError, "Invalid Input Value")
    expect { generate_primes_in_range("10", "nil") }.to raise_error(InvalidValueError, "Invalid Input Value")
  end

  it 'should raise InvalidValueError if list arguments are not > 0' do
    expect { generate_primes_in_range(-1, 10) }.to raise_error(InvalidValueError, "Invalid input. Please enter valid integers greater than 0.")
    expect { generate_primes_in_range(1, -1) }.to raise_error(InvalidValueError)
    expect { generate_primes_in_range(-22, -33) }.to raise_error(InvalidValueError, "Invalid input. Please enter valid integers greater than 0.")
  end

  it 'should check list with valid arguments' do
    expect(generate_primes_in_range(7900, 7920)).to eq([7901, 7907, 7919])
    expect(generate_primes_in_range(1, 10)).to eq([2, 3, 5, 7])
  end

  it 'should check list against reverse' do
    output_list = generate_primes_in_range(1, 10)
    expect(generate_primes_in_range(10, 1)).to eq(output_list)
  end
end

