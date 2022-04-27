const Node= require('./node');


class ListSimple {


    constructor(){
        this.first = null;
        this.last = null;
        
        
    }

//Validar si la lista esta vacia
    listEmpty(){
        return this.first == null;
    }

//Inserter parametros en la lista
    Insert(numTel, nombre, direccion){
        // console.log(data)

        let newNode = new Node(numTel, nombre, direccion);

        if(this.listEmpty()){
            this.first = newNode;
            this.last = newNode;

        }else{
            // Pointer next the element last => newNode
            this.last.next = newNode;
            //Pointer last => new element
            this.last = newNode;
        }

    
    }

//eliminar un nodo
    Remove(numTel){
        
        let match = false;

        if(numTel === undefined){
            return console.log('Por favor asigne un elemento para eliminar');
        }

        if(this.listEmpty()){
            console.log('No es posible eliminar un elemento de una lista vacia')
        }else if(this.first == this.last && this.first.numTel == numTel){
            
            //Verificar si es el último elemento en la lista
            
             this.first = null; 
             this.last = null;
             match = true;

        }else {
            //Operación para eliminar en cualquier parte de la lista

            let aux = this.first;

            while (aux != null){
                if(aux.numTel == numTel){
                    match = true;
                    break
                }
                aux = aux.next;
            }

            if(match){
                let aux = this.first;
            
            while(aux.next.numTel != numTel){
               
                aux = aux.next;
               
            }

            //Definir el nodo a eliminar

            let deleteNode = aux.next;
            aux.next = deleteNode.next;

            //aux.next = aux.next.next;

            //Si la posición actual es el último elemento

            if(aux.next == null){
               
                this.last = aux;
            }

            //update size the list
            match = true;
        }

            }
            
        if(match == false){
            console.error('Error: Este elemento no existe en la lista');
        }
    
    }


//mostrar la tabla con las listas enlazadas
    Show(){
        //console.log(this.first)
        let aux = this.first;
        while(aux != null){
            console.log(`${aux.numTel} | ${aux.nombre} | ${aux.direccion}`);
            aux = aux.next;
        }
        console.log('');
    }

    //buscar un número de telefono y devolver los datos de la persona
    Search(numTel){

        let aux = this.first;

        while(aux){
            if(aux.numTel == numTel){
                let resultado = `Valor encontrado: ${aux.numTel} | ${aux.nombre} | ${aux.direccion}`
                console.log('');
                 console.log(resultado);
                 return true;   
                }
                
                aux = aux.next;
        }

        return false;

    }

    //obtener la clave Hash
    HashKey(data, size) {

        // console.log(typeof(data))

        if (typeof data === 'string') {
            
            let cont = 0;
            for (var i = 0; i < data.length; i++) {
                // console.log(cadena.charCodeAt(i))
                cont += data.charCodeAt(i)
            }

            return cont % size;

        }

        return data % size;




    }
  
}


module.exports = ListSimple;

