let arrayDeClientes : Array< {cliente: string, saldoTotal: number, debitos: number[]} > = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

let debitosTotal = arrayDeClientes.map(cliente => {
    return {
        cliente: cliente.cliente,
        debitosTotal: cliente.debitos.reduce((saldoTotal, debitos) => saldoTotal + debitos)
    }
    }
)

let calculaSaldo = arrayDeClientes.map(cliente => {
    return {
        cliente: cliente.cliente,
        saldoTotal: cliente.saldoTotal - cliente.debitos.reduce((saldoTotal, debitos) => saldoTotal + debitos)
    }
    }
)

let saldoTotal = calculaSaldo.map(cliente => {
    return {
        cliente: cliente.cliente,
        saldoTotal: cliente.saldoTotal
    }
    }
)

function arrayDeDebitos (array: Array< {cliente: string, saldoTotal: number, debitos: number[]} >) {
    return array.map(cliente => {
        return {
            cliente: cliente.cliente,
            debitos: cliente.debitos
        }
    })
}

console.table(arrayDeDebitos(arrayDeClientes));