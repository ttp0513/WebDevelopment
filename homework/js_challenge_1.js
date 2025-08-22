// Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles,
// return a string for the average time it took to run each mile in the format "MM:SS"

function milePace(miles, duration) {
    const [minStr, secStr] = duration.split(":");
    const totalSeconds = parseInt(minStr)*60 + parseInt(secStr);
    const avgSeconds = Math.round(totalSeconds/miles);
    const minutes = Math.floor(avgSeconds/60).toString().padStart(2,"0");
    const seconds = (avgSeconds % 60).toString().padStart(2,"0");
    return `${minutes}:${seconds}`
}

console.log(milePace(3, "24:00"));