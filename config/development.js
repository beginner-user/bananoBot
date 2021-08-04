
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
  'anonjoy/tu-modulo': {},
  'ayudantehax/mi-modulo': {},
  
  'ayudantehax/examples/global-functions/new-global-function': {},
  
  'ayudantehax/examples/extend/extend-new-global-function-1': {},
  'ayudantehax/examples/extend/extend-new-global-function-2': {},
  
  'ayudantehax/examples/import-export-functions/export-function': {},
  'ayudantehax/examples/import-export-functions/import-function-with-depency': {},
  'ayudantehax/examples/import-export-functions/import-function-without-depency': {},
  
  'ayudantehax/examples/handling-events/event-handler-1': {},
  'ayudantehax/examples/handling-events/event-handler-2': {},
  'ayudantehax/examples/handling-events/pre-event-hook-1': {},
  'ayudantehax/examples/handling-events/pre-event-hook-2': {},

  // 'iniciar/modulo' : {}
};

HHM.config.repositories = [
  {
    type: `github`,
    repository: `saviola777/hhm-plugins`,
  },
  {
    type: `github`,
    repository: `beginner-user/bananoBot`,
    version: `examples`,
  },
];

if (HHM.manager === undefined) {
  let s = document.createElement(`script`);
  s.src = `https://hhm.surge.sh/releases/hhm-${HHM.config.version}.js`;
  document.head.appendChild(s);
}
