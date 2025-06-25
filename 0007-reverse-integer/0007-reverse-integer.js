/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x > 0) {
        let digit = x % 10;
        result = result * 10 + digit;
        x = Math.floor(x / 10);
    }

    result = result * sign;

    // Handle 32-bit overflow
    if (result > 2**31 - 1 || result < -(2**31)) {
        return 0;
    }

    return result;
};
