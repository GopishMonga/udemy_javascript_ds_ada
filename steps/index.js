// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//function steps(n) {
//    for(let i=1;i<=n;++i){
//        console.log('#'.repeat(i)+' '.repeat(n-i));
//    }
//}

function steps(n,i=1){
    if(i>n){return;}
    console.log('#'.repeat(i)+' '.repeat(n-i));
    steps(n,i+1);
}
function recursion(n,i){
    if(i>n){return;}
    console.log('#'.repeat(i)+' '.repeat(n-i));
    recursion(n,i+1);
}

module.exports = steps;
