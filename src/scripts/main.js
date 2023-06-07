import prettyMilliseconds from 'pretty-ms';

AOS.init();

// Definindo o timestamp do evento
const dataDoEvento = new Date("Jul 29, 2023 00:00:00");
const timestampDoEvento = dataDoEvento.getTime();

// Função para cronometrar o tempo restante de acordo com a diferença de timestamps e alteração de DOM
   const contador = setInterval(function() {
        const agora = new Date();
        const timestampAtual = agora.getTime();
        const distanciaAteOEvento = timestampDoEvento - timestampAtual;
    
        if(distanciaAteOEvento > 0) {
            var distanciaFormatada = prettyMilliseconds(distanciaAteOEvento, { secondsDecimalDigits: 0 })
            document.querySelector('.hero__text').innerHTML = `O maior evento de tecnologia do Brasil começa em <span class='hero__text--counter'>${distanciaFormatada}<span/>`
                } else {
            clearInterval(contador);
            const textoTimer = document.querySelector('.hero__text')
            textoTimer.classList.add('hero__text--counter')
            textoTimer.innerHTML = 'O evento já começou'
        }
    }, 1000)
