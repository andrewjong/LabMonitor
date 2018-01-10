/**
 * Returns a date string in the form that SQL likes
 */
function makeSQLDate(dateobj) {
    let year = dateobj.getFullYear();
    let month = dateobj.getMonth() + 1;
    let date = dateobj.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    return [year, month, date].join('-');
}

/**
 * Returns a time string in the form that SQL likes
 */
function makeSQLTime() {

}

module.exports = {
    makeSQLDate,
    makeSQLTime
}