
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/handling-events/pre-event-hook-1`,
  author: `ayudantehax`,
  config: {
    cancelEvent: false, // lo puse en config porque podes modificar su valor desde este mismo plugin; otros plugins; postInit; o la consola
  },
}

const config = room.getConfig();

function onSomeEventPreEventHook({ room, metadata }, ...args) {
  console.log(`First pre event handler has been triggered`);
  // ...
  if (config.cancelEvent === true) {
    // ...
    return false; // onSomeEvent no va a ser activado/triggereado, pero los proximos pre eventos seguiran ejecutandose
  }
  else {
    // ...
    return args; // opcional, si es que vas a modificar algún argumento
  }
}

room.onRoomLink = function(url) {
  room.addPreEventHook(`onSomeEvent`, onSomeEventPreEventHook);
}
