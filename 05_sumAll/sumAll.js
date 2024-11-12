const sumAll = function(lowNum, highNum) {
    if (lowNum < 0 || highNum < 0) {return 'ERROR'};
    if (typeof lowNum != 'number' || typeof highNum != 'number') {return 'ERROR'};
    if (lowNum % 1 != 0 || highNum % 1 != 0) {return 'ERROR'};

    let total = 0;

    if (lowNum < highNum) {
        for(let i = lowNum; i <= highNum; i++) {
            total += i;
        };
    } else {
        for(let i = highNum; i <= lowNum; i++) {
            total += i;
        };
    };
    return total;
};

// Do not edit below this line
module.exports = sumAll;
