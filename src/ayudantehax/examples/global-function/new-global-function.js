/* * Plugin specification * */

var room = HBInit();

room.pluginSpec = {
  name: `ayudantehax/examples/global-function/new-global-function`,
  author: `ayudantehax`,
}

function newGlobalFunction({ callingPluginName, previousFunction }, ...args) {
  args.pop(); // el ultimo argumento es el objeto que contiene los nuevos argumentos de las extensiones
  console.log(`newGlobalFunction has been called from: ` + callingPluginName);
  let msg = `and the arguments of the function are: `;
  for (let arg of args) msg += arg +`, `;
  msg.slice(0, -2);
  console.log(msg);
}

room.onRoomLink = function(url) {
  room.extend(`newGlobalFunction`, newGlobalFunction);
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
