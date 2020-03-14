const swapPosition = (list, i) => {
    const bigger = list[i]
    list[i]= list[i + 1]
    list[i+1]= bigger
}

const bubbleSort = (list) => {
    let swap = true
    while (swap) {
        swap= false
        for (let i=0 ; i<(list.length -1) ; i++){
            if (list[i]> list[i+1]){
                swapPosition(list, i)
                swap= true
            }
        }
    }
    return list
}

const myList = [5, 3, 8, 44, 12, 172];
console.log(bubbleSort(myList));
