
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
 * @description Add player ID to the set so that the remaining handlers of the onPlayerChat event are canceled.
 */
function addPlayer(playerId) {
  cancelHandlers.add(playerId);
}

/**
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
