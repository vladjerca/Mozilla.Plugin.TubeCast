var tabs = require("sdk/tabs");

var regex = (function () {
    return {
        channel: /((http|https):\/\/|)(www\.)?youtube\.com\/(channel\/|user\/)([a-zA-Z0-9\-]{1,})/,
        video: /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/g,
        playlist: /^(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?.*?(?:v|list)=(.*?)(?:&|$)|^(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?(?:(?!=).)*\/(.*)$/
    };
})();

var tubecast = (function () {

    var checkAndExec = function (url) {
        for (var key in regex) {
            var exp = regex[key];
            exp.lastIndex = 0;

            if (exp.test(url)) {
                exp.lastIndex = 0;
                var matches = exp.exec(url);

                var id = null;

                for (var i = matches.length - 1; i >= 0; i--) {
                    console.log(matches[i]);
                    if (!matches[i])
                        continue;
                    console.log(matches[i]);
                    id = matches[i];
                    break;
                }

                return {
                    id: id,
                    type: key
                };
            }
        }
        return null;
    };

    var navigateTo = function (url) {
        tabs.activeTab.url = url;
    };

    var navigate = {
        video: function (id) {
            navigateTo("tubecast:VideoID=" + id);
        },
        channel: function (id) {
            navigateTo("tubecast:ChannelID=" + id);
        },
        playlist: function (id) {
            navigateTo("tubecast:PlaylistID=" + id);
        }
    };

    var execute = function (url, isTest) {
        var result = checkAndExec(url);

        if (!isTest) {
            if (result !== null && result.id !== null) {
                console.log(result.id);
                navigate[result.type](result.id);
            } else navigateTo("http://youtube.com");
        } else
            return result;
    };

    return {
        run: execute
    };

})();

exports.run = tubecast.run;