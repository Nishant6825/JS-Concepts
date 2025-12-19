let a = [2, 3, 4];
let b = [5, 6, 7];



function merge(a, b) {
    let resu = [];
    let i = 0;
    let j = 0
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            resu.push(a[i]);
            i++
        } else {
            resu.push(b[j]);
            j++
        }
    }

    while (i < a.length) {
        resu.push(a[i])
        i++
    }
    while (j < b.length) {
        resu.push(b[j])
        j++
    }



    return resu;

}

console.log(merge(a, b));