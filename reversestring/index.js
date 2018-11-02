// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// Solution 1 return str.split('').reverse().join('');
//    Solution 2
//    let reversed = '';  
//    for (let character of str){
//        reversed = character + reversed;
//    }
//    return reversed;
function reverse(str) {
//    return str.split('').reduce((reversed,character)=>{
//        return character + reversed;
//    },'');  
    
    return str.split('').reduce((rev,char)=>char+rev,'');
}

module.exports = reverse;