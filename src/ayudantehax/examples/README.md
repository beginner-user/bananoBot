
Desde la consola: HHM.manager.room.newRoomFunction(1, 2, 3, { undefined_flevel: `flevel`, undefined_slevel: `slevel` });
Desde un plugin:  room.newRoomFunction(1, 2, 3, { [`${room.getName()}_flevel`]: `flevel`, [`${room.getName()}_slevel`]: `slevel` });
