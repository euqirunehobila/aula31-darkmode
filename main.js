const toggleBtn = document.getElementById("toggle");
const body = document.body;

toggleBtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
});


function converterMoeda() {
    const dolar = 5.05;
    const quantidade = document.getElementById("qnt").value;
    const total = quantidade * dolar;

    document.getElementById("result-div").style.display = "block";

    document.getElementById("result").textContent = "R$ " + total.toFixed(2);
    

}