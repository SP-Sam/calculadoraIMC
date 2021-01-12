function calcular() {
    let altura = document.querySelector('input#txtAltura')
    let peso = document.querySelector('input#txtPeso')
    let res = document.querySelector('p#res')
    
    if (Number(altura.value) == 0 || Number(peso.value) == 0) {
        alert('PREENCHA TODOS OS CAMPOS!')
    } else {
        let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))
        if (imc < 18.5) {
            res.innerHTML = `Seu imc é ${parseFloat(imc.toFixed(2))} = MAGREZA`
        } else if (imc >= 18.5 && imc < 24.9) {
            res.innerHTML = `Seu imc é ${parseFloat(imc.toFixed(2))} = PESO IDEAL`
        } else if (imc >= 24.9 && imc < 30) {
            res.innerHTML = `Seu imc é ${parseFloat(imc.toFixed(2))} = SOBREPESO`
        } else {
            res.innerHTML = `Seu imc é ${parseFloat(imc.toFixed(2))} = OBESIDADE`
        }
    }
}