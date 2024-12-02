function updateStatusColor() {
    var statusSelect = document.getElementById("status");
    var statusIndicator = document.getElementById("status-indicator");
    
    // Remover classes de status anteriores
    statusIndicator.className = "status-indicator";
    
    // Adicionar a nova classe de acordo com o status selecionado
    if (statusSelect.value === "Disponível") {
        statusIndicator.classList.add("status-disponivel");
    } else if (statusSelect.value === "Trabalhando") {
        statusIndicator.classList.add("status-trabalhando");
    } else if (statusSelect.value === "Descansando") {
        statusIndicator.classList.add("status-descansando");
    } else if (statusSelect.value === "Férias") {
        statusIndicator.classList.add("status-ferias");
    }
}
