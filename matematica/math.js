function calcularNovoSalario() {
    var salario = parseFloat(prompt("Digite o salário do funcionário:"));
    var novoSalario;

    if (salario <= 1200) {
        novoSalario = salario + (salario * 0.15);
    } else if (salario > 1200 && salario <= 2400) {
        novoSalario = salario + (salario * 0.10);
    } else {
        novoSalario = salario + (salario * 0.05);
    }

    document.getElementById("resultadoTexto").textContent = "Novo salário: R$ " + novoSalario.toFixed(2);
}

function calcularFerias() {
    var salario = parseFloat(prompt("Digite o salário do funcionário:"));
    var valorFerias = salario + (salario / 3);

    document.getElementById("resultadoTexto").textContent = "Valor das férias: R$ " + valorFerias.toFixed(2);
}

function calcularDecimoTerceiro() {
    var salario = parseFloat(prompt("Digite o salário do funcionário:"));
    var mesesTrabalhados = parseInt(prompt("Digite o número de meses de trabalho (até 12 meses):"));

    if (mesesTrabalhados > 12) {
        document.getElementById("resultadoTexto").textContent = "Número de meses de trabalho inválido.";
        return;
    }

    var decimoTerceiro = (salario * mesesTrabalhados) / 12;

    document.getElementById("resultadoTexto").textContent = "Valor do décimo terceiro: R$ " + decimoTerceiro.toFixed(2);
}

function sairDoPrograma() {
    document.getElementById("resultadoTexto").textContent = "Saindo do programa.";
}