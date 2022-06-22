function unique(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++){
        set.add(arr[i]);
    }
    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare,Krishna,:-O