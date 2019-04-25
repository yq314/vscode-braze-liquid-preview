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

## Running locally

Running with `npm`
```
npm install
npm run test
```

Test your extension with [Visual Studio Code](https://code.visualstudio.com/api/working-with-extensions/testing-extension)

## Implemented Braze Features

#### Filters
- `property_accessor`
  ```
  {{ hash | property_accessor: 'key' }}
  ```

#### Tags
- connected_content
  ```
  {% connected_content http://numbersapi.com/random/trivia :save trivia :cache 900 :basic_auth <secret_name> %}
  ```
  For basic auth to work, you'll need to add the username and password into the context json file.
  
  - Replace `<template-context>` so that it matches your liquid template's filename `<template-context>.liquid`.
  - Replace `<secret_name>` so that it matches your basic auth name in Braze or the value in your secrets JSON.
  ```
  // <template-context>.liquid.json
  {
      "__secrets": {
          "<secret_name>": {
              "username": "<your username>",
              "password": "<your password>"
          }
      }
  }
  ```
- abort_message
  ```
  {% abort_message() %}
  {% abort_message('aborted due to error') %}
  ```

## Caveats

⚠️ Braze only implements a subset of Shopify liquid, so things working here may not work in Braze, do test it in Braze to confirm everything works fine before publishing the template.
