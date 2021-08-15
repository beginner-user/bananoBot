var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/gamemode/terminate`,
  author: `ayudantehax`
}

function onHhmPluginRemovedHandler(plugin) {
  switch (plugin.getName()) {
    case `ayudantehax/gamemode/ctf/core`:
      room.getPlayerList().forEach((player) => {
        room.setPlayerAvatar(player.id, null);
      });
      break;
  }
}

room.onHhm_pluginRemoved = onHhmPluginRemovedHandler;
