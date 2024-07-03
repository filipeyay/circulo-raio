// enquação : r = c / 2 * pi

const pi = 3.14
let raio
let circunferencia

document.querySelector("button").onclick = function() {
    circunferencia = document.querySelector("input").value;
    circunferencia = Number(circunferencia);
    raio = circunferencia / 2 * pi;
    document.querySelector("h3").textContent = "O raio do circulo é aproximadamente: " + raio + "cm";
}