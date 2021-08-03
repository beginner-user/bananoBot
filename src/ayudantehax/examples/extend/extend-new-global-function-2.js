/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/extend/extend-new-global-function-2`,
  author: `ayudantehax`,
  dependencies: [`ayudantehax/examples/extend/extend-new-global-function-1`],
}

function extendNewGlobalFunction({ callingPluginName, previousFunction }, ...args) {
  console.log(`First call from: ` + callingPluginName + ` before calling newGlobalFunction`);
  let { [`${callingPluginName}_slevel`]: slevel } = args[args.length - 1];
  // ...
  if (slevel !== undefined) {
    console.log(`and the argument of this call is: ` + slevel);
    // ...
  }
  if (typeof previousFunction === `function`) {
    // ...
    return previousFunction(...args); // si omitis esto, entonces las futuras extensiones no seran ejecutadas
  }
}

room.onRoomLink = function(url) {
  room.extend(`newGlobalFunction`, extendNewGlobalFunction);
}

/*

examples of (native) global functions:

- room.sendChat(message, targetId)
- room.setPlayerAdmin(playerId, admin)
- room.setPlayerTeam(playerId, team)
- room.kickPlayer(playerId, reason, ban)
- room.clearBan(playerId)
- room.clearBans()
- room.setScoreLimit(limit)
- room.setTimeLimit(limitInMinutes)
- room.setCustomStadium(stadiumFileContents)
- room.setDefaultStadium(stadiumName)
- room.setTeamsLock(locked)
- room.setTeamColors(team, angle, textColor, colors)
- room.startGame()
- room.stopGame()
- room.pauseGame(pauseState)
- room.getPlayer(playerId)
- room.getPlayerList()
- room.getScores()
- room.getBallPosition()
- room.startRecording()
- room.stopRecording()
- room.setPassword(pass)
- room.setRequireRecaptcha(required)
- room.reorderPlayers(playerIdList, moveToTop)
- room.sendAnnouncement(msg, targetId, color, style, sound)
- room.setKickRateLimit(min, rate, burst)
- room.setPlayerAvatar(playerId, avatar)
- room.setDiscProperties(discIndex, properties)
- room.getDiscProperties(discIndex)
- room.setPlayerDiscProperties(playerId, properties)
- room.getPlayerDiscProperties(playerId)
- room.getDiscCount()

*/
