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
 * @param {string} argumentString
 * @description https://hhm.surge.sh/api/tutorial-writing-plugins.html#sav-commands-easier-command-processing
 *              https://github.com/saviola777/hhm-plugins/blob/master/src/sav/commands.js
 */
function onCommandGamemode1Handler(player, arguments, argumentString) {
  switch (arguments[0]) {
    case `ctf`: case `free`: 
      
      currentGamemode = arguments[0];
      break;
  }
}

//
// Exports
//

room.onRoomLink = onRoomLinkHandler;
room.onCommand1_gamemode = room.onCommand1_gm = onCommandGamemode1Handler;
