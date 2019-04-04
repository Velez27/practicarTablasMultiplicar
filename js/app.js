function multiplicationTables(num) {
    var table = [];
    var resultado;
    for(let i = 1; i <= 10; i++) {
        resultado =  `${num} x ${i} = ${num * i}`;
        table.push(resultado);
    }
    return table;
}

function tables(numTable, numMultiplication) {
    var table = document.getElementById(numTable);
    const multiplication = multiplicationTables(numMultiplication);
    var tr = document.createElement('TR');
    table.appendChild(tr);
    for(let i = 0; i < 10; i++) {
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(multiplication[i]));
        tr.appendChild(td);
    }
}

for(let i = 1; i <= 10; i++) {
    tables(`tabla${i}`, i);
}

