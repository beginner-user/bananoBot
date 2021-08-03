# Extensiones de una función

La ultima extensión es la primer función a la que llamará HHM, la función original será la ultima en ser llamada.

# Pasar parametros a una función extendida

Desde la consola: 
```
HHM.manager.room.newRoomFunction(functionArguments, { [`${HHM.manager.room.getName()}_argName`]: extendedArgument })
```
o lo que es lo mismo 
```
HHM.manager.room.newRoomFunction(functionArguments, { `undefined_argName`: extendedArgument })
```

Desde un plugin: 
```
room.newRoomFunction(functionArguments, { [`${room.getName()}_argName`]: extendedArgument })
```
