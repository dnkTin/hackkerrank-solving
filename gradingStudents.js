function gradingStudents(grades) {
    // Write your code here
    let a =  grades.map((item) => {
        if (item < 38) {
            return item;
        }
        let remainder = item % 10;
        let needRoundTo5 = ((5 - remainder > 0) && (5 - remainder < 3)) ? true : false;
        if (needRoundTo5) {
            let a = parseInt(item / 10) * 10 + 5;
            return a;
        }
        let needRoundTo10 = ((10 - remainder > 0) && (10 - remainder) < 3) ? true : false;
        if (needRoundTo10) {
            let a = parseInt(item / 10) * 10 + 10;
            return a;
        }
        return item;
    });
    return a;
}

console.log([39, 60].map((item) => item * 10));

console.log(gradingStudents([43, 60]));