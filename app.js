const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=9fa0798af554b948b4010a6010f0a271&query=37.8267,-122.4233';

request({ url }, (err, data)=> {
    if(err){
        console.log(`Error occured:${err}`);
    } else {
        const response = JSON.parse(data.body);
        console.log(response.current);
    }
});