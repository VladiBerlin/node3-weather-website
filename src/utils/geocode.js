const request = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoidmxhZGkyNjAyIiwiYSI6ImNsYXp0ZGo0aDBheHgzbnFuYnh6dHBnanoifQ.S8fvEzktU_vMurO00NU9jQ";

    request({ url, json: true }, (error, { body }) => {
        console.log({ body });
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features == 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log(body.features.length);
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode