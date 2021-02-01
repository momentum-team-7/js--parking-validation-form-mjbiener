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
        // const validMsgText = document.querySelector('fullPrice')
        // let cost = validMsgText.tostring()
        validMsgEl.innerText = totalExpense()
    }
}


function validateCardNumber () {
    let cardInput= document.querySelector("#credit-card")
    let cardValue= cardInput.value
    let parentEl= cardInput.parentElement

    document.getElementsByTagName("label")[4].setAttribute("id", "card-label");
    let cardLabel = document.querySelector("card-label")
    
    if (cardValue.length < 16 || cardValue.length > 16 || isNaN(cardValue)) {
        console.log("Card number is invalid")
        parentEl.classList.remove("input-valid")
        cardLabel.textContent = "Credit card number must be 16 digits"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }   else {
        console.log("Card number is valid")
        parentEl.classList.remove("input-invalid")
        // cardLabel.textContent = "Credit card"
        parentEl.classList.add("input-valid")
    }
}

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
        formIsValid = false

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


function totalExpense() {
    let price = 5
    const totaldays = document.querySelector('#days').value
    let fullPrice = totaldays * price
    console.log (fullPrice);

    return `Your total cost is $${fullPrice}`;
}


 


// Trying to figure out how to make # 5 work from Dawud's ideas Friday

// function formatDate (date){
//     let startDate = document.querySelector('#start-date').value;
//     let actualDate = startDate.replace(/-/g, '/');
//     console.log (actualDate)
// }

// function changeDate(date) {
    // let newDate = date.replace(/-/g, '\/');
//     console.log (newDate);
//     return newDate
// }



// function dayofweek(startDate) {
//     let startDate = document.querySelector('#start-date').value
//     let actualDate = startDate.replace ( /-/g , '/');
//     let d = new Date(actualDate).dayofweek();
//     console.log(d);

//     return d;
// }




//below code copied from assignment notes for # 6//
// removed