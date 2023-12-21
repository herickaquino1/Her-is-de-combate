class Heroi{
  constructor(nome, idade, tipo,){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

    ataque(){
      let golpe = "";
      
      if(this.tipo === "Monge"){
        golpe = "Chute lateral"
      }else if(this.tipo === "Ninja"){
        golpe = "Shiriken"
      }else if(this.tipo === "Samurai"){
        golpe = "golpe de espada"
      }
      
      console.log("O " + this.tipo + " atacou com " + golpe);
    }
  }


let heroi1 = new Heroi("Mestre Yang",57,"Monge");
heroi1.ataque();
