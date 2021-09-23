//Conversor de temperatura

function Converter() {
  //pega o campo de opcao
  var tempOpcao = document.getElementById("tempEscolha")
  //pega o valor no campo opcao
  var valueOpcao = tempOpcao.value
  //pega o campo de entrada de temperatura
  var tempInput = document.getElementById("temperatura")
  //pega o valor do campo de entrada de temperatura
  var temperatura = tempInput.value
  //converte a temperatura de string para integer
  var intTemp = parseInt(temperatura)
  //resultado da conversao
  var tempConvertido
  
  
  //CONVERSÃO
  //celsius para fahrenheit
  if (valueOpcao == "cpf") {
    tempConvertido = (intTemp * 9/5) + 32
  //fahrenheit para celsius
  } else if (valueOpcao == "fpc") {
    tempConvertido = (intTemp - 32) * 5/9
  //celsius para kelvin
  } else if (valueOpcao == "cpk"){
    tempConvertido = intTemp + 273.15
  //kelvin para celsius
  } else if (valueOpcao == "kpc"){
    tempConvertido = intTemp - 273.15
  //fahrenheit para kelvin
  } else if (valueOpcao == "fpk"){
    tempConvertido = (intTemp - 32) * 5/9 + 273.15
  //kelvin para fahrenheit
  } else if (valueOpcao == "kpf"){
    tempConvertido = (intTemp - 273.15) * 9/5 + 32
  }
  
  //arredonda o valor quebrado
  var tempFinal = tempConvertido.toFixed(0)
  //passa o campo que vai mostrar o resultado para uma var
  var fimConversao = document.getElementById("convertido")
  
  
  //RESULTADO
    if (valueOpcao == "cpf") {
    var mostraRes = intTemp + "ºC/" + tempFinal + "ºF"
    fimConversao.innerHTML = mostraRes
  //fahrenheit para celsius
  } else if (valueOpcao == "fpc") {
    var mostraRes = intTemp + "ºF/" + tempFinal + "ºC"
    fimConversao.innerHTML = mostraRes
  //celsius para kelvin
  } else if (valueOpcao == "cpk"){
    var mostraRes = intTemp + "ºC/" + tempFinal + "K"
    fimConversao.innerHTML = mostraRes
  //kelvin para celsius
  } else if (valueOpcao == "kpc"){
    var mostraRes = intTemp + "K/" + tempFinal + "ºC"
    fimConversao.innerHTML = mostraRes
  //fahrenheit para kelvin
  } else if (valueOpcao == "fpk"){
    var mostraRes = intTemp + "ºF/" + tempFinal + "K"
    fimConversao.innerHTML = mostraRes
  //kelvin para fahrenheit
  } else if (valueOpcao == "kpf"){
    var mostraRes = intTemp + "K/" + tempFinal + "ºF"
    fimConversao.innerHTML = mostraRes
  }
}




















function ConverterCtF() {
  //pega elemento de entrada tempC
  var tempC = document.getElementById("tempC");
  //pega o valor dentro do elemento
  var valorC = tempC.value;
  //calcula o valor em celsius para fahrenheit
  var CtF = (valorC * 9) / 5 + 32;
  //arredonda o valor
  var stringF = CtF.toFixed(0);
  //converte de string para int
  var fahrenheit = parseInt(stringF)
  //pega o elemento que vai mostrar o valor final
  var fimFahrenheit = document.getElementById("celsiusConvertido")
  //gera a string que será apresentada
  var mostraC = valorC + "ºC/" + fahrenheit + "ºF"
  //envia a variável de javascript para o html
  fimFahrenheit.innerHTML = mostraC
}

function ConverterFtC() {
  var tempF = document.getElementById("tempF");
  var valorF = tempF.value;
  var FtC = ((valorF - 32) * 5) / 9;
  var stringC = FtC.toFixed(0)
  var celsius = parseInt(stringC)
  var fimCelsius = document.getElementById("fahrenheitConvertido")
  var mostraF = valorF + "ºF/" + celsius + "ºC"
  fimCelsius.innerHTML = mostraF
}