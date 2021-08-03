/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/example-1/modulo-3`,
  author: `ayudantehax`,
  version: `1.0.0`,
}

room.onRoomLink = function(url) {
  room.getPlayerList({ [`${room.getName()}_team`]: 0 });
}
