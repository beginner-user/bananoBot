var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/gamemode/terminate`,
  author: `ayudantehax`
}

/**
 * @param {HhmRoomObject} plugin
 * @description https://hhm.surge.sh/api/tutorial-events.html#hhm-events
 *              https://hhm.surge.sh/api/HHM.events.html
 */
function onHhmPluginRemovedHandler(plugin) {
  switch (plugin.getName()) {
    case `ayudantehax/gamemode/ctf/core`:
      // reset avatars at the end of gamemode ctf
      room.getPlayerList().forEach((player) => {
        room.setPlayerAvatar(player.id, null);
      });
      break;
  }
}

room.onHhm_pluginRemoved = onHhmPluginRemovedHandler;
