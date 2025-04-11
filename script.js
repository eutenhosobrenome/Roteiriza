function gerarRoteiro() {
  const tema = document.getElementById("tema").value;
  const roteiroEl = document.getElementById("roteiro");

  if (!tema) {
    roteiroEl.textContent = "Por favor, digite um tema.";
    return;
  }

  // Simula um roteiro com base em um prompt fixo (pode personalizar com seu prompt real)
  const roteiro = `
🎥 Roteiro para TikTok sobre: ${tema}

1. 🎬 Abertura impactante
- Mostre rapidamente o produto "${tema}" com música em alta.
- Use legenda com "Você sabia que isso existe?! 👀"

2. 🧪 Demonstração criativa
- Mostre como usar ou por que ele é útil.
- Destaque benefícios que não são óbvios.

3. 💬 Chamada à ação
- Use algo como: "Curtiu? Tem na Shopee por menos de R$XX!"
- Encerre com efeito sonoro ou transição legal.

#dicaShopee #achadinho #TikTokBrasil
  `;

  roteiroEl.textContent = roteiro;
}
