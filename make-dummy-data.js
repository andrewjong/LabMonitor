import { setInterval } from 'core-js/library/web/timers'; // ???
import { hydrate } from '../../.cache/typescript/2.6/node_modules/@types/react-dom';

// packages
const argv = require('minimist')(process.argv.slice(2));
const mysql = require('mysql')

console.log('These are the args: ')
console.dir(argv)

let numInstancesCap = 100; // cap on the number of data instances to store in the database

// table node_info
const NODE_INFO_FIELDS = ["id", "owner", "description", "equipment"];
const NODE_IDS = [1, 2, 3];
// table sensor_data
const SENSOR_DATA_FIELDS = ["date", "time", "humidity", "temp_ambient", "temp_ir", "carbon_monoxide", "methane",
    "hydrogen", "sound", "vibration", "battery"];

const INTERVAL_SECONDS = 5; // the delay in seconds in between data insertions


// mysql connection properties
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'labmonitor'
});

let intervalID;
if (argv.c.toLowerCase() === 'start') {
    // code to start generating dummy data 
    console.log('Starting dummy data generation.')

    // check to make sure can log in as root
    // mysql -u root?
    connection.connect((err) => {
        if (err) throw err;
        console.log('MySQL connected successfully');
    })

    // check to make sure mysql server is running
    // { code }

    // check to make sure appropriate labmonitor database exists
    // { code }

    // check to make sure appropriate tables node_info and sensor_data exists
    // { code }

    // continually call addDataPoint every x seconds
    intervalID = setInterval(() => {
        NODE_IDS.forEach(id => {
            addDataPoint(id);
        })
    }, INTERVAL_SECONDS * 1000);

    // will generate data up to i instances. data after i instances will automatically be erased,
    // so as not to fill up the dev's computer space
    // { code }

} else if (argv.c.toLowerCase() === 'stop') {
    // code to gracefully stop generating dummy data
    console.log('Stopping dummy data generation.');

    if (typeof intervalID !== 'undefined')
        clearInterval(intervalID); // stop the callback loop

    // close our MySQL connection
    connection.end(err => {
        if (err) throw err;
        console.log('Connection closed successfully.')
    });
}

/**
 * Adds a datapoint for each node, table
 */
function addDataPoint(id) {
    const fieldsAsStr = SENSOR_DATAFIELDS.join(', ');
    // make some random values
    const values = makeRandomValues(id);
    const valuesAsStr = values.join(', ');
    // add these values into the database
    connection.query(`INSERT INTO ${table} (${fieldsAsStr}) VALUES (${valuesAsStr})`);
}

/**
 * Make random values for a datapoint
 * @param {int} id 
 */
function makeRandomValues(id) {
    const now = new Date();
    const date = makeSQLDate(now);
    const time = makeSQLTime(now);
    const humidity = Math.random() * 50;
    const temp_ambient = Math.random() * 50;
    const temp_ir = Math.random() * 50;
    const carbon_monoxide = Math.random() * 50;
    const methane = Math.random() * 50;
    const hydrogen = Math.random() * 50;
    const sound = Math.random() * 50;
    const vibration = Math.random() * 50;
    const battery = 0;
    // const FIELDS = ["id", "owner", "description", "equipment", "date", "time",
    // "humidity", "temp_ambient", "temp_ir", "carbon_monoxide", "methane", "hydrogen", "sound", "vibration", "battery"];
    return [date, time, humidity, temp_ambient, temp_ir, , carbon_monoxide, methane, hydrogen, sound, vibration, battery]
}

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
    return [year, month, date].join('-');
}

/**
 * Returns a time string in the form that SQL likes
 */
function makeSQLTime() {

}