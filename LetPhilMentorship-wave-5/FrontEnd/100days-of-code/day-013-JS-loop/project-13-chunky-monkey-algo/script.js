// Create a function that split the array into smaller arrays of length equal to the second argument (number) as returns them as a 2-D array

function chunkArrayInGroups(arr, num) {
    let smallerArrayList = [];
    for (let i = 0; i < arr.length; i += num) {
        let smallerArray = arr.slice(i, i + num);
       smallerArrayList.push(smallerArray);
    }
    return smallerArrayList;
}

// Checking if the function is working correctly
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
