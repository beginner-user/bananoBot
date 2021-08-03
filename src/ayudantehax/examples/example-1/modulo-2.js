/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/example-1/modulo-2`,
  author: `ayudantehax`,
  version: `1.0.0`,
  dependencies: [`ayudantehax/examples/example-1/modulo-1`],
}

room.onRoomLink = function(byPlayer) {
  room.getPlayerList({ [`${room.getName()}_team`]: 0 });
}
