export const validate = (data) => {

    var numberRegex = /^\d+$/;

    var lettersRegex = /^[A-Za-z\s]*$/

    const errors = {}

    if(!lettersRegex.test(data.name)) {
        errors.name = 'Wrong format , letters only'
    } else if(!data.name.length){
        errors.name = "can't be blank"
    } else {
        delete errors.name
    }
    

    if(!data.cardNumber.length){
        errors.cardNumber = "can't be blank"
    }   
    else if(!numberRegex.test(data.cardNumber)) {
        errors.cardNumber = 'Wrong format , numbers only'
    } else if(data.cardNumber.length <16) {
        errors.cardNumber = 'card number is short'
    } else {
        delete errors.cardNumber
    }



    if(!data.month.length){
        errors.month = "can't be blank"
    } else if(!numberRegex.test(data.month)) {
        errors.month = 'numbers only'
    } else if(data.month.length <2) {
        errors.month = 'date is short'
    } else {
        delete errors.month
    }



    if(!data.year.length){
        errors.year = "can't be blank"
    } else if(!numberRegex.test(data.year)) {
        errors.year = 'numbers only'
    } else if(data.year.length <2) {
        errors.year = 'date is short'
    } else {
        delete errors.year
    }



    if(!data.cvc.length){
        errors.cvc = "can't be blank"
    } else if(!numberRegex.test(data.cvc)) {
        errors.cvc = 'numbers only'
    } else if(data.cvc.length <3) {
        errors.cvc = 'date is short'
    } else {
        delete errors.cvc
    }

    return errors

    
}
