const quicksort = (array) => {
    if (array.length < 2) {
        return array;
    }
    const pivo = array[0];
    const arrayWithoutPivo = array.splice(1);
    const less = arrayWithoutPivo.filter((item) => item <= pivo);
    const bigger = arrayWithoutPivo.filter((item) => item > pivo);
    return quicksort(less).concat([pivo], quicksort(bigger));
};

const myList = [5, 3, 8, 44, 12];
console.log(quicksort(myList));
