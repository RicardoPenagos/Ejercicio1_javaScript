// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

const $ejercicio1Respuesta = document.querySelector('#ejercicio1Respuesta');
const $ejercicio1BtnSi = document.querySelector('#ejercicio1BtnSi');
const $ejercicio1BtnNo = document.querySelector('#ejercicio1BtnNo');

function respuestaSi(){
    $ejercicio1Respuesta.innerHTML = "¡Ciertamente!";
}

function respuestaNo(){
    $ejercicio1Respuesta.innerHTML = "No te creo";
}

$ejercicio1BtnSi.addEventListener('click', respuestaSi);
$ejercicio1BtnNo.addEventListener('click', respuestaNo);





// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

const $ejercicio2BtnAceptar = document.querySelector('#ejercicio2BtnAceptar');

function divisibleEntre2(){

    const $ejercicio2Input = document.querySelector('#ejercicio2Input').value;
    const $ejercicio2Respuesta = document.querySelector('#ejercicio2Respuesta');
    if($ejercicio2Input != ''){

        if($ejercicio2Input % 2 == 0){
            $ejercicio2Respuesta.innerHTML = 'Si es divisible entre 2'
        }else{
            $ejercicio2Respuesta.innerHTML = 'No es divisible entre 2'
        }
    }else{
        $ejercicio2Respuesta.innerHTML = 'Tienes que agregar un número'
    }
}

$ejercicio2BtnAceptar.addEventListener('click', divisibleEntre2);


// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

const $ejercicio3Activar = document.querySelector('#ejercicio3Activar');

function activarPrompt(){
    const numeroPrompt = prompt("Introduce un número y te diré si es par o no");
    if(!isNaN(numeroPrompt)){{
        if( numeroPrompt % 2 == 0){
            alert("El número que introduciste en el prompt SI es par");
        }else{
            alert("El número que introduciste en el prompt NO es par");
        }

    }}else{
        alert("Vuelve a activar el botón porque tienes que agregar un número");
    }
}

$ejercicio3Activar.addEventListener('click', activarPrompt);



// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

const $ejercicio4BtnAceptar = document.querySelector('#ejercicio4BtnAceptar');

function clienteGanador(){

    const $ejercicio4Input = document.querySelector('#ejercicio4Input').value;
    const $ejercicio4Respuesta = document.querySelector('#ejercicio4Respuesta');
    
    if($ejercicio4Input != ""){
        if($ejercicio4Input == 1000){
            $ejercicio4Respuesta.innerHTML = '¡Felicidades, ganaste un premio!';
    
        }else{
            $ejercicio4Respuesta.innerHTML = `${$ejercicio4Input} no es un número ganador. Lo sentimos, sigue participando`;
        }
    }else{
        $ejercicio4Respuesta.innerHTML = 'Tienes que agregar un número'
    }
    
}

$ejercicio4BtnAceptar.addEventListener('click', clienteGanador);

// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

const $ejercicio5BtnAceptar = document.querySelector('#ejercicio5BtnAceptar');

function numeroMenor(){

    const $ejercicio5Input1 = Number (document.querySelector('#ejercicio5Input1').value);
    const $ejercicio5Input2 = Number (document.querySelector('#ejercicio5Input2').value);
    const $ejercicio5Respuesta = document.querySelector('#ejercicio5Respuesta');

    if( $ejercicio5Input1 != 0 && $ejercicio5Input2 != 0){
        
        if($ejercicio5Input1 >= $ejercicio5Input2){
            $ejercicio5Respuesta.innerHTML = `El número menor es: ${$ejercicio5Input2}`
        }else{
            $ejercicio5Respuesta.innerHTML = `El número menor es: ${$ejercicio5Input1}`
        }

    }else{
        $ejercicio5Respuesta.innerHTML = "Asegurate que agregaste un número en ambas casillas";
    }

}

$ejercicio5BtnAceptar.addEventListener('click', numeroMenor); 


// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

const $ejercicio6BtnAceptar = document.querySelector('#ejercicio6BtnAceptar');

function numeroMayor(){

    const $ejercicio6Input1 = Number (document.querySelector('#ejercicio6Input1').value);
    const $ejercicio6Input2 = Number (document.querySelector('#ejercicio6Input2').value);
    const $ejercicio6Input3 = Number (document.querySelector('#ejercicio6Input3').value);
    const $ejercicio6Respuesta = document.querySelector('#ejercicio6Respuesta');

    if( $ejercicio6Input1 != 0 && $ejercicio6Input2 != 0 && $ejercicio6Input3 != 0){
        console.log('si entro al if ');
        
        if($ejercicio6Input1 >= $ejercicio6Input2 && $ejercicio6Input1 >= $ejercicio6Input3 ){
            $ejercicio6Respuesta.innerHTML = `El número mayor es: ${$ejercicio6Input1}`
        }else if($ejercicio6Input2 >= $ejercicio6Input1 && $ejercicio6Input2 >= $ejercicio6Input3 ){
            $ejercicio6Respuesta.innerHTML = `El número mayor es: ${$ejercicio6Input2}`
        }else if($ejercicio6Input3 >= $ejercicio6Input1 && $ejercicio6Input3 >= $ejercicio6Input2 ){
            $ejercicio6Respuesta.innerHTML = `El número mayor es: ${$ejercicio6Input3}`
        }

    }else{
        $ejercicio6Respuesta.innerHTML = "Asegurate que agregaste un número en todas las casillas";
    }

}

