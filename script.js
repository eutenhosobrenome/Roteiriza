// script.js

function gerarRoteiro() {
  const tema = document.getElementById('tema').value.trim();
  const resultadoDiv = document.getElementById('resultado');

  if (!tema) {
    resultadoDiv.innerText = '⚠️ Por favor, digite um tema de produto.';
    return;
  }

  const roteiro = `🎯 Objetivo:
Promover o produto "${tema}" de forma envolvente no TikTok, despertando curiosidade e incentivando o clique no link.

🧠 Persona:
Adultos conectados, que compram por impulso, gostam de novidades e valorizam recomendações de criadores reais.

🗣️ Tom e Voz:
Descontraído, direto, com leveza e um toque de humor. Frases curtas e impacto imediato.

🧩 Estrutura do Roteiro:
1. Gatilho de Atenção (até 3s): "Vocês também têm esse problema...?"
2. Apresenta o produto: "Eu testei o ${tema} que vi na Shopee"
3. Demonstração rápida (efeito, uso, transformação)
4. Reação ou surpresa: "Gente, eu fiquei CHOCADA"
5. Chamada para a ação: "Tem o link aqui embaixo, corre porque tá em promoção!"

✅ Exemplo:
"Eu não tava pronta pra isso 🤯 Esse ${tema} que vi na Shopee resolveu um problemão aqui em casa. Já quero 3! Clica no link porque tá MUITO barato hoje."

🚀 Agora é com você: grave, teste, adapte, viralize!`;

  resultadoDiv.innerText = roteiro;
}
