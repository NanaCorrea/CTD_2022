import {somar} from './somar.js'
import {dividir} from './dividir.js'
import {multiplicar} from './multiplicar.js'
import {subtrair} from './subtrair.js'

let operacao = prompt('Digite 1 para somar, 2 para dividir, 3 para multiplicar ou 4 para subtrair')

let n1 = parseI1nt(prompt('Digite o primeiro número:'))
let n2 = parseInt(prompt('Digite o segundo número:'))

if (operacao == 1) {
    somar(n1,n2)
}else if (operacao == 2) {
    dividir(n1,n2)
}else if (operacao == 3) {
    multiplicar(n1,n2)
}else {
    subtrair(n1,n2)
}

