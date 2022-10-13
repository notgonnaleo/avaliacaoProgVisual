function Game(){
    const pedraJogador = document.querySelector("#btn-pedra").value
    if(pedraJogador == NaN || pedraJogador == undefined){
        pedraJogador = "Indefinido"
    }

    const papelJogador = document.querySelector("#btn-papel").value
    if(papelJogador == NaN || papelJogador == undefined){
        papelJogador = "Indefinido"
    }

    const tessouraJogador = document.querySelector("#btn-tessoura").value
        if(tessouraJogador == NaN || tessouraJogador == undefined){
        tessouraJogador = "Indefinido"
    }

    if(pedraJogador != "Indefinido")
        {
            var escolhaJogador = parseInt(pedraJogador); //0
        }else 
    if(papelJogador != "Indefinido")
        {
            var escolhaJogador = parseInt(papelJogador); //1
        }else
    if(tessouraJogador != "Indefinido")
        {
            var escolhaJogador = parseInt(tessouraJogador); //2
        }

    const arrayPC = [0,1,2];

    var escolhaPC = [Math.floor(Math.random() * arrayPC.length)];

    if(escolhaJogador == escolhaPC){
        var resultado = document.querySelector("#resultado")
        resultado.innerHTML = "Empate!"
        console.log(escolhaPC)
    }
    
    else if(escolhaJogador > escolhaPC){
        var resultado = document.querySelector("#resultado")
        resultado.innerHTML = "Você Ganhou!"
        console.log("maquina" + escolhaPC)
        console.log("eu" + escolhaJogador)
    }

    else if(escolhaJogador < escolhaPC){
        var resultado = document.querySelector("#resultado")
        resultado.innerHTML = "Você Perdeu!"
        console.log(escolhaPC)
    }

}