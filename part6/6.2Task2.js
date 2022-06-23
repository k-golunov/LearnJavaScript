function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
}