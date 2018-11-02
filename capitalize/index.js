// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let camelStr = '';
    str.split(' ').forEach(function(word){
        let first = word[0].toUpperCase();
        let second = word.split('').splice(1).join('');
        camelStr = (camelStr === '') ? (camelStr + first + second) : (camelStr + ' ' + first + second);
    });
    return camelStr;
}

module.exports = capitalize;
