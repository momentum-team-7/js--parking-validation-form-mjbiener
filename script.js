console.log('Add validation!');
const form = document.querySelector('#parking-form')
let formIsValid

window.addEventListener('submit', event => {
    event.preventDefault()

})

form.addEventListener('submit', validate)


function validate(event) {
    event.preventDefault();
    if (formIsValid = true) {
    confirmValidForm();
    validateCardNumber();
    validateExpDate();
    validateCarYear();
    validateParkDate();
    totalExpense();
    }  
}


function confirmValidForm() {
    if (formIsValid && form.checkValidity()){
        const validMsgEl = document.querySelector('#total')
        const total = totalExpense ();
        validMsgEl.innerText = `Your total cost is $${total}`
        // const validMsgText = document.querySelector('fullPrice')
        // validMsgText.tostring()
        
    }
}

function validateCardNumber(cardNumber) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(cardNumber))
        return false;

    return luhnCheck(cardNumber);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}


// function validateCardNumber () {
//     let cardInput= document.querySelector("#credit-card")
//     let cardValue= cardInput.value
//     let parentEl= cardInput.parentElement

//     document.getElementsByTagName("label")[4].setAttribute("id", "card-label");
//     let cardLabel = document.querySelector("card-label")
    
//     if (cardValue.length < 16 || cardValue.length > 16 || isNaN(cardValue)) {
//         console.log("Card number is invalid")
//         parentEl.classList.remove("input-valid")
//         cardLabel.textContent = "Credit card number must be 16 digits"
//         parentEl.classList.add("input-invalid")
//         formIsValid = false
//     }   else {
//         console.log("Card number is valid")
//         parentEl.classList.remove("input-invalid")
//         // cardLabel.textContent = "Credit card"
//         parentEl.classList.add("input-valid")
//     }
// }

function validateExpDate() {
    let expDateInput = document.querySelector("#expiration")
    let expValue = expDateInput.value
    let parentEl = expDateInput.parentElement
    
    let today = new Date();
    let todayMonth = today.getMonth() +1;
    let todayYear = today.getFullYear() %100;

    document.getElementsByTagName('label')[6].setAttribute("id", "exp-label");
    let expLabel = document.querySelector("#exp-label");

    let monthValidate = expValue.substring(0, 2);
    let yearValidate = expValue.substring(3);

    if (yearValidate >= todayYear && monthValidate >= todayMonth) {
        console.log("Expiration Date is valid")
        parentEl.classList.remove("input-invalid")
        expLabel.textContent = "Expiration"
        parentEl.classList.add("input-valid")

    }   else {
        console.log("Expiration Date is invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        expLabel.textContent = "Expiration date must be in the future"
        formisvalid = false
        return false
    }

}

function validateCarYear() {
    let carYear = document.querySelector("#car-year");
    let carYearDate = parseInt(carYear.value);
    let currentYear= new Date().getFullYear() + 1;

    if (carYearDate > currentYear) {
        console.log("Car year is invalid")
        formIsValid = false;
        carYear.setCustomValidity('Car year is invalid');

    } else { 
        console.log("Car year is valid")
        carYear.setCustomValidity("");
    }
}   

function validateParkDate(){
    let parkDateInput = document.querySelector("#start-date")
    let parkDateValue = parkDateInput.value
    let parentEl = parkDateInput.parentElement
    let today = new Date ();
    // let day = new Date(parkDateValue).getDay();
    let parkDaysInput = document.querySelector ("#days")
    let parkDaysValue = parkDaysInput.value
    parkDateValue = new Date(parkDateValue);
    
    document.getElementsByTagName("label")[2].setAttribute("id", "date-label");
    let dateLabel = document.querySelector("#date-label")

    if (parkDateValue > today) {
        console.log("parking date is valid")
        dateLabel.textContent = "Date parking"
        parentEl.classList.add("input-valid")
    } else {
        console.log("parking date is invalid")
        parentEl.classList.remove("input-valid")
        dateLabel.textContent = "Enter a future parking date"
        parentEl.classList.add("input-invalid")
        formisvalid = false
    }
}

// # 4 Cost Function - changed to below for # 5
// function totalExpense() {
//     let price = 5
//     const totaldays = document.querySelector('#days').value
//     let fullPrice = totaldays * price
//     console.log (fullPrice);

//     return `Your total cost is $${fullPrice}`;
// }



// #5 code from Amy Monday AM  - returns price but how to add the text "your total price is $ (price)?
// worked with Grant / Albany / Arthur Mon night to debug the price display issue 

function totalExpense () {
    let startDate = document.querySelector('#start-date').value
    let numDays = parseInt(document.querySelector('#days').value, 10)
    console.log(numDays)
    let days = []
    let day = new Date(startDate)

    for (let i = 1; i <= numDays; i++) {
        day = new Date(day.setDate(day.getDate() + 1))
        days.push(day.getDay())
    }

    return days
        .map(day => (day > 0 && day < 6 ? 5 : 7))
        .reduce((total, price) => {
        return (total += price)
    }, 0)
    
}  


