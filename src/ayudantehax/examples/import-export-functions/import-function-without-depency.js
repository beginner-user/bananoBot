
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/import-export-functions/import-function-without-depency`,
  author: `ayudantehax`,
}

const pluginName = `ayudantehax/examples/import-export-functions/export-function`;

function someFunction() {
  if (room.hasPlugin(pluginName)) {
    let importedFunction = room.getPlugin(pluginName).publicFunction;
    // do something with the imported function ...
  }
}
