var tubecast = require("../tubecast");

var links = (function () {
    var videoLinks = [
         'http://www.youtube.com/watch?v=iwGFalTRHDA',
         'https://www.youtube.com/watch?v=iwGFalTRHDA',
         'http://www.youtube.com/watch?v=iwGFalTRHDA&feature=related',
         'http://youtu.be/iwGFalTRHDA',
         'http://www.youtube.com/embed/watch?feature=player_embedded&v=iwGFalTRHDA',
         'http://www.youtube.com/embed/watch?v=iwGFalTRHDA',
         'http://www.youtube.com/embed/v=iwGFalTRHDA',
         'http://www.youtube.com/watch?feature=player_embedded&v=iwGFalTRHDA',
         'http://www.youtube.com/watch?v=iwGFalTRHDA',
         'www.youtube.com/watch?v=iwGFalTRHDA',
         'www.youtu.be/iwGFalTRHDA', 'youtu.be/iwGFalTRHDA',
         'youtube.com/watch?v=iwGFalTRHDA',
         'http://www.youtube.com/watch/iwGFalTRHDA',
         'http://www.youtube.com/v/iwGFalTRHDA',
         'http://www.youtube.com/v/iwGFalTRHDA',
         'http://www.youtube.com/watch?v=i-GFalTRHDA&feature=related',
         'http://www.youtube.com/attribution_link?u=/watch?v=iwGFalTRHDA&feature=share&a=9QlmP1yvjcllp0h3l0NwuA',
         'http://www.youtube.com/attribution_link?a=fF1CWYwxCQ4&u=/watch?v=iwGFalTRHDA&feature=em-uploademail',
         'http://www.youtube.com/attribution_link?a=fF1CWYwxCQ4&feature=em-uploademail&u=/watch?v=iwGFalTRHDA'
    ];

    var playlistLinks = [{
        url: "https://www.youtube.com/playlist?list=PL7-NrfuNPRyycmEsJ0W0BQvFdCfxaKWKl",
        expected: "PL7-NrfuNPRyycmEsJ0W0BQvFdCfxaKWKl"
    }, {
        url: "https://www.youtube.com/playlist?list=PL7-NrfuNPRywfyfEynNN3txGf5u6Q3FjT",
        expected: "PL7-NrfuNPRywfyfEynNN3txGf5u6Q3FjT"
    }, {
        url: "https://www.youtube.com/playlist?list=PL7-NrfuNPRyzP4iboNt8maKsZotttVvVT",
        expected: "PL7-NrfuNPRyzP4iboNt8maKsZotttVvVT"
    }, {
        url: "https://www.youtube.com/playlist?list=PL7-NrfuNPRyyq-ryDeNcsYTxp_bV1WZC5",
        expected: "PL7-NrfuNPRyyq-ryDeNcsYTxp_bV1WZC5"
    }, {
        url: "https://www.youtube.com/playlist?list=PL7-NrfuNPRyzKh6OOVICRFFNC37GqcaKP",
        expected: "PL7-NrfuNPRyzKh6OOVICRFFNC37GqcaKP"
    }, {
        url: "https://www.youtube.com/playlist?list=PL7-NrfuNPRyycmEsJ0W0BQvFdCfxaKWKl",
        expected: "PL7-NrfuNPRyycmEsJ0W0BQvFdCfxaKWKl"
    }, {
        url: "https://www.youtube.com/playlist?list=FLOBmBsfR8QjtICYaFWJiWyQ",
        expected: "FLOBmBsfR8QjtICYaFWJiWyQ"
    }];

    var channelLinks = [{
        url: "https://www.youtube.com/channel/UCemO3HB-SbN0P6tltwV7EBQ",
        expected: "UCemO3HB-SbN0P6tltwV7EBQ"
    }, {
        url: "https://www.youtube.com/channel/UCmwye08VVAtOUcmdfccfd0A",
        expected: "UCmwye08VVAtOUcmdfccfd0A"
    }, {
        url: "https://www.youtube.com/channel/UCUUuYIbcPxWTdoA8nhoKcKw",
        expected: "UCUUuYIbcPxWTdoA8nhoKcKw"
    }, {
        url: "https://www.youtube.com/channel/UC3t2fapsf1LzpVVRjTgMydw",
        expected: "UC3t2fapsf1LzpVVRjTgMydw"
    }, {
        url: "https://www.youtube.com/channel/UCzKcYMTzvY6NBvBQrSwLA9w",
        expected: "UCzKcYMTzvY6NBvBQrSwLA9w"
    }, {
        url: "https://www.youtube.com/channel/UCWHm7D-7BjCdAAxhCBYc3Gw",
        expected: "UCWHm7D-7BjCdAAxhCBYc3Gw"
    }];

    return {
        videoLinks: videoLinks,
        playlistLinks: playlistLinks,
        channelLinks: channelLinks
    };

})();


var unitTestGenerator = (function () {

    var videoTests = function () {
        for (var i in links.videoLinks) {
            exports["test youtube video " + i] = function (assert, done) {

                var result = tubecast.run(links.videoLinks[i], true);

                assert.ok(result.id === "iwGFalTRHDA" && result.type === "video", "Assert youtube video id and video type.");

                done();
            };
        }
    };

    var playlistTests = function () {
        for (var i in links.playlistLinks) {
            exports["test youtube playlist " + i] = function (assert, done) {

                var result = tubecast.run(links.playlistLinks[i].url, true);

                assert.ok(result.id === links.playlistLinks[i].expected && result.type === "playlist", "Assert youtube playlist id and playlist type.");

                done();
            };
        }
    };

    var channelTests = function () {
        for (var i in links.channelLinks) {
            exports["test youtube channel " + i] = function (assert, done) {

                var result = tubecast.run(links.channelLinks[i].url, true);

                assert.ok(result.id === links.channelLinks[i].expected && result.type === "channel", "Assert youtube channel id and channel type.");

                done();
            };
        }
    };

    return {
        videoTests: videoTests,
        playlistTests: playlistTests,
        channelTests: channelTests
    };

})();

unitTestGenerator.videoTests();
unitTestGenerator.playlistTests();
unitTestGenerator.channelTests();

require("sdk/test").run(exports);