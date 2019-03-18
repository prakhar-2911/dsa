//function returns true or false or a string passed to knwo whether it is a palndrome or not.


//sol 1
function palindrome(str){

    return str.split('').every((char, i) => {
        return char === str[str.length-i-1];

    });
}


//sol 1
// function palindrome(str){
//     const reversed = str
//     .split('')
//     .reverse()
//     .join('');
    
//     return reversed === str;
//     }


 modile.exports = palinidrome;