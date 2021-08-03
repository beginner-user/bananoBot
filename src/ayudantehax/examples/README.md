# Extensiones de una función

La ultima extensión es la primer función a la que llamará HHM, la función original será la ultima en ser llamada.

Un plugin no se cargará hasta que se carguen sus dependencias, asi que el evento ```onRoomLink``` de los plugins no será llamado hasta que sus dependecias sean cargadas. Esta es la forma de establecer un orden si se quiere, de las extensiones de una función.

Para que todas las extensiones sean llamadas siempre se debe llamar a ```previousFunction``` antes de llegar a la función original.

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
