function mostrar(value) {
    document.getElementById('display').value += value;
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function calcularResultado() {
    try {
        const resultado = eval(document.getElementById('display').value);
        document.getElementById('display').value = resultado;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
