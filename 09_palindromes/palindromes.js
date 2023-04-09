const palindromes = function(a) {
    let string = a.toLowerCase().replace(/[^a-z]/g, "");
    return string.split("").reverse().join("") == string;
};

// Do not edit below this line
module.exports = palindromes;
