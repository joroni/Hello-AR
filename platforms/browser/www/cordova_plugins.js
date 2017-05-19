cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ezartech.ezar.videooverlay/www/videoOverlay.js",
        "id": "com.ezartech.ezar.videooverlay.videoOverlay",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "merges": [
            "ezar"
        ]
    },
    {
        "file": "plugins/com.ezartech.ezar.videooverlay/www/camera.js",
        "id": "com.ezartech.ezar.videooverlay.camera",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "clobbers": [
            "camera"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "com.ezartech.ezar.videooverlay": "0.2.11"
}
// BOTTOM OF METADATA
});