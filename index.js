// Customer objects to test if they have subsciptions and/or coupons
// use data for calculating the checkout cost
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// Function 1: If a customer has a subscription, the customer will receive a 25% discount
//  after the refill total has been calculated.

// create a function to calculate the refill total
const refillTotalWithSubscription = function (customer) {
  // function should access the customer object and pull data for pricePerRefill and refills and multiply the two values
  const preDiscountTotal = customer["pricePerRefill"] * customer["refills"];
  // If the customer has a subscription: the checkout total should be returned with 25% off
  if (customer["subscription"]) {
    return preDiscountTotal - preDiscountTotal * 0.25;
    // if they do not have a subscription: the normal checkout price should be returned
  } else {
    return preDiscountTotal;
  }
};
const rockyPreDiscount = refillTotalWithSubscription(rocky);
// console.log(rockyPreDiscount); // expected output: 112.5

const sarahPreDiscount = refillTotalWithSubscription(sarah);
// console.log(sarahPreDiscount); // expected output: 37.5

const timmyPreDiscount = refillTotalWithSubscription(timmy);
// console.log(timmyPreDiscount); // expected output: 75

// Function 2: If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

// create a function to check if the customer has a coupon and return $10 if they do, and return the normal checkout price w/o coupon
// function needs two values to check the customer object if the customer has a coupon
// second value is to calculate total after the coupon
const refillTotalWithCoupon = function (customer, customerTotalBeforeCoupon) {
  let finalAmount = customerTotalBeforeCoupon;
  if (customer["coupon"]) {
    finalAmount -= 10;
    return finalAmount;
  } else {
    return finalAmount;
  }
};

const rockyFinalAmount = refillTotalWithCoupon(rocky, rockyPreDiscount);
console.log(rockyFinalAmount); // expected output: 102.5

const sarahFinalAmount = refillTotalWithCoupon(sarah, sarahPreDiscount);
console.log(sarahFinalAmount); // expected output: 37.5

const timmyFinalAmount = refillTotalWithCoupon(timmy, timmyPreDiscount);
console.log(timmyFinalAmount); // expected output: 65

// Function 3: Return and log a string: `Your grand total is ${finalAmount}`

// Write a function to return console.log(`Your grand total is $${finalAmount}`);
const grandTotal = (finalAmount) =>
  console.log(`Your grand total is $${finalAmount}!`);

const rockyGrandTotal = grandTotal(rockyFinalAmount); // expected output: `Your grand total is $102.5!`
const sarahGrandTotal = grandTotal(sarahFinalAmount); // expected output: `Your grand total is $37.5!`
const timmyGrandTotal = grandTotal(timmyFinalAmount); // expected output: `Your grand total is $65!`
