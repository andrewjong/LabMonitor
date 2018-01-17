const argv = require('minimist')(process.argv.slice(2));
const mysql = require('mysql');
const { makeSQLDate, makeSQLTime } = require('./mysql-helpers');
const logger = require('./logger')
const {DATABASE, NODE_TABLE, NODE_TABLE_FIELDS, SENSOR_TABLE, SENSOR_TABLE_FIELDS} = require ('./database-config');


// see what arguments are passed in
logger.debug('These are the passed args: ')
logger.debug(argv)

const MAX_DATA_CAP = argv.max || 100; // cap on the number of data instances to store in the database
const INTERVAL_SECONDS = 2; // the delay in seconds in between data insertions

// the ids to insert dummy data for
const NODE_IDS = [1, 2, 3];

// mysql connection properties
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: DATABASE
});

let timeObj; // the time object returned by setInterval, so we can halt it later

// Handle the command to start
if (argv.c.toLowerCase() === 'start') {
    // code to start generating dummy data 
    logger.info('Starting dummy data generation.')

    // check to make sure can log in as root
    // mysql -u root?
    connection.connect((err) => {
        if (err) throw err;
        logger.verbose('MySQL connected successfully');
    });

    // TODO: check to make sure mysql server is running
    // { code }

    // TODO: check to make sure appropriate labmonitor database exists
    // { code }

    // TODO: check to make sure appropriate tables node_info and sensor_data exists
    // { code }

    // continually call addDataPoint every x seconds
    let count = 1;
    timeObj = setInterval(() => {
        NODE_IDS.forEach(id => {
            addDataPoint(id);
            capMaxDataPoints();
        })
        logger.info(`Added ${count} rows each for ${NODE_IDS.length} nodes`)
        count++;
    }, INTERVAL_SECONDS * 1000);

} else if (argv.c.toLowerCase() === 'stop') {
    // code to gracefully stop generating dummy data
    logger.warn('THIS COMMAND IS CURRENTLY NOT WORKING')
    logger.info('Stopping dummy data generation.');

    if (typeof timeObj !== 'undefined')
        clearInterval(timeObj); // stop the callback loop
    else
        logger.info("No Dummy data generation process to stop.")

    // close our MySQL connection
    connection.end(err => {
        if (err) throw err;
        logger.info('Connection closed successfully.')
    });
}
/**
 * Adds a datapoint for each node, table
 * @param {int} id the id of the node
 */
function addDataPoint(id) {
    const fieldsAsStr = SENSOR_TABLE_FIELDS.join(', ');
    // make some random values
    const values = makeRandomValues(id);
    const valuesAsStr = values.join(', ');
    // add these values into the database
    const query = `INSERT INTO ${SENSOR_TABLE} (${fieldsAsStr}) VALUES (${valuesAsStr})`;
    logger.verbose(query);
    connection.query(query);
}

/**
 * Make random values for a datapoint
 * @param {int} id the id of the node
 * @returns an array containing values for each field
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
    return [id, date, time, humidity, temp_ambient, temp_ir, carbon_monoxide, methane, hydrogen, sound, vibration, battery]
}

/**
 * If the database is filled more datapoints than the cap, delete the oldest piece of data. This is to save computer space
 */
let hasCapped = false;
function capMaxDataPoints() {
    const countQuery = `SELECT count(*) AS numRows FROM ${SENSOR_TABLE}`
    connection.query(countQuery, (err, results) => {
        if (err) throw err;

        const count = results[0].numRows;
        logger.debug(`Num rows in ${SENSOR_TABLE} = ${count}`);

        if (count > MAX_DATA_CAP) {
            logger.verbose(`Database length is greater than MAX_DATA_CAP (${MAX_DATA_CAP})`);
            if (!hasCapped) {
                logger.info('Number of datapoints capped.')
                hasCapped = true;
            }

            const deleteQuery = `DELETE FROM ${SENSOR_TABLE} ORDER BY date, time, id DESC LIMIT 1`;
            connection.query(deleteQuery, (err) => {
                if (err) throw err;
                logger.debug('1 row deleted');
                logger.verbose(`Number of datapoints capped at ${MAX_DATA_CAP}.`);
            });
        }
    });
}


/* Graceful exit code to catch Ctrl-C */
// this part is windows specific
if (process.platform === "win32") {
    const rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("SIGINT", function () {
        process.emit("SIGINT");
    });
}
process.on("SIGINT", function () {
    //graceful shutdown
    logger.debug('Interrupt message caught');
    connection.end(err => {
        if (err) throw err;
        logger.info('Connection closed successfully.')
        process.exit();
    });
});
