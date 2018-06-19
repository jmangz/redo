const { expect } = require('chai');
const addTwoNumbers = require('../addTwoNumbers');

describe('addTwoNumbers()', () => {
  it('should add two numbers', () => {
    // Arrange
    const a = 5;
    const b = 1;
    const sum1 = a + b;

    // Act
    const sum2 = addTwoNumbers(a, b);

    // Assert
    expect(sum2).to.be.equal(sum1);
  });
});
