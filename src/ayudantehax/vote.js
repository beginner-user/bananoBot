/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/vote`,
  author: `ayudantehax`,
  dependencies: [`ayudantehax/console`],
}

async function playerVote(playerId) {
  room.sendAnnouncement(`escribi algo`, playerId);
  let response = await room.getPlayerInput(playerId);
  if (response !== false) {
    room.sendAnnouncement(`escribiste: ` + response, playerId);
  }
}

function playersVote() {
  let players = room.getPlayerList().filter(p => p.id !== 0);
  for (let player of players) {
    playerVote(player.id);
  }
}

// Exportar

room.playersVote = playersVote;
