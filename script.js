window.onload = function () {
    leitura()
}

async function traduzir() {
    const textoParaTraducao = document.getElementById("textoParaTraducao").value;
    let textoTraduzido = document.getElementById("textoTraduzido")
  
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoParaTraducao)}&langpair=en|pt`);
  
    const resultado = await res.json();
    console.log(resultado.responseData.translatedText);
    textoTraduzido.value = resultado.responseData.translatedText
    console.log(textoTraduzido)
  }




  function adjustHeight(textarea) {
    textarea.style.height = 'auto'; // Reseta a altura
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Ajusta para a altura do conteúdo
}


