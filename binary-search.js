const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const center = Math.trunc((low + high) / 2);
        const attempt = list[center];
        if (item === attempt) {
            return center
        }
        if (attempt > item) {
            high = center - 1
        } else {
            low = center + 1
        }
    }
    return null
};

const myList = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, 7));
console.log(binarySearch(myList, 40));
console.log(binarySearch(myList, -5));
