function gerarSenha() { 
    // Variável de caracteres, tamanho da senha e geradora das senhas
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"; 
    let tamanho = 15; 
    let gerarSenha = ""; 

    // Laço de repetição para montar a senha
    for (let i = 0; i < tamanho; i++) { 
        // Gerador de caracteres aleatórios
        let caracteresAleatorios = Math.floor(Math.random() * caracteres.length);

        gerarSenha += caracteres[caracteresAleatorios]; 

        document.getElementById("senha").value = gerarSenha; 
    }
}

// Função para copiar a senha
function copiarSenha() { 
    let copiar = document.getElementById("senha"); 

    copiar.select(); 

    copiar.setSelectionRange(0, 15); 

    document.execCommand("copy"); 

    document.getElementById("aviso").textContent = "Senha copiada com sucesso!";
}