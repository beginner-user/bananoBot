
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/order/global-functions/extend-global-function-1`,
  author: `ayudantehax`,
  config: {
    functionToExtend: `sendAnnouncement`,
  }
}

function firstExtension({ previousFunction, callingPluginName }, ...args) {
  console.log(`First extension last call, from the plugin ` + callingPluginName);
  if (typeof previousFunction === `function`) {
    return previousFunction(...args);
  }
}

function onRoomLinkHandler(url) {
  room.extend(room.getConfig().functionToExtend, firstExtension);
}

room.onRoomLink = onRoomLinkHandler;
