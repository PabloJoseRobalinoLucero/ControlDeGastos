let gastos = []

const listaGastos = document.getElementById("listaGastos")
const totalValor = document.getElementById("totalGastos")

function agregar() {
    let nombreGasto = document.getElementById("nombreGasto").value
    let valorGasto = document.getElementById("valorGasto").value

    gastos.push([nombreGasto,valorGasto])
    actualizarListaGastos()
    if (valorGasto > 150) {
        alert("Tu gasto está superando los $150")
    }
}

function actualizarListaGastos() {
    let htmlLista = ""
    let totalGastos = 0

    gastos.forEach((gasto, index) => {
        const valorGasto = Number(gasto[1]).toFixed(2)
        htmlLista += `<li>${gasto[0]}: $${valorGasto}
                        <button onclick="eliminarGasto(${index})">Eliminar</button>
                    </li>`
        totalGastos += Number(gasto[1])
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
    gastos.splice(index, 1)
    actualizarListaGastos()
}