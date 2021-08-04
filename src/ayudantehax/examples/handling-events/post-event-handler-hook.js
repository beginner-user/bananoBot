
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/handling-events/post-event-handler-hook`,
  author: `ayudantehax`,
  config: {
    invalidEventState: false, // ver explicación en https://hhm.surge.sh/api/tutorial-events.html#post-event-handler-hooks
  },
}

const config = room.getConfig();

function onSomeEventPostEventHandlerHook({ room, metadata }, ...args) { // se ejecutará después de cada controlador de eventos 
  console.log(`The previous event handler left a valid event status`);
  // ...
  if (config.invalidEventState === true) {
    // ...
    return false; // los manejadores de eventos restantes NO seran ejecutados
  }
  else {
    // ...
    return true; // los manejadores de eventos restantes seran ejecutados
  }
}

room.onRoomLink = function(url) {
  room.addPostEventHandlerHook(`onSomeEvent`, onSomeEventPostEventHandlerHook);
}
