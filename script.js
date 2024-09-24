let gastos = []

const listaGastos = document.getElementById("listaGastos")
const totalValor = document.getElementById("totalGastos")

function agregar() {
    let nombreGasto = document.getElementById("nombreGasto").value
    let valorGasto = document.getElementById("valorGasto").value
    let descripcionGasto = document.getElementById("descripcionGasto").value

    gastos.push([nombreGasto,valorGasto,descripcionGasto])
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
        htmlLista += `<tr>
                        <td>${gasto[0]}</td>
                        <td class="valor">$${valorGasto}</td>
                        <td>${gasto[2]}</td>
                        <td>
                            <button onclick="eliminarGasto(${index})">
                                <img src="./assets/trash.svg" alt="eliminar">
                            </button>
                        </td>
                    </tr>`
        totalGastos += Number(gasto[1])
    })
    
    listaGastos.innerHTML = htmlLista
    totalValor.innerHTML = totalGastos.toFixed(2)
    limpiar()
}

function limpiar() {
    document.getElementById("nombreGasto").value = ""
    document.getElementById("valorGasto").value = ""
    document.getElementById("descripcionGasto").value = ""
}

function eliminarGasto(index) {
    gastos.splice(index, 1)
    actualizarListaGastos()
}