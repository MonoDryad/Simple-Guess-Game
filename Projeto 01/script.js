let dificuldadeJogo, nome, escolhaUsuario, contaMatematica, loopMe, inicialState, resultado, numeroO, numeroT, operador, operadorSelect, corretas, erradas

loopMe = 0



if(loopMe == 0){
    corretas = 0
    erradas = 0
    inicialState = document.querySelectorAll('.body-difficulty, .body-finishDetails, .body-game, .body-config, .body-menu')
    console.log('Loop', inicialState)

    inicialState[1].style.display = 'none'
    inicialState[2].style.display = 'none'
    inicialState[3].style.display = 'none'
    inicialState[4].style.display = 'none'
    loopMe = 1
}

function selecionarMenu(selecao) {
    if(selecao == 1){
        inicialState[0].style.display = 'none'
        inicialState[1].style.display = 'flex'
    }else if(selecao == 0){
        inicialState[0].style.display = 'none'
        inicialState[2].style.display = 'flex'
    }else if(selecao == null){
        inicialState[1].style.display = 'none'
        inicialState[0].style.display = 'flex'
        inicialState[2].style.display = 'none'
    }
}

function pegarDificuldade(dificuldade){

    if(dificuldade == 0){
        inicialState[2].style.display = 'none'
        inicialState[3].style.display = 'flex'
        dificuldadeJogo = 0
    }else if(dificuldade == 1){
        inicialState[2].style.display = 'none'
        inicialState[3].style.display = 'flex'
        dificuldadeJogo = 1
    }else if(dificuldade == 2){
        inicialState[2].style.display = 'none'
        inicialState[3].style.display = 'flex'
        dificuldadeJogo = 2
    }
    if (document.getElementById('extremaDificuldade').checked){
        inicialState[2].style.display = 'none'
        inicialState[3].style.display = 'flex'
        dificuldadeJogo = 3
    }
}

function jogar(){
    if(document.getElementById('nome-usuario').value.length > 2){
        nome = document.getElementById('nome-usuario').value
        console.log(nome)
        document.getElementById('player-name').innerHTML = nome + ' - Acertou: ' + corretas + ' Errou: ' + erradas 
        inicialState[3].style.display = 'none'
        inicialState[4].style.display = 'flex'
        generateQuestions()
    }else{

    }
}

function generateQuestions(){
    if(dificuldadeJogo == 0){
        numeroO = Math.floor(Math.random() * 9)
        numeroT = Math.floor(Math.random() * 9)
        operadorSelect = Math.floor(Math.random() * 1)
        if(operadorSelect == 0){
            operador = '+'
        }else if(operadorSelect == 1){
            operador = '-'
        }else if(operadorSelect == 2){
            operador = '*'
        }else if(operadorSelect == 3){
            operador = '/'
        }else if(operadorSelect == 4){
            operador = '**'
        }
    }else if(dificuldadeJogo == 1){
        numeroO = Math.floor(Math.random() * 19)
        numeroT = Math.floor(Math.random() * 19)
        operadorSelect = Math.floor(Math.random() * 1)
        console.log(operadorSelect)
        if(operadorSelect == 0){
            operador = '+'
        }else if(operadorSelect == 1){
            operador = '-'
        }else if(operadorSelect == 2){
            operador = '*'
        }else if(operadorSelect == 3){
            operador = '/'
        }else if(operadorSelect == 4){
            operador = '**'
        }
    }else if(dificuldadeJogo == 2){
        numeroO = Math.floor(Math.random() * 29)
        numeroT = Math.floor(Math.random() * 29)
        operadorSelect = Math.floor(Math.random() * 3)
        console.log(operadorSelect)
        if(operadorSelect == 0){
            operador = '+'
        }else if(operadorSelect == 1){
            operador = '-'
        }else if(operadorSelect == 2){
            operador = '*'
        }else if(operadorSelect == 3){
            operador = '/'
        }else if(operadorSelect == 4){
            operador = '**'
        }
    }else if(dificuldadeJogo == 3){
        numeroO = Math.floor(Math.random() * 69)
        numeroT = Math.floor(Math.random() * 69)
        operadorSelect = Math.floor(Math.random() * 5)
        console.log(operadorSelect)
        if(operadorSelect == 0){
            operador = '+'
        }else if(operadorSelect == 1){
            operador = '-'
        }else if(operadorSelect == 2){
            operador = '*'
        }else if(operadorSelect == 3){
            operador = '/'
        }else if(operadorSelect == 4){
            operador = '**'
        }else{
            operador = '+'
        }
    }
    if(operador == '+'){
        resultado = numeroO + numeroT
    }else if(operador == '-'){
        resultado = numeroO - numeroT
    }else if(operador == '*'){
        resultado = numeroO * numeroT
    }else if(operador == '/'){
        resultado = numeroO / numeroT
    }else  if(operador == '**'){
        resultado = numeroO ** numeroT
    }
    console.log(numeroO, operador, numeroT)
    document.getElementById('jogo-numeros').innerHTML = 'Quanto que é ' + numeroO + ' ' + operador + ' ' + numeroT + '?'
    console.log(resultado)
}

function guess(){
    if(document.getElementById('jogo-resposta').value.length > 0){
        if(parseInt(document.getElementById('jogo-resposta').value) == resultado){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Você acertou!',
                showConfirmButton: false,
                timer: 2500
              }).then(() => {
                    generateQuestions()
                    document.getElementById('jogo-resposta').value = null
                    corretas++
                    document.getElementById('player-name').innerHTML = nome + ' - Acertou: ' + corretas + ' Errou: ' + erradas 
                })
        }else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `A resposta correta é ${resultado}, tente novamente!`,
                showConfirmButton: false,
                timer: 2500
                }).then(() => {
                    generateQuestions()
                    document.getElementById('jogo-resposta').value = null
                    erradas++
                    document.getElementById('player-name').innerHTML = nome + ' - Acertou: ' + corretas + ' Errou: ' + erradas 
            }) 
        }
    }
}