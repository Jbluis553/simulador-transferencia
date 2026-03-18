let saldoDisponible = 500.00;

function intentarTransferencia() {
    const monto = parseFloat(document.getElementById('monto').value);
    const mensajeDiv = document.getElementById('status-message');
    
    // Limpiar mensajes previos
    mensajeDiv.className = 'hidden';

    if (isNaN(monto) || monto <= 0) {
        mostrarMensaje("Por favor, ingresa un monto válido.", "error");
        return;
    }

    // SIMULACIÓN DE FONDOS INSUFICIENTES
    if (monto > saldoDisponible) {
        mostrarMensaje("Error: Fondos insuficientes (Código 51). Revisa tu saldo.", "error");
    } else {
        saldoDisponible -= monto;
        document.getElementById('balance-display').innerText = `$${saldoDisponible.toFixed(2)}`;
        mostrarMensaje("¡Transferencia exitosa!", "success");
    }
}

function mostrarMensaje(texto, tipo) {
    const mensajeDiv = document.getElementById('status-message');
    mensajeDiv.innerText = texto;
    mensajeDiv.className = tipo; // Aplica la clase CSS correspondiente
}
