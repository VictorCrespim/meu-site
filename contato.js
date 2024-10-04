//Formulario
const enviar = document.querySelector('#btn-enviar')

const addenviando = () => {
    enviar.innerHTML = "Enviando..."
}

const addenviado = () => {
    enviar.innerHTML = "Enviado!!!"
}

const handleSubmit = (event) => {
    event.preventDefault();    
    addenviando();

    const name = document.querySelector('#nome').value;
    const tel = document.querySelector('#telefone').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#mensagem').value;

    fetch('https://api.sheetmonkey.io/form/vbVieRw2H62uqff9CmRGAB', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Nome: name, Contato: tel, Email: email, Mensagem: msg}),

    }).then(() => addenviado());    
}

document.querySelector('#form-contato').addEventListener('submit', handleSubmit);

