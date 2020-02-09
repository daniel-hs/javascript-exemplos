class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l)); 
    }

    sumario() {
        let valorConsolidadado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidadado += l.valor;
        });
        return valorConsolidadado;
    }
}

const salario = new Lancamento('Salario', 450000);
const contaDeLuz = new Lancamento('Luz', -220);
const contas = new CicloFinanceiro(02, 2020);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());