document.getElementById('choferForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (confirm('¿Estás segura de grabar el archivo?')) {
        const nombreChofer = document.getElementById('nombreChofer').value;
        const nombreReceptor = document.getElementById('nombreReceptor').value; // Corregido aquí
        const fechaHora = document.getElementById('fechaHora').value;
        const billetes = {
            200: parseInt(document.getElementById('billete200').value) || 0,
            100: parseInt(document.getElementById('billete100').value) || 0,
            50: parseInt(document.getElementById('billete50').value) || 0,
            20: parseInt(document.getElementById('billete20').value) || 0,
            10: parseInt(document.getElementById('billete10').value) || 0
        };
        const monedas = {
            5: parseInt(document.getElementById('moneda5').value) || 0,
            2: parseInt(document.getElementById('moneda2').value) || 0,
            1: parseInt(document.getElementById('moneda1').value) || 0,
            0.5: parseInt(document.getElementById('moneda05').value) || 0,
            0.2: parseInt(document.getElementById('moneda02').value) || 0,
            0.1: parseInt(document.getElementById('moneda01').value) || 0
        };

        const totalBilletes = (billetes[200] * 200) + (billetes[100] * 100) + (billetes[50] * 50) + (billetes[20] * 20) + (billetes[10] * 10);
        const totalMonedas = (monedas[5] * 5) + (monedas[2] * 2) + (monedas[1] * 1) + (monedas[0.5] * 0.5) + (monedas[0.2] * 0.2) + (monedas[0.1] * 0.1);
        const totalAmount = totalBilletes + totalMonedas;

        const docDefinition = {
            content: [
                { text: 'ENTREGA 2', style: 'header' },
                { text: `NOMBRE DEL CHOFER: ${nombreChofer}`, style: 'subheader', margin: [0, 20, 0, 20] },
                { text: `NOMBRE DEL RECEPTOR: ${nombreReceptor}`, style: 'subheader', margin: [0, 20, 0, 20] }, // Corregido aquí
                { text: `Fecha y Hora: ${fechaHora}` },
                { text: 'Billetes', style: 'subheader' },
                {
                    table: {
                        body: [
                            ['Denominación', 'Cantidad', 'Total'],
                            ['200', billetes[200], billetes[200] * 200],
                            ['100', billetes[100], billetes[100] * 100],
                            ['50', billetes[50], billetes[50] * 50],
                            ['20', billetes[20], billetes[20] * 20],
                            ['10', billetes[10], billetes[10] * 10]
                        ]
                    },
                    layout: 'lightHorizontalLines',
                    margin: [0, 0, 0, 20]
                },
                { text: 'Monedas', style: 'subheader' },
                {
                    table: {
                        body: [
                            ['Denominación', 'Cantidad', 'Total'],
                            ['5', monedas[5], monedas[5] * 5],
                            ['2', monedas[2], monedas[2] * 2],
                            ['1', monedas[1], monedas[1] * 1],
                            ['0.5', monedas[0.5], monedas[0.5] * 0.5],
                            ['0.2', monedas[0.2], monedas[0.2] * 0.2],
                            ['0.1', monedas[0.1], monedas[0.1] * 0.1]
                        ]
                    },
                    layout: 'lightHorizontalLines',
                    margin: [0, 0, 0, 20]
                },
                { text: `Total: ${totalAmount} SOLES`, style: 'total' }
            ],
            styles: {
                header: {
                    fontSize: 22,
                    bold: true,
                    alignment: 'center'
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 10]
                },
                total: {
                    fontSize: 16,
                    bold: true,
                    alignment: 'right'
                }
            }
        };

        pdfMake.createPdf(docDefinition).download('ENTREGA_2.pdf');

        // Reset form fields
        document.getElementById('choferForm').reset();
        document.getElementById('totalAmount').textContent = '0';
    }
});

function calcularTotal() {
    const billete200 = parseInt(document.getElementById('billete200').value) || 0;
    const billete100 = parseInt(document.getElementById('billete100').value) || 0;
    const billete50 = parseInt(document.getElementById('billete50').value) || 0;
    const billete20 = parseInt(document.getElementById('billete20').value) || 0;
    const billete10 = parseInt(document.getElementById('billete10').value) || 0;
    const moneda5 = parseInt(document.getElementById('moneda5').value) || 0;
    const moneda2 = parseInt(document.getElementById('moneda2').value) || 0;
    const moneda1 = parseInt(document.getElementById('moneda1').value) || 0;
    const moneda05 = parseFloat(document.getElementById('moneda05').value) || 0;
    const moneda02 = parseFloat(document.getElementById('moneda02').value) || 0;
    const moneda01 = parseFloat(document.getElementById('moneda01').value) || 0;

    const totalBillete200 = billete200 * 200;
    const totalBillete100 = billete100 * 100;
    const totalBillete50 = billete50 * 50;
    const totalBillete20 = billete20 * 20;
    const totalBillete10 = billete10 * 10;
    const totalMoneda5 = moneda5 * 5;
    const totalMoneda2 = moneda2 * 2;
    const totalMoneda1 = moneda1 * 1;
    const totalMoneda05 = moneda05 * 0.5;
    const totalMoneda02 = moneda02 * 0.2;
    const totalMoneda01 = moneda01 * 0.1;

    const totalAmount = totalBillete200 + totalBillete100 + totalBillete50 + totalBillete20 + totalBillete10 +
                        totalMoneda5 + totalMoneda2 + totalMoneda1 + totalMoneda05 + totalMoneda02 + totalMoneda01;

    document.getElementById('totalBillete200').innerText = totalBillete200;
    document.getElementById('totalBillete100').innerText = totalBillete100;
    document.getElementById('totalBillete50').innerText = totalBillete50;
    document.getElementById('totalBillete20').innerText = totalBillete20;
    document.getElementById('totalBillete10').innerText = totalBillete10;
    document.getElementById('totalMoneda5').innerText = totalMoneda5;
    document.getElementById('totalMoneda2').innerText = totalMoneda2;
    document.getElementById('totalMoneda1').innerText = totalMoneda1;
    document.getElementById('totalMoneda05').innerText = totalMoneda05;
    document.getElementById('totalMoneda02').innerText = totalMoneda02;
    document.getElementById('totalMoneda01').innerText = totalMoneda01;
    document.getElementById('totalAmount').innerText = totalAmount;
}

document.addEventListener("DOMContentLoaded", function() {
    function obtenerFechaHoraActual() {
        const now = new Date();
        const fecha = now.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        const hora = now.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        return `${fecha} ${hora}`;
    }

    document.getElementById('fechaHora').value = obtenerFechaHoraActual();
});

// Obtener todos los campos de entrada del formulario
const form = document.getElementById('choferForm');
const forms = document.getElementById('receptorForm');
const inputs = form.querySelectorAll('input[type="number"]');

// Agregar un evento de escucha para cada campo de entrada
inputs.forEach(input => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Obtener el índice del campo actual
            let index = Array.from(inputs).indexOf(input);
            
            // Obtener el siguiente campo de entrada
            let nextInput = inputs[index + 1];
            
            // Si existe un siguiente campo, enfocarlo
            if (nextInput) {
                nextInput.focus();
            }
            
            // Evitar el comportamiento por defecto del Enter (enviar formulario)
            event.preventDefault();
        }
    });
});
