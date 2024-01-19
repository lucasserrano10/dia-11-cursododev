let nomes = []
let senhas = []
let posicaodoarray = 0
let continuar = true



while(continuar){
    let pergunta = parseInt(prompt("oque deseja fazer ? cadastrar = 1, fazer login = 2, excluir um cadastro = 3 ou encerrar o programa = 4"))
switch(pergunta){

    case 1 :
        let cadastronome = prompt("insira seu nome")
        let cadastrosenha = prompt("coloque sua senha")
        nomes[posicaodoarray] = cadastronome
        senhas[posicaodoarray] = cadastrosenha
        posicaodoarray++
        alert('cadastrado com sucesso ')
        break;

        case 2 :
            let loginnome = prompt("insira seu nome")
            let loginsenha = prompt("coloque sua senha")
            let loginvalido = false

            for(i = 0; i < nomes.length; i++){
                if(loginnome === nomes[i] && loginsenha === senhas[i]){
                    loginvalido = true
            }
            }

        if(loginvalido = true){
            alert("login efetuado com sucesso !")
        }else {
            alert("login não efetuado !")
        }
            break;

            case 3:
                let excluirnome = prompt("qual nome deseja excluir ?")
                let nomeaux = []
                let senhaaux = []
                let contadoraux = 0

                for(let i  = 0; i < posicaodoarray; i ++){
                    if(excluirnome === nomes[i]){
                        alert("cadastro excluido com sucesso !")
                    }else{
                        nomeaux[contadoraux] = nomes[i]
                        senhaaux[contadoraux] = senhas [i]
                        contadoraux++
                    }

                    
                }
                nomeaux = nomes
                senhaaux = senhas
                posicaodoarray --
                
                

    
                break;

                case 4 : 
              continuar = false
              break;
              default :
                console.log("programa encerrado, obrigado !")
                break;

        

            








}


}
