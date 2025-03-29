function gerarSenha() { //Função para gerar a senha
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"; //Adicionando todos os caracteres possíveis para uma senha
    let tamanho = 15; //Você pode mudar o tamanho da senha, se quiser
    let gerarSenha = ""; //Variável vazia para colocar a senha gerada aleatoriamente

    for (let i = 0; i < tamanho; i++) { //Laço de repetição que percorre e adiciona os caracteres da senha
        let numeroAleatorio = Math.floor(Math.random() * caracteres.length); //Gerando um índice aleatório dentro do tamanho da varíavel caracteres

        gerarSenha += caracteres[numeroAleatorio]; //Gerando os caracteres

        document.getElementById("senha").value = gerarSenha; //Exibindo os caracteres no campo de senha
    }
}

function copiarSenha() { //Função para copiar a senha gerada
    let copiar = document.getElementById("senha"); //Pegando o ID do campo de senha

    copiar.select(); //Selecionando a senha gerada

    copiar.setSelectionRange(0, 1000); //Selecionando o range de cópia do input

    document.execCommand("copy"); //Executando o comando de copiar

    document.getElementById("aviso").textContent = "Senha copiada com sucesso!"; //Exibindo uma mensagem de aviso
}