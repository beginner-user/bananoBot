
class InputRequestQueue {

  constructor() {
    this._queue = [];
    this._lastDequeue;
  }

  enqueue(request) {
    if (this._queue.findIndex((req) => req.pluginName === request.pluginName) === -1) {
      if (this._lastDequeue === request.pluginName) {
        this._queue.unshift(request);
      }
      else {
        this._queue.push(request);
      }
      return true;
    }
    else {
      return false;
    }
  }

  dequeue(playerInput) {
    let request = this._queue[0];
    this._lastDequeue = request.pluginName;
    this._queue.shift();
    request.resolve(playerInput);
  }

  isEmpty() {
    return this._queue.length === 0 ? true : false;
  }
}

const inputRequests = new Map();



async function addPlayerInputRequest({ previousFunction, callingPluginName }, ...args) {
  if (typeof args[0] === `object` && args[0] !== null && args[0].hasOwnProperty(`id`) && typeof args[1] === `function`) {
    return inputRequests.get(args[0].id).enqueue({ pluginName: callingPluginName, resolve: args[1] });
  }
  else {
    return false;
  }
}

function onPlayerJoinPreEventHook({ room, metadata }, ...args) {
  if (typeof args[0] === `object` && args[0] !== null && args[0].hasOwnProperty(`id`)) {
    inputRequests.set(args[0].id, new InputRequestQueue());
  }

  return args;
}

function onPlayerChatPreEventHook({ room, metadata }, ...args) {
  if (typeof args[0] === `object` && args[0] !== null && args[0].hasOwnProperty(`id`) && typeof args[1] === `string`) {
    if (inputRequests.get(args[0].id).isEmpty() === false) {
      inputRequests.get(args[0].id).dequeue(args[1]);
      return false;
    }
  }

  return args;
}

function onPlayerLeavePreEventHook({ room, metadata }, ...args) {
  if (typeof args[0] === `object` && args[0] !== null && args[0].hasOwnProperty(`id`)) {
    inputRequests.delete(args[0].id);
  }

  return args;
}

room.onRoomLink = function(url) {
  room.extend(`addPlayerInputRequest`, addPlayerInputRequest);

  room.addPreEventHook(`onPlayerJoin`, onPlayerJoinPreEventHook)
  room.addPreEventHook(`onPlayerChat`, onPlayerChatPreEventHook);
  room.addPreEventHook(`onPlayerLeave`, onPlayerLeavePreEventHook);
}
