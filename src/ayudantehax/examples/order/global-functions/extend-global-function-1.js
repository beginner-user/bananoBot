
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/order/global-functions/extend-global-function-1`,
  author: `ayudantehax`,
}

function firstExtension({ previousFunction, callingPluginName }, ...args) {
  console.log(`First extension last call, from the plugin ` + callingPluginName);
  if (typeof previousFunction === `function`) {
    return previousFunction(...args);
  }
}

function onRoomLinkHandler(url) {
  room.extend(`sendAnnouncement`, firstExtension);
}

room.onRoomLink = onRoomLinkHandler;
