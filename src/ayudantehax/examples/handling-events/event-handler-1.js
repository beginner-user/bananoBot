
/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/handling-events/event-handler-1`,
  author: `ayudantehax`,
}

function onSomeEventHandler(...args) {
  console.log(`First event handler has been triggered`);
  let msg = `and the arguments of this event are: `;
  for (let arg of args) msg += arg +`, `;
  msg.slice(0, -2);
  console.log(msg);
  // ...
}

// Eventos

room.onSomeEvent = onSomeEventHandler;
