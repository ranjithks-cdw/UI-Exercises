const pattern = {
    "firstName": /^[a-zA-z]{1,30}/,
    "lastName": /^[a-zA-z]{1,30}/,
    "email": /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    "contactNumber": /[6-9]\d{9}/,
    "pinCode": /[1-9]\d{5}|[1-9]\d{2}\\s\d{3}/,
    "cardNumber": /4[0-9]{15}/,
    "cardExpiryYear": /202[3-9]/,
    "cvv": /\d{3,4}/,
};

(function(){
    const submitButton = document.getElementById("submitBtn").addEventListener("click",validateInputForm);
})();

function validateInputForm(event) {
    event.preventDefault();
    const anyIncorrectDetails = [];
    // Form Inputs
    const inputElements = document.querySelectorAll("input");
    // Validations
    for(let field of inputElements)
        anyIncorrectDetails.push(validateValuesWithPattern(field));

    if(!anyIncorrectDetails.includes(true)) {
        return true;
    }
    return false;
}

function validateValuesWithPattern(inputDOM) {
    let isError = false;
    let errorMessage = "";
    const errorMessageDOM = document.getElementById(`${inputDOM.id}Error`);

    if(!pattern[inputDOM.id].test(inputDOM.value)) {
        isError = true;
        errorMessage = `${inputDOM.name} is not valid`;
    }

    if(inputDOM.value=="") {
        console.log(inputDOM.value);
        isError = true;
        errorMessage = `${inputDOM.name} is required`;
    }

    if(isError) {
        errorMessageDOM.innerText = errorMessage;
        inputDOM.classList.add("error-input");
    }
    else {
        errorMessageDOM.innerText = "";
        inputDOM.classList.remove("error-input")
    }
    return isError;
}