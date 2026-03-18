function intentarTransferencia() {
    // Captura de datos
    const nombre = document.getElementById('destinatario').value.trim();
    const cuenta = document.getElementById('cuenta').value.trim();
    const banco = document.getElementById('banco-destino').value;
    const concepto = document.getElementById('concepto').value.trim() || "Transferencia";
    const monto = parseFloat(document.getElementById('monto').value);

    // Validación mínima
    if (!nombre || !cuenta || isNaN(monto)) {
        alert("Por favor rellena los datos.");
        return;
    }

    // Mostrar mensaje de proceso
    const statusMsg = document.getElementById('status-message');
    statusMsg.innerText = "Conectando con el Banco de México...";
    statusMsg.className = "success";
    statusMsg.classList.remove('hidden');

    setTimeout(() => {
        // Rellenar comprobante
        document.getElementById('comp-monto').innerText = `$${monto.toLocaleString('es-MX', {minimumFractionDigits: 2})}`;
        document.getElementById('comp-nombre').innerText = nombre.toUpperCase();
        document.getElementById('comp-cuenta').innerText = `****${cuenta.slice(-4)}`;
        document.getElementById('comp-banco').innerText = banco;
        document.getElementById('comp-concepto').innerText = concepto;
        
        // Clave de rastreo realista (Fecha + 10 caracteres)
        const ahora = new Date();
        const fechaCompacta = ahora.toISOString().slice(0,10).replace(/-/g,"");
        const idAzar = Math.random().toString(36).substring(2, 12).toUpperCase();
        document.getElementById('comp-rastreo').innerText = `UALM${fechaCompacta}${idAzar}`;
        
        // Folio azar
        document.getElementById('comp-folio').innerText = Math.floor(10000000 + Math.random() * 90000000);
        document.getElementById('comp-fecha').innerText = ahora.toLocaleString('es-MX', { hour12: true });

        // Mostrar modal
        document.getElementById('modal-comprobante').classList.remove('hidden');
        statusMsg.classList.add('hidden');
        
        // Descontar saldo visualmente (opcional)
        let saldoActual = 500.00;
        document.getElementById('balance-display').innerText = `$${(saldoActual - monto).toFixed(2)}`;
    }, 2000);
}

function cerrarModal() {
    document.getElementById('modal-comprobante').classList.add('hidden');
}
