var exec = require('cordova/exec');
var channel = require('cordova/channel');
var config = ''

    channel.onCordovaReady.subscribe(function () {
        exec((res) => {
            config = res
        },  function (msg) {
            console.error('BuildInfo init fail');
            console.error(msg);
        }, 'apiHost', 'getBuildConfig', ['API_HOST']);
    })



function getConfig () {
    return config
}
module.exports = {
    getConfig: getConfig
};
// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'test2', 'coolMethod', [arg0]);
// };
