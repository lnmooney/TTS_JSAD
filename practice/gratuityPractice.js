const billAmount = 53;

// create function that will calculate tip
function gratuity(bill) {
    return bill * .20;
}

// create function that will add the tip to the original bill amount
function totalWithGrat(bill) {
    // call the gratuity func with passing in the param
   return gratuity(bill) + bill; 
}

console.log('Your total with tip included is: ' + totalWithGrat(billAmount));