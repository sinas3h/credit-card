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
    }
    else {
        delete errors.cardNumber
    }



    if(!data.month.length){
        errors.month = "can't be blank"
    } else if(!numberRegex.test(data.month)) {
        errors.month = 'numbers only'
    }   else {
        delete errors.month
    }



    if(!data.year.length){
        errors.year = "can't be blank"
    } else if(!numberRegex.test(data.year)) {
        errors.year = 'numbers only'
    } else {
        delete errors.year
    }



    if(!data.cvc.length){
        errors.cvc = "can't be blank"
    } else if(!numberRegex.test(data.cvc)) {
        errors.cvc = 'numbers only'
    } else {
        delete errors.cvc
    }

    return errors

    
}
