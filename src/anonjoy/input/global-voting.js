
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
 * @function addPlayer - https://github.com/beginner-user/bananoBot/blob/vote/src/anonjoy/input/post-handler-hook.js
 */
let addPlayer;

/**
 * Voting flag
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
 * @param {Object} player
 * @param {string[]} arguments
 * @description 
 */
function startVoting(player, arguments) {
  
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

room.onRoomLink = function(url) {
  addPlayer = room.getPlugin(`anonjoy/input/post-handler-hook`).addPlayer;
}

room.onPlayerChat = function(player, message) {
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

room.onCommand_voting = startVoting;

// Exports

room.isVotingStarted = isVotingStarted;
