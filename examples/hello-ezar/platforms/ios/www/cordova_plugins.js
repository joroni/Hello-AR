cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.ezartech.ezar.facedetector.FaceInfo",
        "file": "plugins/com.ezartech.ezar.facedetector/www/FaceInfo.js",
        "pluginId": "com.ezartech.ezar.facedetector",
        "clobbers": [
            "FaceInfo"
        ]
    },
    {
        "id": "com.ezartech.ezar.facedetector.facedetector",
        "file": "plugins/com.ezartech.ezar.facedetector/www/facedetector.js",
        "pluginId": "com.ezartech.ezar.facedetector",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "com.ezartech.ezar.flashlight.flashlight",
        "file": "plugins/com.ezartech.ezar.flashlight/www/flashlight.js",
        "pluginId": "com.ezartech.ezar.flashlight",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "com.ezartech.ezar.snapshot.snapshot",
        "file": "plugins/com.ezartech.ezar.snapshot/www/snapshot.js",
        "pluginId": "com.ezartech.ezar.snapshot",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "com.ezartech.ezar.videooverlay.videoOverlay",
        "file": "plugins/com.ezartech.ezar.videooverlay/www/videoOverlay.js",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "com.ezartech.ezar.videooverlay.camera",
        "file": "plugins/com.ezartech.ezar.videooverlay/www/camera.js",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "clobbers": [
            "camera"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ezartech.ezar.facedetector": "0.2.0",
    "com.ezartech.ezar.flashlight": "0.2.2",
    "com.ezartech.ezar.snapshot": "0.2.7",
    "com.ezartech.ezar.videooverlay": "0.2.11",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});