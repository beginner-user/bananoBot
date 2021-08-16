var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/gamemode/ctf/init`,
  author: `ayudantehax`
}

//
// Event Handlers
//

function onRoomLinkHandler() {
  room.getPlayerList().forEach((player) => {
    room.setPlayerAvatar(player.id, `\u2000`);
  });
}

function onPlayerJoinHandler(player) {
  room.setPlayerAvatar(player.id, `\u2000`);
}

//
// Exports
//

room.onRoomLink = onRoomLinkHandler;
room.onPlayerJoin = onPlayerJoinHandler;
