var customerName = 'bob'
var bestCustomer
const leastFavoriteCustomer = 'gamze'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName
}
//ASK: why tests fail when I invoke upperCaseCustomerName function here
// upperCaseCustomerName()
function setBestCustomer() {
    bestCustomer = 'not bob';
}


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'ogulcan'
}
