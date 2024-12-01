
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para validação

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = '';

    if (name.trim() === '') {
        errorMessage += 'O nome é obrigatório.<br>';
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errorMessage += 'Por favor, insira um e-mail válido.<br>';
    }

    if (message.trim() === '') {
        errorMessage += 'A mensagem é obrigatória.<br>';
    }

    if (errorMessage !== '') {
        document.getElementById('formMessage').innerHTML = '<span class="error">' + errorMessage + '</span>';
    } else {
        document.getElementById('formMessage').innerHTML = '<span class="success">Formulário enviado com sucesso!</span>';
    }
});