$ejercicio6BtnAceptar.addEventListener('click', numeroMayor); 

// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

const $ejercicio7BtnAceptar = document.querySelector('#ejercicio7BtnAceptar');

function randomLunes(){
    const datos = ["El riesgo de ataques al corazón aumenta un 20% durante los lunes.","La mayoría de suicidios ocurren los lunes", "Casi el 50% de los empleados llega tarde al trabajo los lunes.", "Personas de edades comprendidas entre los 45 y 55 años suelen sufrir más el «síndrome de los lunes».", "Curiosamente los lunes son días buenos para comprar un coche ya que muchos concesionarios confeccionan ofertas para comienzos de semana.", "Cambio en los patrones de sueño. Si eres de los que duermes más horas durante los fines de semana puede que el lunes notes esa falta de sueño y te sientas algo peor en tu trabajo o estudios.", "La noche del domingo al lunes es la que menos dormimos.","Los lunes tenemos una peor imagen de nosotros mismos y nos cuesta más socializarnos.", "Nuestros deseos de cambiar de trabajo suelen aflorar durante este día de la semana.", "Menos trabajo. Normalmente los lunes se suele rendir menos en el trabajo. Se calcula que el trabajo productivo durante los lunes se limita a las 3-4 horas.", "Se cree que una buena manera de recuperarse de este tipo de síntomas provocados por el lunes es ver la televisión o tomar chocolate."]

    return datos[Math.floor(Math.random() * datos.length)];
}

function diaDeLaSemana(){
    
   
    const $ejercicio7Input1 = document.querySelector('#ejercicio7Input1').value.toUpperCase();
    const $ejercicio7Respuesta = document.querySelector('#ejercicio7Respuesta');
    

    if($ejercicio7Input1 === 'LUNES'){
        $ejercicio7Respuesta.innerHTML = randomLunes();
    
    }else if($ejercicio7Input1 === 'MARTES' || $ejercicio7Input1 === 'MIERCOLES' || $ejercicio7Input1 ==='JUEVES' ||               
             $ejercicio7Input1 === 'MIÉRCOLES'){
    
        $ejercicio7Respuesta.innerHTML = "Feliz día, estás bien encaminado durante este periodo, tú puedes, pronto terminarás con tu trabajo y estarás libre para divertirte o relajarte";
    
    }else if($ejercicio7Input1 === 'VIERNES'){
       $ejercicio7Respuesta.innerHTML = "Pues es Viernes, no esperes más de mi."
    
    }else if($ejercicio7Input1 === 'SÁBADO' || $ejercicio7Input1 === 'SABADO' || $ejercicio7Input1 === 'DOMINGO' ){
        $ejercicio7Respuesta.innerHTML = "Genial, es fin de semana, aprovechalo al máximo."
    
    }else{
        $ejercicio7Respuesta.innerHTML = "Eso no se puede hacer, tramposo."
    }
}

$ejercicio7BtnAceptar.addEventListener("click", diaDeLaSemana);

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

const $ejercicio8BtnAceptar = document.querySelector("#ejercicio8BtnAceptar");

function calificacion(){
    
    const $ejercicio8Input1 = Number(document.querySelector("#ejercicio8Input1").value);
    const $ejercicio8Respuesta = document.querySelector("#ejercicio8Respuesta");

    if($ejercicio8Input1 >= 0 && $ejercicio8Input1 <= 10){
        
        if($ejercicio8Input1 >= 0 && $ejercicio8Input1 < 6){
            $ejercicio8Respuesta.innerHTML = "Reprobado";
        }else if($ejercicio8Input1 >= 6 && $ejercicio8Input1 <= 8){
            $ejercicio8Respuesta.innerHTML = "Regular";
        }else if($ejercicio8Input1 === 9){
            $ejercicio8Respuesta.innerHTML = "Bien";
        }
        else if($ejercicio8Input1 === 10){
            $ejercicio8Respuesta.innerHTML = "Excelente";
        }

    }else{
        $ejercicio8Respuesta.innerHTML = "ERROR. Ese dato no es válido, ingresa uno correcto";
    }

}

$ejercicio8BtnAceptar.addEventListener('click', calificacion);


// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

const $ejercicio9BtnAceptar = document.querySelector('#ejercicio9BtnAceptar');

function topping(){

    const precios = {
        toppingNinguno: 50,
        toppingOreo: 60,
        toppingKitKat: 65,
        toppingBrownie: 70,
    };

    const $ejercicio9Respuesta = document.querySelector('#ejercicio9Respuesta');
    const $topping = document.getElementsByName('btnradio');
    for (var radio of $topping)
    {
        if (radio.checked) {
            const valor = radio.id;
            if(valor === "toppingNinguno"){
               $ejercicio9Respuesta.innerHTML = `El precio sería de: ${precios.toppingNinguno}`;
            }
            
        }
    }


}





    //const $topping = document.querySelector('input[name="topping"]:checked').value;

$ejercicio9BtnAceptar.addEventListener('click' , topping);

    // document.getElementById('ejercicio9BtnAceptar').onclick = function() {
    //     var radios = document.getElementsByName('btnradio');
    //     for (var radio of radios)
    //     {
    //         if (radio.checked) {
    //             console.log(radio.id);
    //         }
    //     }
    // }







// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses



// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.