// create variables for each of the form inputs
const firstName = $('#fname');
const lastNme = $('#lname');
const email = $('#email');
const number = $('#number');
// create an array named required
const required = [];
// store the variables name, email, and phone number
required.push(name, email, number);
// Utilize a for loop to iterate of the entire required array
console.log(required);
for(item of required) {
    if(item.val() == '') {
        message.text('Please Fill Out Required Fields').addClass("warning");
        item.labels().addClass('warning');
    }
}

if($('label.warning').length == )