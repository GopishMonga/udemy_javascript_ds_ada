// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const queue = [root,null];
    const levelWidthArray = [];
    let counter = 0;
    while(queue.length){
        const node = queue.shift();
        if(node){
            counter++;
            queue.push(...node.children);
        }
        else{
            if(counter > 0){
                queue.push(null);
                levelWidthArray.push(counter);
                counter = 0;
            }
        }
    }
    return levelWidthArray;
}

module.exports = levelWidth;
