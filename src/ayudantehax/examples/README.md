
Desde la consola: ```HHM.manager.room.newRoomFunction(previousArguments, { [`${HHM.manager.room.getName()}_level`]: newArgument })```

o lo que es lo mismo ```HHM.manager.room.newRoomFunction(previousArguments, { [`undefined_level`]: newArgument })```

Desde un plugin: ```room.newRoomFunction(previousArguments, { [`${room.getName()}_level`]: newArgument })```
