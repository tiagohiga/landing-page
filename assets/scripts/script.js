let email = document.getElementById('email')
let nome = document.getElementById('nome')

let emailOk = false;
let nomeOk = false;

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        email.style.border = '5px solid red'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        email.style.border = '3px solid cyan'
        txtEmail.style.color = 'cyan'
        emailOk = true
    }
}

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Informe um nome'
        nome.style.border = '3px solid red'
        txtNome.style.color = 'red'
    }else{
        nome.style.border = '3px solid cyan'
        txtNome.innerHTML = 'Ok!'
        txtNome.style.color = 'cyan'
        nomeOk = true
    }
}

function enviarForm(){
    if(emailOk == true && nomeOk == true){
            alert('Formulário enviado com sucesso')
            location.reload();
            return false;
        }else{
            alert('Preencha o formulário corretamente antes de clickar em enviar')
        }

}