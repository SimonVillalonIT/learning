function findSmallest(arr: number[]) {
    let smallest = arr[0]
    let smallest_index = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallest_index = i
        }
    }
    return smallest_index
}

function selectionSort(arr: number[]) {
    let newArr: number[] = []
    let copyArr: number[] = [...arr]
    for (let i = 0; i < arr.length; i++) {
        let smallest = findSmallest(copyArr)
        newArr.push(copyArr.splice(smallest, 1)[0])
    }
    return newArr
}

console.log(selectionSort([4, 3, 2, 1]))
