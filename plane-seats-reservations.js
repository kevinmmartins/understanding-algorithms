function solution(N, S) {
    let avaliableSeats= 0
    for (let i=1 ; i<= N; i++){
        avaliableSeats = avaliableSeats + firstRow(i,S) + secondRow(i,S) + thirdRow(i,S)
    }
    return avaliableSeats
}

function firstRow(index, seatsUsed){
    if (!seatsUsed.includes(index+"A") && !seatsUsed.includes(index+"B") && !seatsUsed.includes(index+"C")){
        return 1
    }
    return 0
}

function secondRow(index, seatsUsed) {
    if (!(seatsUsed.includes(index+"D") && seatsUsed.includes(index+"G")) && !(seatsUsed.includes(index+"E") || seatsUsed.includes(index+"F"))){
        return 1
    }
    return 0
}

function thirdRow(index, seatsUsed) {
    if (!seatsUsed.includes(index+"H") && !seatsUsed.includes(index+"J") && !seatsUsed.includes(index+"K")){
        return 1
    }
    return 0
}

const seats = "1A 2F 1C"
console.log(solution(2,seats))
