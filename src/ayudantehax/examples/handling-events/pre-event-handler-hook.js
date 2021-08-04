
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/handling-events/pre-event-handler-hook`,
  author: `ayudantehax`,
  config: {
    invalidEventState: false, // ver explicación en https://hhm.surge.sh/api/tutorial-events.html#pre-event-handler-hooks
  },
}

const config = room.getConfig();

function onSomeEventPreEventHandlerHook({ room, metadata }, ...args) {
  console.log(`The event status for the next event is okey`);
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
  room.addPreEventHandlerHook(`onSomeEvent`, onSomeEventPreEventHandlerHook);
}
