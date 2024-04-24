class heroi{
    constructor(tipo, nome, idade){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        
    }
    atacar(){
        let ataque = " ";
        switch (this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes maciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default :
                ataque = "heroi sem ataque"
        }
        console.log(`o ${this.tipo} usou o ataque ${ataque}`)
    }
}

let heroi1 = new heroi("mago","marcelo", 13)
let heroi2 = new heroi("guerreiro", "lucas", 20)

heroi1.atacar()
heroi2.atacar()