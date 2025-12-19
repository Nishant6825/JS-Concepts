function allSubarrays(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let sub = [];
        for (let j = i; j < arr.length; j++) {
            sub.push(arr[j]);
            result.push([...sub]);

        }
    }
    return result;
}

console.log(allSubarrays([1, 2, 3]));