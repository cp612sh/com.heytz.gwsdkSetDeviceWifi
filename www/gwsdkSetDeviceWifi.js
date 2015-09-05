/**
 * Created by chaipeixi on 8/31/15.
 */
var exec = require('cordova/exec');

exports.setDeviceWifi = function (ssid, wifikey, appId, success, error) {
    exec(success, error, "gwsdkSetDeviceWifi", "setDeviceWifi", [ssid, wifikey, appId]);
};