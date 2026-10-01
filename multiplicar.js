function agregarTablas(){
    let multiplicador = 5
    let contenido="";
    let contenedor = document.getElementById("resultadoTablas")
    for(let i =multiplicador; i<=multiplicador*10; i+=multiplicador){
        contenido += "<tr><td>"+multiplicador+" × "+i/multiplicador+"</td><td>"+i+"</td></tr>";
    }
    contenedor.innerHTML = contenido;
    
 
}