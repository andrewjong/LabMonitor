const argv = require('minimist')(process.argv.slice(2));
console.log('These are the args: ')
console.dir(argv)

let numInstancesCap = 100; // cap on the number of data instances

if (argv.c.toLowerCase() === 'start') {
    // code to start generating dummy data 
    console.log('Starting dummy data generation.')

    // will generate data up to i instances. data after i instances will automatically be erased,
    // so as not to fill up the dev's computer space

} else if (argv.c.toLowerCase() === 'stop') {
    // code to gracefully stop generating dummy data
    console.log('Stopping dummy data generation.')

}