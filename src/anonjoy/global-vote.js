
const options = new Map();
const cancelHandler = new Set();

function startVotation(player, arguments) {
  
}

function onPlayerVote(playerId, option) {
  options.get(option).votes.add(playerId);
}

function onPlayerChatPostEventHandlerHook({}, player) {
  return !cancelHandler.delete(player.id);
}

room.onRoomLink = function(url) {
  room.addPostEventHandlerHook(`onPlayerChat`, onPlayerChatPostEventHandlerHook);
}

room.onPlayerChat = function(player, message) {
  for (let option of options.keys()) {
    if (message.startWith(option)) {
      if (!options.get(option).votes.has(player.id)) {
        cancelHandler.add(player.id);
        onPlayerVote(player.id, option);
        return false;
      }
      else {
        return;
      }
    }
  }
}

room.onCommand_votation = startVotation;
