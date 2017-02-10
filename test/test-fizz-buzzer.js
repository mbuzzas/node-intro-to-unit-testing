const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', function() {

	it('should return "fizz-buzz" if multiple of 15', function() {
		[15, 30, 45].forEach(function(input) {
			fizzBuzz(input).should.equal('fizz-buzz');
		});
	});

	it('should return "buzz" if multiple of 5', function() {
		[5, 10, 20].forEach(function(input) {
			fizzBuzz(input).should.equal('buzz');
		});
	});

	it('should return "fizz" if multiple of 3', function() {
		[3, 6, 9, 12].forEach(function(input) {
			fizzBuzz(input).should.equal('fizz');
		});
	});

	it('should return number if not a multiple of 3 or 5', function() {
		[1, 2, 4, 7, 8].forEach(function(input) {
			fizzBuzz(input).should.equal(input);
		});
	});

	it('should return error if input is not a number', function() {
		const badInputs = [true, false, 'string']
		badInputs.forEach(function(input) {
			(function() {
				fizzBuzz(input)
			}).should.throw(Error);
		});
	});
});
