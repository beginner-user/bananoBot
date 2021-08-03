
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/order/global-functions/second-call`,
  author: `ayudantehax`,
  order: {
    'sendAnnouncement': {
      'before': [`ayudantehax/examples/order/global-functions/first-call`],
    },
  },
}

function onTestEventHandler() {
  room.sendAnnouncement(`Second announcement`);
}

room.onTestEvent = onTestEventHandler;
