// Definición de los objetos disponibles
const objetos = [
    { nombre: "Guitarra", valor: 1500, peso: 1 },
    { nombre: "Laptop", valor: 2000, peso: 3 },
    { nombre: "Radio", valor: 3000, peso: 4 },
    { nombre: "Teléfono", valor: 2000, peso: 1 },
    { nombre: "Anillo", valor: 2500, peso: 0.5 }
];

const capacidadMochila = 10;

function resolverKnapsack() {
    let mejorValor = 0;
    let mejorCombinacion = [];

    const combinaciones = generarCombinaciones(objetos);

    combinaciones.forEach(comb => {
        const pesoTotal = comb.reduce((suma, obj) => suma + obj.peso, 0);
        const valorTotal = comb.reduce((suma, obj) => suma + obj.valor, 0);

        if (pesoTotal <= capacidadMochila && valorTotal > mejorValor) {
            mejorValor = valorTotal;
            mejorCombinacion = comb;
        }
    });

    mostrarResultado(mejorCombinacion, mejorValor);
}

function generarCombinaciones(array) {
    const resultados = [];
    const n = array.length;

    for (let i = 0; i < (1 << n); i++) {
        let combinacion = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) combinacion.push(array[j]);
        }
        resultados.push(combinacion);
    }
    return resultados;
}

function mostrarResultado(combinacion, valor) {
    const resultadoDiv = document.getElementById('resultado');
    let contenido = `<strong>✅ Mejor combinación:</strong><br>`;
    
    combinacion.forEach(obj => {
        contenido += `• ${obj.nombre} (Valor: $${obj.valor}, Peso: ${obj.peso} kg)<br>`;
    });

    const pesoTotal = combinacion.reduce((suma, obj) => suma + obj.peso, 0);

    contenido += `<br><strong>Peso Total:</strong> ${pesoTotal} kg<br>`;
    contenido += `<strong>Valor Total:</strong> $${valor}`;

    resultadoDiv.innerHTML = contenido;
}
