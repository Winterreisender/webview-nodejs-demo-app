# webview-nodejs-demo-app
A full demo app for webview-nodejs to "Eat your own dogfood".  
You can download the executable binary in the [release page](https://github.com/Winterreisender/webview-nodejs-demo-app/releases) 

```bash
npm start
```

## About packaging

The time webview-nodejs-demo-app created is kind of special: the popular pkg is deprecated and node-sea is still experimental and doesn't support modules. So..., there's no good way to package the project in Node.js, but we can use Bun:

```bash
npx bun build --compile index.js server/main.js
```

Bun supports cross-compiling but webview-nodejs doesn't. So before https://github.com/Winterreisender/webview-nodejs/issues/29 is done, it's recommend to build in each platform.

We also need to copy some files, see  [release page](https://github.com/Winterreisender/webview-nodejs-demo-app/releases). This could be avoid in the feature.

## License

Apache-2.0
