function timeConversion(s) {
    /*
     * Write your code here.
     */
    let isPm = s.includes('P') || s.includes('p');
    let m =s.slice(0, s.length - 2); 
    let arr = m.split(':');
    if (isPm) {
        if (parseInt(arr[0]) != 12) {
            arr[0] = parseInt(arr[0]) + 12;
        }
        return arr.join(':');
    } else {
        if (parseInt(arr[0]) == 12) {
            arr[0] = '00';
            return arr.join(':');
        }
        return m;
    }
}
// console.log(timeConversion('07:05:45PM'));
// console.log(timeConversion('07:05:45AM'));
// console.log(timeConversion('12:00:00PM'));
// console.log(timeConversion('00:00:00PM'));
console.log(timeConversion('12:00:10PM'));