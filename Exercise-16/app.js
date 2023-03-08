const bank = (function() {
    // Accounts inside bank
    const accounts = [
        {
            accountNumber: 1223334000, cardNumber: 4433321000, pin: 0000, balance: 300,
        },
        {
            accountNumber: 1223334010, cardNumber: 4455521000, pin: 1234, balance: 10500,
        },
        {
            accountNumber: 1223334100, cardNumber: 4433366600, pin: 0909, balance: 4000,
        },
        {
            accountNumber: 1223334001, cardNumber: 4433327770, pin: 1122, balance: 20000,
        },
        {
            accountNumber: 1223334002, cardNumber: 4433321888, pin: 2311, balance: 16000,
        },   
    ];

    // Check Account Exists and return Index
    const checkAccountExistsAndReturnIndex = function(cardNumber,pin) {
        return accounts.findIndex(account => {
            return account.cardNumber==cardNumber && account.pin==pin;
        });
    }

    // Handle Errors
    const handleErrors = function() {
        console.log("Your Card Number or Pin is incorrect");
    };

    // ATM Function
    const atm = function(cardNumber,pin,amount) {
        console.log("ATM is accessed");
        let accountIndex = checkAccountExistsAndReturnIndex(cardNumber,pin);
        if(accountIndex==-1)
            return handleErrors();
        if(amount>accounts[accountIndex].balance)
            console.log("Insufficient Balance");
        accounts[accountIndex].balance -= amount;

        console.log("Amount Withdrawn: "+amount+"\nCurrent Balance: "+accounts[accountIndex].balance);
    };

    // CDM Function
    const cdm = function(cardNumber,pin,amount) {
        console.log("CDM is accessed");
        let accountIndex = checkAccountExistsAndReturnIndex(cardNumber,pin);
        if(accountIndex==-1)
            return handleErrors();
        accounts[accountIndex].balance += amount;

        console.log("Amount Deposited: "+amount+"\nCurrent Balance: "+accounts[accountIndex].balance);
    };

    return {
        atm: atm, cdm: cdm
    };
})();

bank.atm(4455521000,1234,1250);
bank.atm(4455521000,1235,1000);

bank.cdm(4433321888,2311,450);
bank.cdm(4433321889,2311,1000);