const findlessElementIndex = (array) => {
    let less = array[0];
    let lessIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < less) {
            less = array[i];
            lessIndex = i;
        }
    }
    return lessIndex;
};

const removeArrayValue = (array, index) => {
    array.splice(index, 1);
    return array;
};

const orderingBySelection = (array) => {
    let newArray = [];
    const size = array.length;
    for (let i = 0; i < size; i++) {
        const lessIndex = findlessElementIndex(array);
        newArray.push(array[lessIndex]);
        array = removeArrayValue(array, lessIndex);
    }
    return newArray;
};

const myList = [5, 3, 8, 44, 12];
console.log(orderingBySelection(myList));
