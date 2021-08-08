
var room = HBInit();

room.pluginSpec = {
  name: `anonjoy/input/post-handler-hook`,
  author: `anonjoy`,
}

/**
 * Set of player ID to cancel all remaining handlers of the onPlayerChat event.
 */
const cancelHandlers = new Set();

/**
 * @param {number} playerId
 * @returns {boolean} - True if player ID was added successfully, false otherwise.
 * @description Add player ID to the set so that the remaining handlers of the onPlayerChat event are canceled.
 */
function addPlayer(playerId) {
  // We check if the ID is valid with the native method getPlayer
  if (room.getPlayer(playerId) !== null) {
    cancelHandlers.add(playerId);
    return true;
  }
  else {
    return false;
  }
}

/**
 * @param {object} hookObject
 * @param {object} player - PlayerObject.
 * @returns {boolean} - True if player ID was deleted successfully, false otherwise.
 * @description https://hhm.surge.sh/api/tutorial-events.html#post-event-handler-hooks
 */
function onPlayerChatPostEventHandlerHook({}, player) {
  return !cancelHandlers.delete(player.id);
}

room.onRoomLink = function(url) {
  room.addPostEventHandlerHook(`onPlayerChat`, onPlayerChatPostEventHandlerHook);
}

// Exports

room.addPlayer = addPlayer;
