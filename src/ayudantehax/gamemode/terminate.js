var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/gamemode/terminate`,
  author: `ayudantehax`
}

//
// Event Handlers
//

/**
 * @param {HhmRoomObject} plugin - The removed plugin. https://hhm.surge.sh/api/HhmRoomObject.html
 * @description 
 * See [explanation]{@link https://hhm.surge.sh/api/tutorial-events.html#hhm-events}, [methods]{@link https://hhm.surge.sh/api/HHM.events.html}
 * and [method used]{@link https://hhm.surge.sh/api/HHM.events.html#.PLUGIN_DISABLED}
 */
function onHhmPluginDisabledHandler(plugin) {
  switch (plugin.getName()) {
    case `ayudantehax/gamemode/ctf/core`:
      // reset avatars at the end of gamemode ctf
      room.getPlayerList().forEach((player) => {
        room.setPlayerAvatar(player.id, null);
      });
      break;
  }
}

//
// Exports
//

room.onHhm_pluginDisabled = onHhmPluginDisabledHandler;
