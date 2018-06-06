function validatePIN (pin){
    // /^([0-9]{4} || [0-9]{6})$/  <== can also be coded below as: 
    res =  /^(\d{4}|\d{6})$/.test(pin)
        return res
    }