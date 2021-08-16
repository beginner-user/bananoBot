

/*
"width" : 700, "height" : 320,
"width" : 550, "height" : 240,
"width" : 370, "height" : 170,
"width" : 320, "height" : 130,
*/

class Line {
  constructor(d0, d1, type) {
    this.d0 = d0;
    this.d1 = d1;
    this.type = type; // "stick" | "flag"
  }
}



function asd() {
  const lines = [];
  for (let i = 1; i <= 50; i += 2) {
    lines.push(new Line(i, i + 1));
  }
}

var map = `
{

	"name" : "Big",
	
	"width" : 600,
  
	"height" : 270,
	
	"spawnDistance" : 350,
	
	"bg" : { "type" : "grass", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0 },

	"vertexes" : [

	],
	
	"segments" : [

	],
	
	"goals" : [

	],
	
  "planes" : [

	],
  
	"discs" : [
		{ "pos" : [0, 0], "trait" : "flag" },
		{ "pos" : [0, 0], "trait" : "flag" },
		{ "pos" : [0, 0], "trait" : "flag" },
		{ "pos" : [0, 0], "trait" : "flag" }
    
	],
	
  "joints" : [
		{ "d0" : 1, "d1" : 2, "length" : [0, 99999999 ], "color" : "ff0000" },
		{ "d0" : 3, "d1" : 4, "length" : [0, 99999999 ], "color" : "ff0000" },

	],
	
	"traits" : {
    "flag" : { "radius" : 0, "cMask" : ["" ] }
    
	}
  
}`;

var room = HBInit({
	roomName: "My room",
	maxPlayers: 16,
	noPlayer: true,
  public: false,
});
room.setDefaultStadium("Big");
room.setScoreLimit(5);
room.setTimeLimit(0);

function updateAdmins() { 
  var players = room.getPlayerList();
  if ( players.length == 0 ) return;
  if ( players.find((player) => player.admin) != null ) return;
  room.setPlayerAdmin(players[0].id, true);
}

room.onPlayerJoin = function(player) {
  updateAdmins();
}

room.onPlayerLeave = function(player) {
  updateAdmins();
}
