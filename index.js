const {Worker} = require('worker_threads');
const {Webview} = require('webview-nodejs').createRequire();


const worker = new Worker("./server/main.js")

let w = new Webview();
w.title("Hello World");
w.size(800,600);
w.navigate("http://localhost:3000");
w.show();
worker.terminate()
