const numberOfItems = (myList) => {
    if (myList.length === 1) {
        return 1;
    }
    return 1 + numberOfItems(myList.splice(1));
};

const myList = [5, 3, 8, 44, 12];
console.log(numberOfItems(myList));
