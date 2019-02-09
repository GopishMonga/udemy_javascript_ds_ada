// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min!==i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length===1)return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
    const merged = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            merged.push(left.shift());
        }else{
            merged.push(right.shift());
        }
    }
    return [...merged,...left,...right];
    // ES6 syntax to shorten below code
    /*let remainingArray = (left.length)?left:right;
    while(remainingArray.length){
        merged.push(remainingArray.shift());
    }
    return merged;
    */
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge};
