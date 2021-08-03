
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/import-export-functions/import-function-without-depency`,
  author: `ayudantehax`,
  dependencies: [`ayudantehax/examples/import-export-functions/export-function`],
}

const pluginName = `ayudantehax/examples/import-export-functions/export-function`;

let importedFunction;

room.onRoomLink = function(url) {
  importedFunction = room.getPlugin(pluginName).publicFunction;
}
