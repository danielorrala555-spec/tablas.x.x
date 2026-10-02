function recuperarTexto(idComponente){
    let componente=document.getElementById(idComponente);
    let valor =componente.value;
    return valor; 
}

function recuperarFloat(idComponente){
   let valorTexto=recuperarTexto(idComponente);
   let valorFloat=parseFloat(valorTexto)
   return valorFloat;
}

function recuperarEntero(idComponente){
   let valorTexto=recuperarTexto(idComponente);
   let valorEntero=parseInt(valorTexto)
   return valorEntero;
}

function agregarTablas(){
    let multiplicador = recuperarEntero("numeroTabla")
    let contenido="";
    let nuevoTitulo ="";
    let contenedor = document.getElementById("resultadoTablas")
    let titulo = document.getElementById("titulo")
    for(let i =multiplicador; i<=multiplicador*10; i+=multiplicador){
        contenido += "<tr><td>"+multiplicador+" × "+i/multiplicador+"</td><td>"+i+"</td></tr>";
    }
    titulo.innerHTML = nuevoTitulo+= "<h1>Tabla del "+multiplicador+"</h1>"
    contenedor.innerHTML = contenido;
    
 
}