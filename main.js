function somatorio(){

    let num = parseInt(document.getElementById("num").value)
  
      let soma = 0;
      let divisao = []

    for(let i = 1; i < num; i++){
        if(i % 3 === 0 || i % 5 === 0){
          soma += i;
          divisao.push(i)
        }
    }
document.getElementById("result").innerText = `O somatório é: ${soma}`
document.getElementById("divisao").innerText = `Foram somados os números: ${divisao}`

    if(num < 0){
    alert("O número deve ser positivo");
  }
}
      
