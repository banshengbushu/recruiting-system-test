require('should');
const subtractNumber = require('../src/subtract-number');

describe('subtract-number', function () {
  const number_a = "01 02 03 04 05 06";
  const number_b = "01 02 03";
  const number_c = "07 08 09";

  it('should return "illegal subtract"', function () {
    const result_a = "illegal subtract";
    const result = subtractNumber(number_b, number_a);
    result.should.eql(result_a);
  });

  it('should return "04 05 06"', function () {
    const result_b = "04 05 06";
    const result = subtractNumber(number_a, number_b);
    result.should.eql(result_b);
  });

  it('should return "01 02 03 04 05 06"', function () {
    const result_c = "01 02 03 04 05 06";
    const result = subtractNumber(number_a, number_c);
    result.should.eql(result_c);
  });
});