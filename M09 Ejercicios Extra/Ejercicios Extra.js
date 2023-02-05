/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
//*recibo un objeto, ejemplo objeto = { a:1,b:2,c:3}
// declaro un array 
let ArrArr = Object.entries(objeto) ;
return ArrArr ; 
}


   


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y 
   //retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> 
   //{ a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var array=string.split('');
   var ordenando=array.sort()
   var contador ={} ;
   ordenando.forEach(function(propid){
      if (contador[propid] === undefined){
         contador[propid] = 1 ;
      }else {
         contador[propid] += 1 
      }
   });
   return contador ;}

   function capToFront(string){
      //Lo borre sin querer , aca se recibe un string , y se ordenenara por mayusculas 
      //y minusculas
   var array=string.split('') ;
   var arrayMAYUS=[] ;
   var arrayminus=[] ;
   for (let i=0 ; i<array.length ; i++){
       if (array[i]===array[i].toUpperCase()){
           arrayMAYUS.push(array[i]);
       } else {
           arrayminus.push(array[i]);
       }
   }
   var arrayordenado=arrayMAYUS.concat(arrayminus).join('') ;
   return arrayordenado ;
}

function asAmirror(frase) {
      // Recibes una frase. Tu tarea es retornar un nuevo string en el que 
      //el orden de las palabras sea el mismo.
      // La diferencia es que cada palabra estará escrita al inverso.
      // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
      // Tu código:
   var array=frase.split('');
   var arrayinv=[] ;
       for (let i=0 ; i<array.length ; i++){
           arrayinv.unshift(array[i]);}
   var fraseinv=arrayinv.join('');
       return fraseinv ;
}


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
