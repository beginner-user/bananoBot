
HHM = typeof HHM === `undefined` ? {} : HHM;
HHM.config = HHM.config || {};

HHM.config.version = `git`;

HHM.config.room = {
  roomName: `Test room`,
  playerName : `BananoBot`,
  maxPlayers: 30,
  noPlayer: false,
  public : false,
  // password: ``,
  // geo: { code: `FI`, lat: 60.192059, lon: 24.945831 },
  // token: `insert your token here`
};

HHM.config.postInit = HBInit => {
  var room = HBInit();

  room.onRoomLink = () => {
    // Put your changes here
    room.setDefaultStadium(`Classic`);
    room.setScoreLimit(3);
    room.setTimeLimit(3);
  }
};

HHM.config.plugins = {
  'sav/roles': {
    roles: {
      'host': `123456`,
      // 'admin': `admin password`
    },
  },
  'sav/core': {},
  'sav/plugin-control': {},
  'anonjoy/tu-modulo': {},
  'ayudantehax/mi-modulo': {},
  // 'iniciar/modulo' : {}
};

HHM.config.repositories = [
  {
    type: `github`,
    repository: `saviola777/hhm-plugins`,
  },
  {
    type: `github`,
    repository: `anonjoy/bananoBot`,
    version: `development`,
  },
];

if (HHM.manager === undefined) {
  let s = document.createElement(`script`);
  s.src = `https://hhm.surge.sh/releases/hhm-${HHM.config.version}.js`;
  document.head.appendChild(s);
}
