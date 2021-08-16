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
let pluginControl;

//
// Event Handlers
//

/**
 * @description https://hhm.surge.sh/api/tutorial-writing-plugins.html#sav-help-display-help-and-usage-information
 *              https://github.com/saviola777/hhm-plugins/blob/master/src/sav/help.js
 */
const onCommandAuthData = {
  'sav/chat': {
    text: ` ROLE PASSWORD`,
    roles: ['user']
  }
}

/**
 * @param {string} url
 * @description https://github.com/haxball/haxball-issues/wiki/Headless-Host#onroomlink
 *              https://hhm.surge.sh/api/tutorial-writing-plugins.html#plugin-initialization
 */
function onRoomLinkHandler(url) {
  pluginControl = room.getPlugin(`sav/plugin-control`);
}

/**
 * @param {PlayerObject} player
 * @param {string[]} arguments
 * @param {string} - argument String
 * @description https://hhm.surge.sh/api/tutorial-writing-plugins.html#sav-commands-easier-command-processing
 *              https://github.com/saviola777/hhm-plugins/blob/master/src/sav/commands.js
 */
function onCommandGamemode1Handler(player, [pluginName] = []) {
  const playerId = player.id;
  
  switch (gamemode) {
    case `ctf`: case `free`:
      // disable gamemode `ayudantehax/gamemode/${gamemode}/core`;
      if (gamemode !== `free`) {
        // set gamemode
      }
      currentGamemode = gamemode;
      break;
  }
}

//
// Exports
//

room.onRoomLink = onRoomLinkHandler;
room.onCommand1_gamemode = room.onCommand1_gm = onCommandGamemode1Handler;
