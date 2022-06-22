function unique(arr) {
    let result = [];

    for (let word of arr) {
        if (!result.includes(word)) {
        result.push(word);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));