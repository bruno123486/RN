const botoesMarc = document.querySelectorAll('.fix-conteiner button, .marc-btn');

const divMarc = document.querySelector('#div-marc');
const xBtn = document.querySelector('.x-btn i');
const overlay = document.querySelector('#overlay');

const confirmar = document.querySelector('#confirmar');

const nome = document.querySelector('#nome');
const telefone = document.querySelector('#telefone');
const Servico = document.querySelector('#Servico');
const data = document.querySelector('#data');
const horario = document.querySelector('#horario');


botoesMarc.forEach(function(botao) {

    botao.addEventListener('click', function(event) {

        event.stopPropagation();

        divMarc.classList.add('aberto');
        overlay.classList.add('aberto');

    });

});


divMarc.addEventListener('click', function(event) {

    event.stopPropagation();

});


document.addEventListener('click', function() {

    divMarc.classList.remove('aberto');
    overlay.classList.remove('aberto');

});


overlay.addEventListener('click', function() {

    divMarc.classList.remove('aberto');
    overlay.classList.remove('aberto');

});


xBtn.addEventListener('click', function(event) {

    event.stopPropagation();

    divMarc.classList.remove('aberto');
    overlay.classList.remove('aberto');

});


confirmar.addEventListener('click', function(event) {
    let formularioValido = true;

    // Verifica o Nome
    if (nome.value.trim() === '') {
        nome.classList.add('campo-erro');
        formularioValido = false;
    } else {
        nome.classList.remove('campo-erro');
    }

    // Verifica o Telefone
    if (telefone.value.trim() === '') {
        telefone.classList.add('campo-erro');
        formularioValido = false;
    } else {
        telefone.classList.remove('campo-erro');
    }

    // Verifica o Serviço
    if (Servico.value === '') {
        Servico.classList.add('campo-erro');
        formularioValido = false;
    } else {
        Servico.classList.remove('campo-erro');
    }

    // Verifica a Data
    if (data.value.trim() === '') {
        data.classList.add('campo-erro');
        formularioValido = false;
    } else {
        data.classList.remove('campo-erro');
    }

    // Verifica o Horário
    if (horario.value.trim() === '') {
        horario.classList.add('campo-erro');
        formularioValido = false;
    } else {
        horario.classList.remove('campo-erro');
    }

    // Se tiver algum campo vazio, não abre o WhatsApp
    if (!formularioValido) {
        event.preventDefault();
        return;
    }

    // Monta a mensagem
    const mensagem = `Olá, RN Barbearia! Quero marcar um horário.

Nome: ${nome.value}
Telefone: ${telefone.value}
Serviço: ${Servico.value}
Data: ${data.value}
Horário: ${horario.value}`;

    // Número do WhatsApp
    const numero = '5515998197611';

    // Cria o link do WhatsApp
    const linkWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp
    window.open(linkWhatsapp, '_blank');
});

nome.addEventListener('input', function () {
    nome.value = nome.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
});

telefone.addEventListener('input', function() {

    // Remove tudo que não for número
    let valor = telefone.value.replace(/\D/g, '');

    // Limita a 11 números
    valor = valor.substring(0, 11);

    // Formata o telefone
    if (valor.length > 0) {
        valor = '(' + valor;
    }

    if (valor.length > 3) {
        valor = valor.substring(0, 3) + ') ' + valor.substring(3);
    }

    if (valor.length > 10) {
        valor = valor.substring(0, 10) + '-' + valor.substring(10);
    }

    telefone.value = valor;

});


data.addEventListener('input', function () {
    let valor = data.value.replace(/\D/g, '').substring(0, 8);

    if (valor.length <= 2) {
        data.value = valor;
    } else if (valor.length <= 4) {
        data.value = valor.substring(0, 2) + '/' + valor.substring(2);
    } else {
        data.value = valor.substring(0, 2) + '/' + valor.substring(2, 4) + '/' + valor.substring(4);
    }
});


horario.addEventListener('input', function () {
    let valor = horario.value.replace(/\D/g, '').substring(0, 4);

    if (valor.length <= 2) {
        horario.value = valor;
    } else {
        horario.value = valor.substring(0, 2) + ':' + valor.substring(2);
    }
});