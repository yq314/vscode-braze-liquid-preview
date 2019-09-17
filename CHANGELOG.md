# Change Log

## [0.1.5] - 2019-09-17
- Upgrade brazejs to 1.2.2

## [0.1.4] - 2019-07-21
- Upgrade brazejs to 1.2.1 that fixed a few more bugs

## [0.1.3] - 2019-07-19
- Upgrade brazejs to 1.2.0 that fixed a few bugs

## [0.1.2] - 2019-07-17
- Upgrade brazejs to 1.1.4 to support content blocks and more filters

## [0.1.1] - 2019-05-03
- Upgrade brazejs to 1.0.4 that fixed the issue that abort_message could be rendered multiple times

## [0.1.0] - 2019-05-01
- Replace [liquidjs](https://github.com/harttle/liquidjs) with [brazejs](https://github.com/yq314/brazejs)

## [0.0.3] - 2019-04-13
- Removed slice, liquidjs has already supported it
- Improved connected_content tag to make it behave closer to Braze

## [0.0.2] - 2019-04-11
- Removed previewText
- Re-implemented preview using Webview API
- Added filter:
  - slice

## [0.0.1] - 2019-04-10
- Initial release
- Implemented filter: 
  - property_accessor
- Implemented tag: 
  - connected_content
  - abort_message