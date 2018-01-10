/**
 * Converts a Javascript Date object to a YMD string in the form compatible with MySQL
 * YYYY-MM-DD
 */
function makeSQLDate(dateobj) {
    const year = dateobj.getFullYear();
    let month = dateobj.getMonth() + 1; // add 1 because js months are 0-11
    let date = dateobj.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    return `${year}-${month}-${date}`
}

/**
 * Converts a Javascript Date object to a time string in the form compatible with MySQL
 * HH:MM:SS
 */
function makeSQLTime(dateObj) {
    const hours = dateObj.getHours()
    const min = dateObj.getMinutes()
    const seconds = dateObj.getSeconds()
    return `${hours}:${min}:${seconds}`
}

module.exports = {
    makeSQLDate,
    makeSQLTime
}