
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/order/global-functions/extend-global-function-2`,
  author: `ayudantehax`,
  order: {
    'sendAnnouncement': {
      'before': [`ayudantehax/examples/order/global-functions/extend-global-function-1`],
    },
  },
}

function secondExtension({ previousFunction, callingPluginName }, ...args) {
  console.log(`Last extension first call, from the plugin ` + callingPluginName);
  if (typeof previousFunction === `function`) {
    return previousFunction(...args);
  }
}

function onRoomLinkHandler(url) {
  room.extend(`sendAnnouncement`, secondExtension);
}

room.onRoomLink = onRoomLinkHandler;
