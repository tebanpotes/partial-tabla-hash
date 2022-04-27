
const ListSimple = require('./lists');
const prompt = require('prompt-sync')();

const sizeArray = 3;


const ht = new ListSimple();

const tableHash = [];

//instanciar la tabla
for(var i=0; i < sizeArray;i++){

    tableHash.push(new ListSimple());


}

//crear un arreglo para insertar los datos iniciales
directorio =[{nombre: 'Juan Pérez', numTel: 6043330000, direccion: 'Carrera 4 #69 - 100'},
{nombre: 'Luisa Calderón', numTel: 6044320101, direccion: 'Calle 15 #67 - 56'},
{nombre: 'Ana Acosta', numTel: 6042340203, direccion: 'Calle 52 #22 - 76'},
{nombre: 'Ignacio Ruiz', numTel: 6042220303, direccion: 'Carrera 78 #74 - 48'},
{nombre: 'Eduardo Castro', numTel: 6044440404, direccion: 'Calle 32 #21 - 87'},
{nombre: 'María Lasso', numTel: 6044558888, direccion: 'Calle 21 #51 - 13'},
{nombre: 'Elsa Barco', numTel: 6044437777, direccion: 'Diagonal 18 #70 - 14'},
{nombre: 'Luis Palacios', numTel: 6042331212, direccion: 'CalleAvenida 29 #70 - 32'},
{nombre: 'Mario León', numTel: 6042225555, direccion: 'Calle 94 #38 - 92'},
{nombre: 'Tomás Pino', numTel: 6043453232, direccion: 'Avenida 11 #22 - 25'},


]

//recorrer los datos para insertar en la tabla y listas
for(var i = 0; i < directorio.length; i++){

    key = ht.HashKey(directorio[i].numTel, sizeArray);
    tableHash[key].Insert(directorio[i].numTel, directorio[i].nombre, directorio[i].direccion);
}

//Menu
while(true){

    console.log('');
    console.log('Directorio Telefónico\n');


    for(var i=0; i < sizeArray; i++){
        console.log(`hl: ${i}: `);
        tableHash[i].Show();
        // console.log(tableHash[i]);
        console.log('');
    }

    console.log(`\nMenu:\n 1. Insert\n 2. Search \n 3. Remove\n 4. Show\n 5. Exit  `);

    let option = prompt('Digite una opción: ');

    if(option == 1){

        //capturar los 3 parametros para insertar un nuevo registro
        let numTel = prompt('NumTel: ');
        let nombre = prompt('nombre: ');
        let direccion = prompt('direccion: ');


        key = ht.HashKey(numTel, sizeArray);

        console.log(key);
        tableHash[key].Insert(numTel, nombre, direccion);  

    }else if(option == 2){

        //buscar un número de teléfono y devolver sus datos
        let value = prompt('Digite numTel a buscar: ');

        key = ht.HashKey(value, sizeArray);

        search = tableHash[key].Search(value);
        
        if(!search){

            console.log(`El valor ${value} no fue encontrado en la tabla Hash`);

        }

     
    }else if(option == 3){
        //eliminar un dato de la tabla - lista
        let value = prompt('Digite numTel a eliminar: ');

        key = ht.HashKey(value, sizeArray);

        tableHash[key].Remove(value);
        
    }else if(option == 4){
        // mostrar la tabla
        for(var i=0; i < sizeArray; i++){
            console.log(`hl: ${i}: `);
            tableHash[i].show();
            // console.log(tableHash[i]);
            console.log('');
        }
        
    }else if(option == 5){
        break;
    }


}
    



