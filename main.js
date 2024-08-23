function playJokenpo() {
    let pontuacao = 0;

    while (true) {
        let escolhaJogador = parseInt(prompt("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura"));

        if (escolhaJogador < 1 || escolhaJogador > 3 || isNaN(escolhaJogador)) {
            alert("Escolha inválida. Você perdeu.");
            console.log("Escolha inválida. Você perdeu.");
            break;
        }

        let pc = Math.floor(Math.random() * 3) + 1;
        let opcoes = ["Papel", "Pedra", "Tesoura"];
        let pcEscolha = opcoes[pc - 1];

        alert("O computador escolheu: " + pcEscolha);
        console.log("O computador escolheu: " + pcEscolha);

        if (escolhaJogador === pc) {
            alert("Empate! Vamos jogar novamente.");
            console.log("Empate! Vamos jogar novamente.");
        } else if (
            (escolhaJogador === 1 && pc === 2) || 
            (escolhaJogador === 2 && pc === 3) || 
            (escolhaJogador === 3 && pc === 1)    
        ) {
            pontuacao++;
            alert("Você ganhou esta rodada! Sua pontuação é: " + pontuacao);
            console.log("Você ganhou esta rodada! Sua pontuação é: " + pontuacao);
        } else {
            alert("Você perdeu esta rodada. Sua pontuação final é: " + pontuacao);
            console.log("Você perdeu esta rodada. Sua pontuação final é: " + pontuacao);
            break;
        }
    }
}

playJokenpo();
