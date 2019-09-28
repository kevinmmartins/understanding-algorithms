function solution(A) {
    let result = null
    const sortedArray= A.sort(orderNumbers)
    if (sortedArray.length===2){
        return (sortedArray[1]-sortedArray[0])/2
    }
    for (let i=0 ; i < sortedArray.length ; i++){
        if (nextIsBigger(sortedArray,i)){
            result = Math.max(result, (sortedArray[i+1]- sortedArray[i]))
        }
    }
    return Math.trunc(result/2)
}

function nextIsBigger(A, i) {
    return (A[i+1] - A[i])>1;
}

function orderNumbers(a, b) {
    return a - b;
}

const myList = [10, 0, 8, 2, -1, 12, 11, 3];
console.log(solution(myList));
