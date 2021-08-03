/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/example-1/extend-new-room-function-1`,
  author: `ayudantehax`,
}

function extendNewRoomFunction({ callingPluginName, previousFunction }, ...args){
  console.log(`First call`);
  console.log(callingPluginName);
  // ...
  let { [`${callingPluginName}_flevel`]: flevel } = args[args.length - 1];
  if (flevel !== undefined) {
    // ...
  }
  if (typeof previousFunction === `function`) {
    // ...
    // return previousFunction();
  }
}

room.onRoomLink = function(url) {
  room.extend(`newRoomFunction`, extendNewRoomFunction);
}

/*

examples of (native) room functions:

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