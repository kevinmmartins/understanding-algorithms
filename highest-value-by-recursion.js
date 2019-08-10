const getHigh = (item, item2) => item >= item2 ? item : item2;

const highestValue = (myList, highValue = 0) => {
    const item = myList[0];
    if (myList.length === 0) {
        return highValue;
    }
    return highestValue(myList.splice(1), getHigh(highValue, item));
};

const myList = [5, 3, 8, 44, 12, 172];
console.log(highestValue(myList));
