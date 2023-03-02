function validateInputForm() {
    const anyIncorrectDetails = [];
    // Form Inputs
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let contactNumber = document.getElementById("contactNumber");
    let pinCode = document.getElementById("pinCode");
    let cardNumber = document.getElementById("cardNumber");
    let expiryYear = document.getElementById("cardExpiryYear");
    let cvv = document.getElementById("cvv");

    // Patterns
    let namePattern =  /[a-zA-Z]{1,30}/;
    let emailPattern = /(?=^.{0,50}$)(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)/;
    let contactNumberPattern = /[6-9]\d{9}/;
    let pinCodePattern = /[1-9]\d{5}|[1-9]\d{2}\\s\d{3}/;
    let cardNumberPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    let expiryYearPattern = /202[3-9]/;
    let cvvPattern = /\d{3,4}/;

    // Validations
    anyIncorrectDetails.push(validateValuesWithPattern(firstName,namePattern,"First Name","firstNameError"));
    anyIncorrectDetails.push(validateValuesWithPattern(lastName,namePattern,"Last Name","lastNameError"));
    anyIncorrectDetails.push(validateValuesWithPattern(email,emailPattern,"Email Address","emailError"));
    anyIncorrectDetails.push(validateValuesWithPattern(contactNumber,contactNumberPattern,"Contact Number","contactNumberError"));
    anyIncorrectDetails.push(validateValuesWithPattern(pinCode,pinCodePattern,"PIN Code","pinCodeError"));
    anyIncorrectDetails.push(validateValuesWithPattern(cardNumber,cardNumberPattern,"Card Number","cardNumberError"));
    anyIncorrectDetails.push(validateValuesWithPattern(expiryYear,expiryYearPattern,"Card Expiry","cardExpiryYearError"));
    anyIncorrectDetails.push(validateValuesWithPattern(cvv,cvvPattern,"CVV","cvvError"));

    if(!anyIncorrectDetails.includes(true))
        location.href = "success.html";
    return false;
}

function validateValuesWithPattern(inputDOM,pattern,fieldName,errorId) {
    let isError = false;
    let errorMessage = "";

    if(!pattern.test(inputDOM.value)) {
        isError = true;
        errorMessage = fieldName+" is not valid";
    }

    if(inputDOM.value=="") {
        isError = true;
        errorMessage = fieldName+" is required";
    }

    if(isError) {
        document.getElementById(errorId).innerText = errorMessage;
        inputDOM.classList.add("error-input");
    }
    return isError;
}