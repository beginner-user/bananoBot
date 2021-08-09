
var room = HBInit();

room.pluginSpec = {
  name: `anonjoy/input/global-voting`,
  author: `anonjoy`,
  dependencies: [
    `anonjoy/input/post-handler-hook`, 
    `sav/commands`,
  ],
}

/**
 * Current voting options.
 */
const options = new Map();

/**
 * Plugin that started the voting.
 * @type {string}
 */
let callingPluginName;

/**
 * @function addPlayer - https://github.com/beginner-user/bananoBot/blob/vote/src/anonjoy/input/post-handler-hook.js
 */
let addPlayer;

/**
 * Voting flag.
 * @type {boolean}
 */
let votingStarted = false;

/**
 * @returns {boolean}
 * @description Tells us if there is a voting in progress.
 */
function isVotingStarted() {
  return votingStarted;
}

/**
 * @param {string[]} optionList
 * @param {number} timeLimit
 * @description 
 */
async function startVoting(hmmArg, optionList, timeLimit) {
  if (!isVotingStarted()) {
    callingPluginName = hmmArg.callingPluginName;
    votingStarted = true;
  
    for (let option of optionList) {
      options.set(option, { votes: new Set() });
    }
  
    await new Promise(resolve => setTimeout(resolve, timeLimit));
  
    let callingPlugin = room.getPlugin(callingPluginName).onVotingFinish(options);
    
    votingStarted = false;
    options.clear();
    
    return true;
  }
  else {
    return false;
  }
}

/**
 * @param {number} playerId
 * @param {string} option
 * @description Local event called when the player types one of the current voting options.
 */
function onPlayerVote(playerId, option) {
  addPlayer(playerId);
  options.get(option).votes.add(playerId);
}

//
// Event Handlers
//

function onRoomLinkHandler(url) {
  addPlayer = room.getPlugin(`anonjoy/input/post-handler-hook`).addPlayer;
  
  // create global functions
  room.extend(`startVoting`, startVoting);
  room.extend(`isVotingStarted`, isVotingStarted);
}

function onPlayerChatHandler(player, message) {
  if (isVotingStarted()) {
    let msg = message.trimStart();
    for (let option of options.keys()) {
      if (msg.startWith(option)) {
        if (!options.get(option).votes.has(player.id)) {
          onPlayerVote(player.id, option);
          return false;
        }
        else {
          return;
        }
      }
    }
  }
}

//
// Exports
//

room.onRoomLink = onRoomLinkHandler;
room.onPlayerChat = onPlayerChatHandler;
