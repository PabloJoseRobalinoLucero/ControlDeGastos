let listaNombresGastos = []
let listaValoresGastos = []
const listaGastos = document.getElementById("listaGastos")
const totalValor = document.getElementById("totalGastos")

function agregar() {
    let nombreGasto = document.getElementById("nombreGasto").value
    let valorGasto = document.getElementById("valorGasto").value

    listaNombresGastos.push(nombreGasto)
    listaValoresGastos.push(valorGasto)
    actualizarListaGastos()
    
}

function actualizarListaGastos() {
    let htmlLista = ""
    let totalGastos = 0

    listaNombresGastos.forEach((nombre, index) => {
        const valorGasto = Number(listaValoresGastos[index]).toFixed(2)
        htmlLista += `<li>${nombre}: $${valorGasto}
                        <button onclick="eliminarGasto(${index})">Eliminar</button>
                    </li>`
        totalGastos += Number(listaValoresGastos[index])
    })
    
    listaGastos.innerHTML = htmlLista
    totalValor.innerHTML = totalGastos.toFixed(2)
    limpiar()
}

function limpiar() {
    document.getElementById("nombreGasto").value = ""
    document.getElementById("valorGasto").value = ""
}

function eliminarGasto(index) {
    listaNombresGastos.splice(index, 1)
    listaValoresGastos.splice(index, 1)
    actualizarListaGastos()
}