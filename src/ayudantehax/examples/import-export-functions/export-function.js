
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/import-export-functions/export-function`,
  author: `ayudantehax`,
}

function privateFunction() { // no fue exportada, asi que no podrá ser llamada
  console.log(`Private function has been called`); 
  // ...
}

function publicFunction() {
  console.log(`Public function has been called`);
  // ...
}

// Exportar función

room.publicFunction = publicFunction;
