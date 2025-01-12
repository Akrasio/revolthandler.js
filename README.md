# revolthandler.js

## Description

Easy command handling for revolt.js

## Table of contents

- [About](#about)
- [Installation](#install)
- [Example Usage](#example)
  - [Setup](#setup)
  - [Standart](#standart-using-example)
  - [Aliases](#aliases-example)
  - [OwnerOnly](#only-owner-command-example)
  - [PermsOnly](#only-perms-command-example)
  - [AllowDM](#allow-dm)
  - [NonPrefixed](#non-prefixed)

## Warn

#### This version work with [revolt.js@6.0.20](https://www.npmjs.com/package/revolt.js/v/6.0.20)

## About

command handler for revolt.js bot project

## Badges

[![NPM Downloads](https://img.shields.io/npm/dt/revolthandler.js.svg?style=flat-square)](https://www.npmjs.com/package/revolthandler.js)

## Install

> npm i revolthandler.js

## Example

### Setup

CommonJS

```js
const revolt = require("revolt.js");
const client = new revolt.Client();
const revoltHandler = require("revolthandler.js");
const handler = new revoltHandler.Handler({
  client: client, //required
  prefix: "!", //required
  owners: ["Your Revolt ID"], //required , optional add more owner Id
  path: "./commands", //optional, (default : "./commands")
});
client.once("ready", () => {
  handler.start();
});
client.loginBot("YOUR_BOT_TOKEN_HERE");
```

EsModule

```js
//...
import { Handler } from "revolthandler.js";
const handler = new Handler({
  client: client, //required
  prefix: "!", //required
  owners: ["Your Revolt ID"], //required , optional add more owner Id
  path: "./commands", //optinal, (default : "./commands")
});
//...
```

### Standart using example

CommonJS

```js
//"./commands/general/ping.js"
exports.default = {
  name: "ping",
  description: "Ping!", //description :P
  //Be careful
  code(message, args, client) {
    //Your code here
    message.channel.sendMessage("Pong");
  },
};
```

EsModule

```ts
export default {
  name:"ping",
  description:"Ping!"
  code(message:any,args:string[],client:any){
    //Your code here
  }
}
```

### Aliases example

```js
//"./commands/general/ping.js"
exports.default = {
  name: "ping",
  aliases: ["delay"],
  description: "Ping!", //description :P
  //Be careful
  code(message, args, client) {
    //Your code here
  },
};
```

### Only owner command example

```js
//"./commands/owner/test.js"
exports.default = {
  name: "eval",
  aliases: ["eval"],
  ownerOnly: {
    status: true,
    errorMsg(message, author, command) {
      //optional
      message.reply("You can't use this command");
    },
  },
  code(message, args, client) {
    //your code here
  },
};
```

### Only perm(s) command example

```js
//"./commands/moderate/perm.js"
exports.default = {
  name: "perm",
  ownerPerms: {
    perms: ["KickMembers"], //You can see the perm names in : https://revolt.js.org/modules/permissions_definitions.html#Permission (onlyString)
    errorMsg(message, member, command, perms) {
      //optional
      message.reply(
        `You must have ${perms.join(",")} permission(s) to use this command`
      );
    },
    code(msg, args, client) {
      //Your code here
    },
  },
};
```

### Allow DM

```js
//"./commands/general/indm.js"
exports.default = {
  name: "indm",
  allowDM: {
    //be careful "DM", not "Dm or dm"
    status: true,
    errorMsg(message, author, client) {
      //optional
      message.reply("You can't use this commmand in dm or group");
    },
    code(message, args, client) {
      //Your code here
    },
  },
};
```

### Non Prefixed

```js
//"./commands/general/nonprefixed.js"
exports.default = {
  name: "withoutprefix", //WARN : The command name is case sensitive here!
  nonPrefixed: true,
  code(message, args, client) {
    //Your code here
  },
};
```

- [Come to my server](https://rvlt.gg/zrmFWtJz)

# Will add new features in the future

# revolthandler.js
