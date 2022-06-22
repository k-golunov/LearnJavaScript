function sortByAge(arr) {
    arr.sort((item1, item2) => item1.age > item2.age ? 1 : -1);
}