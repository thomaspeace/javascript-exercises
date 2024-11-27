const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS';
    }
    if (number == 0) {
        return 0
    }
    if (number == 1 || number == 2) {
        return 1
    }
    
    number = parseInt(number);

    let fibArray = [1, 1];

    for (let i = 0; i < number - 2; i++) {
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    }
    return fibArray.pop()
};

// Do not edit below this line
module.exports = fibonacci;
