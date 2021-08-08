
var room = HBInit();

room.pluginSpec = {
  name: `anonjoy/tu-modulo`,
  author: `anonjoy`,
}

/**
 * Set of player ID to cancel all remaining handlers of the onPlayerChat event.
 */
const cancelHandlers = new Set();

/**
 * 
 * @param {number} playerId
 * @returns {boolean} - True if player was added successfully, false otherwise.
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
 * @param {object} hookObject.room
 * @param {object} hookObject.metadata
 * @param {object} player
 * @returns {boolean} - True if the player was deleted successfully, false otherwise.
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
