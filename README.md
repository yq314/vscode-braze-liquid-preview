# Braze Liquid Preview for Visual Studio Code

![GitHub](https://img.shields.io/github/license/yq314/vscode-braze-liquid-preview.svg)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/chinyip.braze-liquid-preview.svg?logo=visual-studio-code)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/chinyip.braze-liquid-preview.svg?logo=visual-studio-code)


Gives a live preview for [Braze Liquid](https://www.braze.com/docs/user_guide/personalization_and_dynamic_content/liquid/overview/) templates. The extension compiles Braze Liquid template on the fly, applying preview data and rendering resulting HTML in separate window.

The code is based on [Trevor Kirchner](https://github.com/kirchner-trevor)'s [vscode-shopify-liquid-preview](https://github.com/kirchner-trevor/vscode-shopify-liquid-preview). I extended it with additional Braze specific tags and filters so it works for Braze liquid too.

## Features

- Live preview for Braze Liquid templates, updating as you type
- Support for fake data. Assuming your template file name is `template.liquid`, add a file `template.liquid.json` in the same directory to be a context of the template

## Usage

- Use the keybinding `ctrl+k v` while selecting a file with a `.liquid` extension
- Use the keybinding `ctrl+shift+p` and type **Braze Liquid: Open Preview to the Side** to run from command panel

## Implemented Braze Features

The Braze templating features are provided by [brazejs](https://github.com/yq314/brazejs), refer to its [README](https://github.com/yq314/brazejs#difference-with-liquidjs) for supported features and usage.

## Caveats

⚠️ Braze only implements a subset of Shopify liquid, so things working here may not work in Braze, do test it in Braze to confirm everything works fine before publishing the template.
