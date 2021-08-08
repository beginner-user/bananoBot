
var room = HBInit();

room.pluginSpec = {
  name: `anonjoy/input/global-vote`,
  author: `anonjoy`,
  dependencies: [
    `anonjoy/input/post-handler-hook`, 
    `sav/commands`,
  ],
}

const options = new Map();

let addPlayer;

function startVotation(player, arguments) {
  
}

function onPlayerVote(playerId, option) {
  options.get(option).votes.add(playerId);
}

room.onRoomLink = function(url) {
  addPlayer = room.getPlugin(`anonjoy/input/post-handler-hook`).addPlayer;
}

room.onPlayerChat = function(player, message) {
  for (let option of options.keys()) {
    if (message.startWith(option)) {
      if (!options.get(option).votes.has(player.id)) {
        addPlayer(player.id);
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
