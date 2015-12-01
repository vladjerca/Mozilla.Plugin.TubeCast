var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var youtube = require("./tubecast");

var button = buttons.ActionButton({
    id: "tubecast-link",
    label: "Cast Video",
    icon: {
        "16": "./tc16.png",
        "32": "./tc32.png",
        "64": "./tc64.png"
    },
    onClick: handleClick
});


function handleClick(state) {
    var currentUrl = tabs.activeTab.url;

    youtube.run(currentUrl);
}