console.log('Add validation!');
const form = document.querySelector('#parking-form')
let formIsValid

window.addEventListener('submit', event => {
    event.preventDefault()
    confirmValidForm
})


// dayofweek();


form.addEventListener('click', validate)

function validate(event) {
    formIsValid = true
    confirmValidForm()
}


function confirmValidForm() {
    if (formIsValid && form.checkValidity()){
        const validMsgEl = document.querySelector('#total')
        // const validMsgText = document.querySelector('fullPrice')
        // let cost = validMsgText.tostring()
        validMsgEl.innerText = totalExpense()
    }
}



function totalExpense() {
    let price = 5
    const totaldays = document.querySelector('#days').value
    let fullPrice = totaldays * price
    return `Your total cost is $${fullPrice}`
    console.log (fullPrice)
}






function formatDate (date){
    let startDate = document.querySelector('#start-date').value;
    let actualDate = startDate.replace(/-/g, '\/');
    console.log (actualDate)
}

// function changeDate(date) {
//     let newDate = date.replace(/-/g, '\/');
//     console.log (newDate);
//     return newDate
// }


// dfd
// 


function dayofweek(startDate) {
    let actualDate = startDate.replace(/-/g, '\/');
    let d = new Date(actualDate).dayofweek();
    console.log(d);

    return d;
}




//below code copied from assignment notes //

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
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
}``