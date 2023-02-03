console.log('Olá Mundo!')
/** const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKM = 1590;

/*calcular o consumo*/
/* const litrosConsumidos = distanciaEmKM / kmPorLitros;
/*calcular o valor gasto */
/* const valorGasto = litrosConsumidos * precoCombustivel;
console.log (valorGasto.toFixed(2));**/

/** const numero = 10;
const numeroPar = (numero % 2) === 0;
console.log (numeroPar);

if (numero === 0) {
    console.log ('O NÚMERO É INVÁLIDO!');
} else if (numeroPar) {
    console.log ('O NÚMERO É PAR!');

} else {  
    console.log ('O NÚMERO É IMPAR!');

}
**/
/*const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKM = 1590;
const tipoCombustivel = 'Gasolina'
const litrosConsumidos = distanciaEmKM / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}*/
/*média = (nota 1 + nota 2 nota 3 ) /3;
Classificação 
Média menor 5 reprovação;
Média entre 5 e 7 recuperação;
Média acima de 7 aprovado; 

const nota1 = 7;
const nota2 = 7;
const nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);
if (media < 5) {
    console.log('O Aluno foi reprovado')
} else if (media >= 5 && media <= 7) {
    console.log('O Aluno está de recuperação');
} else {
    console.log('O Aluno foi aprovado');
}

const altura = 1.80;
const peso = 110;
const imc = peso / Math.pow (altura, 2); /*Math.pow calcular a potencia*/
/**console.log (imc);
if (imc <= 18.5) {
    console.log('Abaixo do peso');
} else if (imc > 18.5 && imc <= 25) {
    console.log('Peso normal');
}else if (imc > 25 && imc <= 30) {
    console.log('acima do peso');
} else if ( imc >30 && imc <=40) {
    console.log ('Obesidade')
} else {
    console.log ('obesidade grave')
    }

const valorProduto = 35.75;
const pagamento = 1;

if (pagamento === 1) {
    console.log(valorProduto-(valorProduto * 0.1));

} else if (pagamento === 2) {
    console.log (valorProduto - (valorProduto*0.15));
}else if (pagamento ===3) {
    console.log (pagamento);
}else {
    console.log (pagamento + (pagamento*.10));

}

function escrevaNome (nome) {
    console.log ('Meu nome é: ' + nome);
}

escrevaNome ('Emmerson')

function verIdadeMaior (idade) {
    if (idade >=18) {
        console.log ('é maior de idade');
    }else {
        console.log ('É menor');
    }
}

verIdadeMaior (19);
verIdadeMaior (16);*/
/*
const emmerson = {
    nome: 'Emmerson Lisboa',
    idade: 41

    descrever:function (){
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}



/*emmerson.altura=1.80;
delete emmerson.idade;*/

/*
console.log (emmerson.nome);
console.log (emmerson.idade);
console.log (emmerson.altura);
/*
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);*/
