var Alexa = require('alexa-sdk');
var icloud = require("./find-my-phone.js").findmyphone;
require('dotenv').config()

// set up icloud
icloud.apple_id = process.env.name;
icloud.password = process.env.pass;

//
// get a particular device from the icloud and run a callback function
//
var getDevice = function(callback) {
  var device_name = process.env.device_name;

  icloud.getDevices(function(error, devices) {
    if (error) { throw error; }

    devices.forEach(function(d) {
      if (d.location && d.lostModeCapable && d.name === device_name ) {
        device = d;
      }
    });

    if (device) {
      callback(device)
    }
  });
}

// alexa handlers
var handlers = {
  'HowFarIntent': function () {
    var that        = this,
        myLatitude  = process.env.my_latitude,
        myLongitude = process.env.my_longtitude;

    getDevice(function(device) {
      icloud.getDistanceOfDevice(device, myLatitude, myLongitude, function(err, result) {
        var message = 'She is ' + result.distance.text.replace('m', 'miles') + ' away' +
          ' and will take about ' +  result.duration.text.replace('min', 'minutes') + ' to get home.';
        that.emit(':tell', message);
      });
    });
  },

  'WhereIntent': function () {
    var that = this;

    getDevice(function(device) {
      icloud.getLocationOfDevice(device, function(err, location) {
        that.emit(':tell', location);
      });
    });
  }
};

// Alexa Registry
exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
