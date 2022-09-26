window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initValues  = { amount: 1, years: 1, rate: 1 };
  document.getElementById("loan-amount").value(initValues.amount)
  document.getElementById("loan-years").value(initValues.years)
  document.getElementById("loan-rate").value(initValues.rate)
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let numerator = values.amount * (values.rate/values.years) 
  let denominator = 1 - (1 + ((values.rate/values.years) ** (-values.years * 12)))
  let monthlyPayment = numerator/denominator;
  monthlyPayment = monthlyPayment.toFixed(2);
  
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText(monthly)
}
