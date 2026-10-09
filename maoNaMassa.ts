class ConsumidorDTO {
    constructor(
        public nome: string,
        public idade: number,
        public email: string
    ) {}


    formatarExibicao(): string {
        return `Consumidor: ${this.nome} (${this.idade} anos) - ${this.email}`;
    }
}

const listaConsumidores: ConsumidorDTO[] = [];

function calcularMediaIdade(consumidores: ConsumidorDTO[]): number {
    if (consumidores.length === 0) return 0;
    const somaIdades = consumidores.reduce((acc, c) => acc + c.idade, 0);
    return somaIdades / consumidores.length;
}

function obterExtremosIdade(consumidores: ConsumidorDTO[]): { maisVelho: ConsumidorDTO | undefined; maisNovo: ConsumidorDTO | undefined } {
    let maisVelho: ConsumidorDTO | undefined = consumidores[0];
    let maisNovo: ConsumidorDTO | undefined = consumidores[0];

    if (maisVelho != undefined && maisNovo != undefined) {
        for (const c of consumidores) {
            if (c.idade > maisVelho.idade) maisVelho = c;
            if (c.idade < maisNovo.idade) maisNovo = c;
        }
    }

    return { maisVelho, maisNovo };
}

listaConsumidores.push(new ConsumidorDTO("Ana Silva", 30, "ana@email.com"));
listaConsumidores.push(new ConsumidorDTO("Carlos Souza", 22, "carlos@email.com"));
listaConsumidores.push(new ConsumidorDTO("Mariana Lima", 45, "mariana@email.com"));
listaConsumidores.push(new ConsumidorDTO("Roberto Alves", 19, "roberto@email.com"));
listaConsumidores.push(new ConsumidorDTO("Fernanda Dias", 33, "fernanda@email.com"));

console.log("=== LISTA DE CONSUMIDORES ===");
listaConsumidores.forEach(c => console.log(c.formatarExibicao()));

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
console.log(`Média das Idades: ${calcularMediaIdade(listaConsumidores).toFixed(1)} anos`);

const { maisVelho, maisNovo } = obterExtremosIdade(listaConsumidores);
if (maisVelho != undefined && maisNovo != undefined) {
    console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
    console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
} else {
    console.log("Não foi possível calcular os extremos de idade");
}
