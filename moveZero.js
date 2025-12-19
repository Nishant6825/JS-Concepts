let arr = [2, 0, 4, 0, 9, 0, 39];

function remove(arr) {


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let zeroArray = []

        if (element === 0) {
            zeroArray.push(arr[i])
            arr.splice(i, 1);
        }

        arr = [...arr, ...zeroArray]

    }

    return arr;

}

console.log(remove(arr));