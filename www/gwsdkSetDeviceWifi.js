/**
 * Created by chaipeixi on 8/31/15.
 */
var exec = require('cordova/exec');

exports.setDeviceWifi = function (ssid, wifikey, appId, productKey, uid, token, success, error) {
    exec(success, error, "gwsdkwrapper", "setDeviceWifi", [ssid, wifikey, appId, productKey, uid, token]);
};