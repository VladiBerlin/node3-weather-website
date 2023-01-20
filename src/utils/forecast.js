const request = require('postman-request');

let forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=e45bd60163a5ce003072b27f1d387ac5&query=' + longitude + ',' + latitude;
    request({url:url, json:true}, (error, response, {current})=>{
        if(error){
            callback('Check your connection', undefined);
        }else if(response.body.error){
            callback('Check the address you sent', undefined);
        }else{
            callback(undefined,'It is ' + current.weather_descriptions + ', and currently ' + current.temperature + ' degrees out. It feels like ' + current.feelslike + ' degrees out, humidity is ' + current.humidity + '% and wind speed is ' + current.wind_speed + ' m/s.');
        }        
    });
}

module.exports = forecast;