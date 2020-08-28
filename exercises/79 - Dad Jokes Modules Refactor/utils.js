// Named export

export default function randomItemFromArray(arr, not) {
        const item = arr[Math.floor(Math.random() * arr.length)];
        // If the thing that we pass in is the last version then we don't want to return that same thing again.
        if (item === not) {
                console.log('Ahh we used that one last time, look again');
                console.log(not);
                return randomItemFromArray(arr, not);
        }
        return item;
}
