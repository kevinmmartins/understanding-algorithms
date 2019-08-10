const sumByRecursion = (myList) => {
    if (myList.length === 1) {
        return myList[0];
    }
    return myList[0] + sumByRecursion(myList.splice(1));
};

const myList = [5, 3, 8, 44, 12];
console.log(sumByRecursion(myList));
