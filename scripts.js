const key = "4eda7d59b60e93795b82489e0eb3a3cd";

function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`);
    const dados = await resposta.json(); // Converte a resposta para JSON
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const input = document.querySelector(".input-cidade").value;
    buscarCidade(input); // Corrige para passar a variável input
}