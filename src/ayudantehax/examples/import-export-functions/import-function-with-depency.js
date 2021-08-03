
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/import-export-functions/import-function-with-depency`,
  author: `ayudantehax`,
  dependencies: [`ayudantehax/examples/import-export-functions/export-function`],
}

const pluginName = `ayudantehax/examples/import-export-functions/export-function`;

let importedFunction;

room.onRoomLink = function(url) { // el evento es llamado luego de que todas las dependencias de este plugin hayan sido cargadas
  importedFunction = room.getPlugin(pluginName).publicFunction;
}
