import {Worker} from 'worker_threads';
import {Webview} from 'webview-nodejs';
import dummy from "libwebview-nodejs/package.json" with { type: "file" };

const worker = new Worker("./server/main.js")

let w = new Webview();
w.title("Hello World");
w.size(800,600);
w.navigate("http://localhost:3000");
w.show();
worker.terminate()
