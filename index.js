const calcular = document.querySelector('#btn--calcular')

calcular.addEventListener('click', () => {
    //Recebendo valores dos input no meu js
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado');

    // Verificando se os campos estão vazios e criando suas classificações 
    // Jogando valores dentro do campo reultado
    if(nome.value !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao= '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if(valorIMC <25 ){
            classificacao = 'com peso padrão.'
        }else if(valorIMC < 30){
            classificacao = 'um pouco acima do peso.'
        }else if(valorIMC < 35){
            classificacao = 'com obsidade grau 1.'
        }else if(valorIMC < 40){
            classificacao = 'com obsidade grau 2.'
        }else{
            classificacao = 'com obsidade grau 3, cuidado procure um medico e nutricionista.'
        }
        resultado.textContent = `${nome} seu IMC é de ${valorIMC} e você está ${classificacao}`;
    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }
});

