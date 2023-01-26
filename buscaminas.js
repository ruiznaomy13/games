$(document).ready(function(){
        
    $("#inicialitazaJoc").click(function(){
        filas = $("#filas").val();
        columnas = $("#columnas").val();
        table = $("#buscaTable");
        myArray = inicialitzaMines(filas, columnas);
        createTable(filas, columnas, myArray);
        console.log(myArray);
        for (let i = 0; i < filas; i++) {
            let row = table.insertRow();
            for (let j = 0; j < columnas; j++) {
              let cell = row.insertCell();
              cell.innerHTML = array[i][j];
            }
        }
    })
    
    //Creación del Array
    function inicialitzaMines(filas, columnas){
        let createdArr = [];
        for (let i=0;i<filas;i++){
            let createdArr2 = [];
            for (let j=0;j<columnas;j++){
                createdArr2.push(numMines());
            }
            createdArr.push(createdArr2);
        }
        return createdArr;
    }
    
    //Creación de la tabla
    function createTable(filas, columnas, myArray){
         for (let i=0; i<filas;i++){
            $("#buscaTable").append("<tr>")
            for (let j=0; j<columnas;j++){
                
                $("tr:last").append("<td id="+j+"_"+i+">" + myArray[i][j] + "</td>");
            }
            $("#buscaTable").append("</tr>")
         }   
    }

    function numMines() {
        // sea n100 un número del 1 al 100 y n3 el resultado de tu función
        var n100 = Math.floor(Math.random()*100+1);
        let n = [0, 1];

        if (n100<=15) //lo haré con 15 porque creo que 20% es mucho
          return n[1];
        else
          return n[0];
    }

    //Mediante un id geneardo en formato "0_0" sacamos la posición del array
    //si encontramos un 1 nos dirá que hemos encontrado un amina, sino
    //podemos seguir con el juego.
    //PINTAR DE VERDE Y ROJO DEPENDE
    //INTENTAR HACER UNA FUNCION QUE PONGA NUMEROS DEPENDE DE SU 3X3
    //hacer la tabal independiente del array

    // function inicialitzaMines(nMines, midaX, midaY){
    //     let area_total = 
    // }

});