var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/gamemode/manager`,
  author: `ayudantehax`,
  dependencies: [
    `sav/roles`,
    `sav/commands`
  ],
}

/**
 * @type {string}
 */
let currentGamemode = `free`;

/**
 * @type {HhmRoomObject}
 */
let roles;

/**
 * TODO Documentation
 */
function setGamemode({}, gamemode) {
  // check if gamemode and current gamemode are differents
  if (gamemode !== currentGamemode) {
    // check if gamemode exists.
    // https://hhm.surge.sh/api/HhmRoomObject.html#.hasPlugin
    if (room.hasPlugin(`ayudantehax/gamemode/${gamemode}/core`)) {
      // https://hhm.surge.sh/api/HhmRoomObject.html#.getPluginManager
      const manager = room.getPluginManager();
      // disable current gamemode
      if (currentGamemode !== `free`) {
        // https://hhm.surge.sh/api/PluginManager.html#disablePlugin
        if (manager.disablePlugin(`ayudantehax/gamemode/${currentGamemode}/core`, true).length !== 0) {
          undoPlayerModifications();
          currentGamemode = `free`;
        } else {
          // error handler
        }
      }
      // enable new gamemode
      if (gamemode !== `free`) {
        // https://hhm.surge.sh/api/PluginManager.html#enablePlugin
        if (manager.enablePlugin(`ayudantehax/gamemode/${gamemode}/core`) === true) {
          currentGamemode = gamemode;
        } else {
          // error handler
        }
      }
    } else {
      // error handler
    }
  } else {
    // error handler
  }
}

/**
 * TODO Documentation
 */
function undoPlayerModifications() {
  room.getPlayerList().forEach((player) => {
    room.setPlayerAvatar(player.id, null);
  });
}

//
// Event Handlers
//

/**
 * See the [description]{@link https://github.com/haxball/haxball-issues/wiki/Headless-Host#onroomlink} of the native event
 * and its [modification]{@link https://hhm.surge.sh/api/tutorial-writing-plugins.html#plugin-initialization}
 */
function onRoomLinkHandler() {
  // https://hhm.surge.sh/api/HhmRoomObject.html#.getPlugin
  // https://hhm.surge.sh/api/tutorial-writing-plugins.html#sav-roles-role-and-group-management
  // https://github.com/saviola777/hhm-plugins/blob/master/src/sav/roles.js
  roles = room.getPlugin(`sav/roles`);
  // https://hhm.surge.sh/api/tutorial-writing-plugins.html#exporting-functions
  room.extend(`setGamemode`, setGamemode);
}

/**
 * @description Set gamemode
 * See [explanation]{@link https://hhm.surge.sh/api/tutorial-writing-plugins.html#sav-commands-easier-command-processing}
 * and [code source]{@link https://github.com/saviola777/hhm-plugins/blob/master/src/sav/commands.js}      
 */
function onCommandGamemode1Handler(player, [gamemode] = []) {
  const playerId = player.id;
  if (!roles.ensurePlayerRoles(playerId, `host`, room)) {
    return;
  }
  room.setGamemode(gamemode);
}

//
// Exports
//

room.onRoomLink = onRoomLinkHandler;
room.onCommand1_gamemode = room.onCommand1_gm = onCommandGamemode1Handler;
