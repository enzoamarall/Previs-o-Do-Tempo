// DOM
const key = "04a510d160ad7018c01e68668e81b8b1" // minha chave que serve como protetora da minha API
const cidade = document.querySelector('.input-cidade') // input da minha cidade
const botao = document.querySelector('.botao-busca') // botão de busca pra poder aparecer a previsão da minha cidade
const textoCidade = document.querySelector('.cidade') // Texto que vai aparecer minha cidade
const temperatura = document.querySelector('.temp') // Texto que vai aparecer a minha temperatura
const imgPrevisao = document.querySelector('.img-previsao') // Imagem que vai aparecer de acordo com o tempo
const textoPrevisao = document.querySelector('.texto-previsao') // texto que vai mostrar a previsão


//evento

botao.addEventListener('click', clickBotao) // evento pra poder quando cliclar no meu botão lupa

//primeira função 

function clickBotao(){
    const valorDigitado = cidade.value // pego o que ele digitou do meu input
    
    //console.log(valorDigitado)

    buscarCidade(valorDigitado)

}

//SEGUNDA FUNÇÃO (API) Só usa função assícrona quando eu consumir um BackEnd
async function buscarCidade(valorDigitado){ // Essa função é assicrona, ela espera um processamento, ela só avança com a resposta
   
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorDigitado}&appid=${key}&units=metric&lang=pt_br`).then(resposta=>resposta.json()) // 'await' ele espera o processamento e só avança com a resposta, coloco o then e o json pra poder traduzir a linguagem da minha API em JavaScript
    //convertir as minhas medidas pra poder aparecer em graus Celcius e pra traduzir pra ficar em portugues
    
    console.log(dados)

    mostrarNaTela(dados)

}
//terceira função, exibição da API na tela
function mostrarNaTela(dados){
    
    textoCidade.innerHTML = " Tempo em " + dados.name // mostrando o nome da cidade
    temperatura.innerHTML =  Math.floor(dados.main.temp) + "°C" // acessando o tempo da através do tempo
    imgPrevisao.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    //textoPrevisao.innerHTML = 

}