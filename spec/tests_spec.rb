# require_relative( 'spec_helper')
require('./project/prime_number_generator')

RSpec.describe 'integer_input' do
  it 'should raise InvalidValueError if list arguments are not integers' do
    allow($stdin).to receive(:gets).and_return("10", "10") # Simulate user input
    expect { integer_input }.to raise_error(InvalidValueError, "Invalid Input Value")
    
    allow($stdin).to receive(:gets).and_return("12", "10") # Simulate user input
    expect { integer_input }.to raise_error(InvalidValueError, "Invalid Input Value")
  
    allow($stdin).to receive(:gets).and_return(12.1, 1) # Simulate user input
    expect { integer_input }.to raise_error(InvalidValueError, "Invalid Input Value")
  
    allow($stdin).to receive(:gets).and_return(12, 10.1) # Simulate user input
    expect { integer_input }.to raise_error(InvalidValueError, "Invalid Input Value")
  end

  it 'should check list with valid arguments' do
    expect(sieve_of_eratosthenes(7900, 7920)).to eq([7901, 7907, 7919])
    expect(sieve_of_eratosthenes(1, 10)).to eq([2, 3, 5, 7])
  end

  it 'should check list against reverse' do
    output_list = sieve_of_eratosthenes(1, 10)
    expect(sieve_of_eratosthenes(10, 1)).to eq(output_list)
  end
end

