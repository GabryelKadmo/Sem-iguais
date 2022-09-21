const fila = new Queue();
function getValues() {
    const add = document.getElementById("itens").value;
    fila.enqueue(add);
    console.log(fila.toString());
    console.log(fila.size());
    // Vou deixar o console.log só de meme
    document.querySelector("#result").innerHTML = fila
}