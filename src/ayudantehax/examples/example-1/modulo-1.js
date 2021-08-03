/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/example-1/modulo-1`,
  author: `ayudantehax`,
  version: `1.0.0`,
}

function getPlayerList({ callingPluginName, previousFunction }, { [`${callingPluginName}_team`]: team }){
  // ...
  return previousFunction();
}

room.onRoomLink = function(url) {
  room.extend(`getPlayerList`, getPlayerList);
}
