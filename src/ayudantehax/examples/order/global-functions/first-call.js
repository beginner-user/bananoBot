
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/order/global-functions/first-call`,
  author: `ayudantehax`,
}

function onTestEventHandler() {
  room.sendAnnouncement(`First announcement`);
}

room.onTestEvent = onTestEventHandler;
