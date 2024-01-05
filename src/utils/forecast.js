const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url='http://api.weatherstack.com/current?access_key=eb0071d80e7cf4cf9b44ac9c53d89cbf&query='+latitude+','+longitude;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            JSON.stringify(body)
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')

        }
    })
}

module.exports = forecast