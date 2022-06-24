En esta practica de hoy el objetivo es hacer un semaforo que cuando se pulse se cambie al color pulsado.

Para ello se ha creado en CSS la estructura del semaforo y 3 luces "apagadas".

Se ha creado un componente llamado semaforo que hemos renderizado en index.js.

Usando el Hook UseState le damos un valor null y usamos setSelectLight para ir cambiandolo onClick.

El comportamiento de cuando se pulsa es el siguiente, se cambia la clase de las luces añadiendo las etiquetas de CSS .seleccionado para añadirle un borde de luz y .redSel/.greenSel/.yellowSel para "iluminarlo".

Cuando se selecciona otro color, se vuelve el anterio al estado "apagado" con la etiqueda de CSS .red/.yellow/.green y se vuelve al paso anterior.