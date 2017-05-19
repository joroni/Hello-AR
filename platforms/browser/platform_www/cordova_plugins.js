cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ezartech.ezar.facedetector/www/FaceInfo.js",
        "id": "com.ezartech.ezar.facedetector.FaceInfo",
        "pluginId": "com.ezartech.ezar.facedetector",
        "clobbers": [
            "FaceInfo"
        ]
    },
    {
        "file": "plugins/com.ezartech.ezar.facedetector/www/facedetector.js",
        "id": "com.ezartech.ezar.facedetector.facedetector",
        "pluginId": "com.ezartech.ezar.facedetector",
        "merges": [
            "ezar"
        ]
    },
    {
        "file": "plugins/com.ezartech.ezar.flashlight/www/flashlight.js",
        "id": "com.ezartech.ezar.flashlight.flashlight",
        "pluginId": "com.ezartech.ezar.flashlight",
        "merges": [
            "ezar"
        ]
    },
    {
        "file": "plugins/com.ezartech.ezar.snapshot/www/snapshot.js",
        "id": "com.ezartech.ezar.snapshot.snapshot",
        "pluginId": "com.ezartech.ezar.snapshot",
        "merges": [
            "ezar"
        ]
    },
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
    "com.ezartech.ezar.facedetector": "0.2.0",
    "com.ezartech.ezar.flashlight": "0.2.2",
    "com.ezartech.ezar.snapshot": "0.2.7",
    "com.ezartech.ezar.videooverlay": "0.2.11",
    "cordova-plugin-whitelist": "1.3.2"
}
// BOTTOM OF METADATA
});