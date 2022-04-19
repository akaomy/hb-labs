'use strict';
// 1. isHometown
// Given a `town`, return `True` if `town` is 'San Francisco'.

//     Arguments:
//         town (str): A town

//     Returns:
//         bool: True if `town` is 'San Francisco'

const isHometown = (town) => {
    return town === 'San Francisco' ? console.log(true) : console.log(false)
}

console.log('isHometown')
isHometown('San Francisco')


// 2. getFullName
// Given `first_name` and `last_name`, return a full name.

//   Arguments:
//       first_name (str): A first name
//       last_name (str): A last name

//   Returns:
//       str: A full name

const getFullName = (first_name, last_name) => {
    console.log(`${first_name} ${last_name}`)
}

console.log('getFullName')
getFullName('John', 'Doe')


// 3. calculateTotal
const calculateTotal = (base_price, state, tax) => {
    // Return the total price of an item, figuring in state taxes and fees.

    // Arguments:
    //     base_price (float): Base price of an item
    //     state (str): Two-letter abbreviation of a U.S. state
    //     tax (float): Tax rate. Defaults to 0.05

    // Returns:
    //     float: The total price of an item

    let subtotal = base_price * (1 + tax)

    let fee = 0
    if (state === "CA"){
        fee = 0.03 * subtotal
    } else if (state === "PA") {
        fee = 2
    } else if (state === 'MA')
        if (base_price <= 100) {
            fee = 1
        } else {
            fee = 3
        }
    console.log(subtotal + fee)
}
console.log('calculateTotal')
calculateTotal(9000, 'CA', 0.09)

