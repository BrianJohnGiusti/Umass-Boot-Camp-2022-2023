
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(100,10,5)).toEqual('200.00');
});

//from solution
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(100,10,5)).toEqual('200.00');
});


//from solution
it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});