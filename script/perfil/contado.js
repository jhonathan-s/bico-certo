document.addEventListener("DOMContentLoaded", () => {
  const atividades = document.querySelectorAll(".activity");

  let curtidas = 0;
  let comentarios = 0;
  let ultimaData = null;

  atividades.forEach(activity => {
    const texto = activity.textContent.toLowerCase();

    // Conta curtidas
    if (texto.includes("curtiu seu perfil")) {
      curtidas++;
    }

    // Conta comentários
    if (texto.includes("comentou no seu perfil")) {
      comentarios++;
    }

    // Captura a data
    const dataEl = activity.querySelector(".activity-interactions span");
    if (dataEl) {
      let partes = dataEl.textContent.trim().split(" ");
      let meses = {
        "janeiro": 0, "fevereiro": 1, "março": 2, "abril": 3,
        "maio": 4, "junho": 5, "julho": 6, "agosto": 7,
        "setembro": 8, "outubro": 9, "novembro": 10, "dezembro": 11
      };

      let dia = parseInt(partes[1].replace(",", ""));
      let mes = meses[partes[0].toLowerCase()];
      let ano = parseInt(partes[2]);

      let data = new Date(ano, mes, dia);
      if (!ultimaData || data > ultimaData) {
        ultimaData = data;
      }
    }
  });

  // Calcula resumo
  let contratosConcluidos = curtidas + comentarios;
  let contratosAndamento = 1; // exemplo fixo

  // Atualiza no HTML
  document.getElementById("contratosConcluidos").textContent = contratosConcluidos;
  document.getElementById("contratosAndamento").textContent = contratosAndamento;
  document.getElementById("ultimaContratacao").textContent =
    ultimaData ? ultimaData.toLocaleDateString("pt-BR") : "Nenhuma ainda";
});