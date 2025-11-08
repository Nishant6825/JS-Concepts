let newMap = new Map();

newMap.set("Alice", 85);
newMap.set("Bob", 92);


// Function is for iterating over a map and deleting a key value according to conditions
function editMap() {
    for (const [key, value] of newMap) {
        if (key === 'Bob') {
            newMap.delete('Alice')
        }
    }
    console.log(newMap);

    return newMap.size;
}



// console.log(editMap(newMap));


function valueGreaterThan80(map) {
    for (const [key, value] of map) {
        if (value > 80) {
            console.log(key);
        }
    }
}

// valueGreaterThan80(newMap)

function convertIntoArray(map) {
    let arr = Array.from(map);
    return arr;
}


// console.log(convertIntoArray(newMap));


/*
Example 1
Write a function that takes a string like
"apple banana apple orange banana apple", 
and returns a Map showing how many times each word appears.


Example 2
Given an array [1, 2, 2, 3, 4, 4, 4, 5],
use a Map to count how many times each number appears.

*/

// let str = "apple banana apple orange banana apple"
let str = [1, 2, 2, 3, 4, 4, 4, 5]

function getCount(str) {
    let splitedArray = [];
    if (typeof str != 'object') {

        splitedArray = str.split(' ');
    }
    splitedArray = str

    let map = new Map();

    for (let i = 0; i < splitedArray.length; i++) {
        const element = splitedArray[i];

        if (!map.has(element)) {
            map.set(element, 1);
        } else if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
    }
    return map;
}

console.log(getCount(str));
