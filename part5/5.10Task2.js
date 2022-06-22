function topSalary(salaries){
    let maxSal = 0;
    let maxName = null;
    
    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
        maxSal = salary;
        maxName = name;
        }
    }

  return maxName;
    
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};