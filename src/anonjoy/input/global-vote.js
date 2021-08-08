
var room = HBInit();

room.pluginSpec = {
  name: `anonjoy/input/global-vote`,
  author: `anonjoy`,
  dependencies: [
    'anonjoy/input/post-handler-hook', 
    'sav/commands',
  ],
}

const options = new Map();

function startVotation(player, arguments) {
  
}

function onPlayerVote(playerId, option) {
  options.get(option).votes.add(playerId);
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
