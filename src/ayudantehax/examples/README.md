
Desde la consola: ```HHM.manager.room.newRoomFunction(args, { [`${HHM.manager.room.getName()}_level`]: `level` });```

o lo que es lo mismo ```HHM.manager.room.newRoomFunction(args, { [`undefined_level`]: `level` });```

Desde un plugin: ```room.newRoomFunction(args, { [`${room.getName()}_level`]: `level` });```
