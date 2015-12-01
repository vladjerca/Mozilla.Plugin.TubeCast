#TubeCast Plugin
Official application link: 
<br/>[TubeCast Pro](https://www.microsoft.com/en-us/store/apps/tubecast-pro/9wzdncrdx3g3)
<br/>[TubeCast](https://www.microsoft.com/en-us/store/apps/tubecast-for-youtube/9wzdncrdx3fs)

A tubecast helper that uses the exposed tubecast protocol to easily load youtube video, channels and playlists from your browser into TubeCast, allowing easy casting to your device.

[Protocol Reference](http://tubecast.webrox.fr/openintubecast.html)

#Need-to-knows:

1. Download [NodeJS](https://nodejs.org/en/)
2. Download the new Mozilla SDK from 'npm' with the following command:
  ```
  npm install jpm
  ```
3. Available commands:
  - Compile (bundle) 'xpi' file: 
  ```
  jpm xpi
  ```
  - Run (debug) addon: 
  ```
  jpm run -b "%FIREFOX_PATH%"
  ```
  - Run test suite: 
  ```
  jpm test -b "%FIREFOX_PATH%"
  ```
