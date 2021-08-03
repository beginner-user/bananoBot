# Pasando parametros a una función extendida

Desde la consola: 
```
HHM.manager.room.newRoomFunction(functionArguments, { [`${HHM.manager.room.getName()}_level`]: extendedArgument })
```
o lo que es lo mismo 
```
HHM.manager.room.newRoomFunction(functionArguments, { `undefined_level`: extendedArgument })
```

Desde un plugin: 
```
room.newRoomFunction(functionArguments, { [`${room.getName()}_level`]: extendedArgument })
```
