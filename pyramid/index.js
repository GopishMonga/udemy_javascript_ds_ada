// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n,i=1) {
    if(i > 2*n-1) return;
    let margin = ((2*n)-1-i)/2;
    console.log(' '.repeat(margin) + '#'.repeat(i) + ' '.repeat(margin));
    pyramid(n,i+2);
}

module.exports = pyramid;
