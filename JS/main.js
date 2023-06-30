const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
    e.preventDefault()

    const data={
        username: username.value,
        password: password.value
    }

    console.log(data)

})


window.addEventListener("load", cargaPagina);
function cargaPagina() {
    var btn = document.getElementById("addunit").addEventListener("click", sumarunit);
}


function sumarunit(){
   
    var inputcliente = document.getElementById("cliente").value;
    var inputlote = document.getElementById("lote").value;
    var inputtransporte = document.getElementById("transporte").value;
    var inputbodega = document.getElementById("bodega").value;
    var inputcantidad = document.getElementById("cantidad").value;

    var fila="<tr><td>"+inputcliente+"</td><td>"+inputlote+"</td><td>"+inputcantidad+"</td><td>"+inputcantidad*8+"</td><td><button type='button' class='btn btn-success w-100' id='button' >Ver Estado y Stock</button></td><td><button type='button' class='btn btn-success w-100' id='button' >Ver Movimientos</button></td><td><button type='button' class='btn btn-success w-100' id='button' >Modificar</button></td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}

