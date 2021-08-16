var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/gamemode/setter`,
  author: `ayudantehax`,
  dependencies: [
    `sav/plugin-control`
  ],
}

/**
 * @type {string}
 */
let currentGamemode;

/**
 * @type {HhmRoomObject}
 */
let roles;

//
// Event Handlers
//

/**
 * @description 
 * See [explanation]{@link https://hhm.surge.sh/api/tutorial-writing-plugins.html#sav-help-display-help-and-usage-information}
 * and [code source]{@link https://github.com/saviola777/hhm-plugins/blob/master/src/sav/help.js}
 */
const onCommandAuthData = {
  'sav/chat': {
    text: ` ROLE PASSWORD`,
    roles: ['user']
  }
}

/**
 * @param {string} url
 * See the [description]{@link https://github.com/haxball/haxball-issues/wiki/Headless-Host#onroomlink} of the native event
 * and its [modification]{@link https://hhm.surge.sh/api/tutorial-writing-plugins.html#plugin-initialization}
 */
function onRoomLinkHandler(url) {
  roles = room.getPlugin(`sav/roles`);
}

/**
 * @param {PlayerObject} player
 * @param {string[]}
 * @param {string}
 * @description Set gamemode
 * See [explanation]{@link https://hhm.surge.sh/api/tutorial-writing-plugins.html#sav-commands-easier-command-processing}
 * and [code source]{@link https://github.com/saviola777/hhm-plugins/blob/master/src/sav/commands.js}      
 */
function onCommandGamemode1Handler(player, [gamemode] = []) {
  const playerId = player.id;
  if (!roles.ensurePlayerRoles(playerId, `host`, room)) {
    return;
  }
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
        if (manager.disablePlugin(pluginName, true).length === 0) {
          // error handler
        }
      }
      // set gamemode
      if (gamemode !== `free`) {
        // https://hhm.surge.sh/api/PluginManager.html#enablePlugin
        if (!manager.enablePlugin(pluginName)) {
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

//
// Exports
//

room.onRoomLink = onRoomLinkHandler;
room.onCommand1_gamemode = room.onCommand1_gm = onCommandGamemode1Handler;
