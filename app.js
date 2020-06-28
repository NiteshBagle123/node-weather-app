const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const place = process.argv[2] || 'India';

geocode(place, (error, { latitude, longitide, location } = {}) => {
    if(error){
        return console.log(error);
    }
    console.log(latitude, longitide, location);
    forecast(latitude, longitide, (error, { temperature, precip, description } = {}) => {
        if(error){
            console.log(error);
        } else {
            console.log(`current temperature is ${temperature} degrees out and ${precip}% chance of rain, weather description:${description}`);
        }
    })
});

