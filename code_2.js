
// Question
// Given an object data, return the data multiple by 3 and sort the data.
// Expected output: {j: 0, k: 9, i: 18, l: 36}

// convert from object to a multi-level array.
const data = {i: 6, j: null, k: 3, l: 12};

for (const key in data){
    const newData = (`${key}: ${data[key]*3}`);

    console.log(Array.isArray(newData));

    //console.log(newData);

    /**
     * let sorting = [];
    for (const alphabet in newData){
        sorting.push([alphabet, newData[alphabet]]);
    }

    sorting = sorting.sort(function(a, b){
        return a[1] - b[1];
    });

    console.log(sorting);
     */
}

let sorting = [];
for (const alphabet in newData){
    sorting.push([alphabet, newData[alphabet]]);
}

sorting.sort(function(a, b){
    return a[1] - b[1];
});

sorting = Object.fromEntries(sorting);

console.table(sorting);

var arrayOfData = Object.entries(data);

console.log(arrayOfData);

var a = [['i', 1], ['j', 2], ['l', 3]].map(function(x) {return x * 3});

console.log(a);

console.log(arrayOfData);

const data = {i: 6, j: null, k: 3, l: 12};

// Main function.
function result(data){
    var arrayOfData = Object.entries(data);

    let sorting = [];
    for (let alphabet in data){
        sorting.push([alphabet, data[alphabet]]);
    }

    sorting.sort(function(a, b){
        return a[1] - b[1];
    });

    sorting = Object.fromEntries(sorting);

    return sorting;
}

console.log(result(data));

// =============================================================== //


// good example of working sorting and multi-level array to object.
let meow = {a: 1, b: 2, c: 0};

let sortable = [];
for (let alphabet in meow){
    sortable.push([alphabet, meow[alphabet]]);
}

sortable.sort(function(a, b){
    return a[1] - b[1];
});

sortable = Object.fromEntries(sortable);

console.log(sortable);
