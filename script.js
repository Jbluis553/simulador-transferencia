// Saldo inicial de prueba
let saldoDisponible = 500.00;

function intentarTransferencia() {
    const inputMonto = document.getElementById('monto');
    const inputDestinatario = document.getElementById('destinatario');
    const monto = parseFloat(inputMonto.value);
    const mensajeDiv = document.getElementById('status-message');
    const vistaDestinatario = document.getElementById('vista-destinatario');
    const textoMontoRecibido = document.getElementById('monto-recibido-texto');

    // Reiniciar estados visuales
    mensajeDiv.className = 'hidden';
    vistaDestinatario.classList.add('hidden');

    // 1. Validaciones básicas
    if (inputDestinatario.value.trim() === "") {
        mostrarMensaje("Por favor, ingresa el nombre del destinatario.", "error");
        return;
    }

    if (isNaN(monto) || monto <= 0) {
        mostrarMensaje("Ingresa un monto válido mayor a 0.", "error");
        return;
    }

    // 2. Simulación de Fondos Insuficientes
    if (monto > saldoDisponible) {
        mostrarMensaje("Operación Rechazada: Fondos insuficientes en la cuenta de origen.", "error");
    } else {
        // 3. Caso de Éxito
        saldoDisponible -= monto;
        
        // Actualizar UI del emisor
        document.getElementById('balance-display').innerText = `$${saldoDisponible.toFixed(2)}`;
        mostrarMensaje("Procesando transferencia...", "success");

        // Simular tiempo de respuesta bancaria para el destinatario
        setTimeout(() => {
            mensajeDiv.innerText = "¡Transferencia enviada!";
            
            // Mostrar vista del destinatario
            vistaDestinatario.classList.remove('hidden');
            textoMontoRecibido.innerHTML = `$${monto.toFixed(2)}`;
            
            // Limpiar campos
            inputMonto.value = "";
            inputDestinatario.value = "";
        }, 1200);
    }
}

function mostrarMensaje(texto, tipo) {
    const mensajeDiv = document.getElementById('status-message');
    mensajeDiv.innerText = texto;
    mensajeDiv.className = tipo;
}
