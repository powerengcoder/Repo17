const workDays = ["MON", "TUE", "WED", "THU", "FRI"];

function myWeek(days){
    const week =[...workDays, ...days];
    return week;
}

console.log(myWeek(["SAT", "SUN"]));
module.exports = myWeek;