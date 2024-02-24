AOS.init();

const dataDoEvento = new Date("Dec 12, 2022 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAshoras = sentIinterval(function() {
    const agora = new Date()
    const TimeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - TimeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor ( distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor ((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento =  (distanciaAteOEvento % horasEmMs) / minutosEmMs;
    const segundoAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
    
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundoAteOEvento)

    document.getElementById('contador').innerHTML = '${diasAteOEvento}d $(horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s';
    
    if (distanciaAteOEvento < 0) {
        clearInterval(contasAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
},  1000);