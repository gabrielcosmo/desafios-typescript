//interface pessoa define os atributos esperados para os objetos
interface pessoa {
    nome: string,
    idade: number,
    profissao: string
}

//objetos que implementam a interface pessoa
let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
}

let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome:"carlos",
    idade: 19,
    profissao: "padeiro"
}
