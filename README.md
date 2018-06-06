# react-lazy-youtube

React Component to lazy load t+youtube videos by showing only the thumbnail of the video untill the person clicks on it as seen on https://awesometalks.party

Demo: https://react-lazy-youtube.now.sh/

Props:

| Name                    | Type   | Default  | Description                                                                                          |
| ----------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------- |
| id                      | String | Required |                                                                                                      |
| imageSize               | enum   | default  | Size of the thumbnail we get from youtube (default, hqdefault, mqdefault, sddefault, maxresdefault ) |
| noCookies               | bool   | false    | if set to true will change the host to "https://www.youtube-nocookie.com"                            |
| onEnd                   | func   | noop     | Functinn that runs on the end of the video                                                           |
| onError                 | func   | noop     | Function that runs when the video encounters an error                                                |
| onPause                 | func   | noop     | Function that runs when the video is paused                                                          |
| onPlay                  | func   | noop     | function to run when the video starts Playing                                                        |
| onPlaybackQualityChange | func   | noop     | Function that runs when the video changes quality                                                    |
| onPlaybackRateChange    | func   | noop     | Function that runs when the video encounters changes playback rate                                   |
| onStateChange           | func   | noop     | Function that runs when the video changes state like from playing to paused                          |
| playerVars              | object | {}       | https://developers.google.com/youtube/player_parameters                                              |
| styles                  | object | {}       | Styles to apply over the wrapper                                                                     |

## Change log

The change log can be found on the [Releases page](https://github.com/https://github.com/SaraVieira/react-lazy-youtube/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Sara Vieira](https://iamsaravieira.com) and [contributors](https://github.com/https://github.com/SaraVieira/react-lazy-youtube/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
