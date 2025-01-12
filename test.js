"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const revolt_js_1 = require("revolt.js");
require("dotenv/config");
const index = require("./dist/index");
var bot = new revolt_js_1.Client();
var handler = new index.Handler({
    client: bot,
    prefix: "!",
    owners: ["01FCXFBQPYCBZWX40NSBYXYAWW"],
    path: "./commands/javascript",
});
bot.once("ready", () => {
    console.log("Bot ready!");
    handler.start();
});
bot.loginBot(`${process.env.BOT_TOKEN}`);
