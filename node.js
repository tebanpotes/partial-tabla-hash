class Node {

    constructor(numTel, nombre, direccion, next = null ){
       this.numTel = numTel;
       this.nombre = nombre;
       this.direccion = direccion;
        this.next = next;
    }
}



module.exports =Node;