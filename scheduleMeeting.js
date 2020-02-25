const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    const timeStart = convertTimeToDate(dayStart);
    const timeEnd = convertTimeToDate(dayEnd);
    const timeMeeting = convertTimeToDate(startTime);
    const durationTimeInNumb = durationMinutes * 60 * 1000;
    const endTimeMeeting = timeMeeting + durationTimeInNumb;
    if (timeMeeting <= timeEnd && timeMeeting >= timeStart &&
        endTimeMeeting <= timeEnd && endTimeMeeting >= timeStart) {
            return true;
    }
    return false;

}

function convertTimeToDate(convertedTime) {
    let d = new Date();
    const arrTime = convertedTime.split(':');
    d.setHours(parseInt(arrTime[0]));
    d.setMinutes(parseInt(arrTime[1]));
    return d.getTime();
}

console.log('her ', scheduleMeeting("7:00",15));     // false
console.log('her ', scheduleMeeting("07:15",30));    // false
console.log('her ', scheduleMeeting("7:30",30));     // true
console.log('her ', scheduleMeeting("11:30",60));    // true
console.log('her ', scheduleMeeting("17:00",45));    // true
console.log('her ', scheduleMeeting("17:30",30));    // false
console.log('her ', scheduleMeeting("18:00",15));    // false