function Calcular (n1){
    //AQUI TEM 2 DOCUMENTOS IMPORTADOS DO HTML O VALOR QUE O USUARIO VAI INSERIR ATRAVES DA TAG INPUT, E O DESCONTO QUE É O ID DA TAG SELECT
    n1 = document.getElementById("n1").value
    desconto = document.getElementById("desconto").value

    //AQUI TODOS OS VALORES QUE FORAM IMPORTADOS DO HTML (<SELECT>) PARA A VARIAVEL DESCONTO, VAI PASSAR LINHA A LINHA TESTANDO EM QUAL VALOR A PORCENTAGEM SELECIONADA SE ENCAIXA. 
    switch(desconto){
        case '5':
            calculo = Math.round((n1 * 0.05))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 5% é ${calculo}`
            break
        case '10':
            calculo = Math.round((n1 * 0.1))
            document.getElementById("resultado").innerHTML= `O valor total com desconto de 10% é ${calculo}`
            break
        case '15':
            calculo =Math.round(( n1 * 0.15))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 15% é ${calculo}`
            break
        case '20':
            calculo = Math.round((n1 * 0.2))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 20% é ${calculo}`
            break        
        case '25':
            calculo = Math.round((n1 * 0.25))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 25% é ${calculo}`
            break         
        case '30':
            calculo = Math.round((n1 * 0.3))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 30% é ${calculo}`
            break
        case '35':
            calculo = Math.round((n1 * 0.35))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 35% é ${calculo}`
            break
        case '40':
            calculo =Math.round((n1 * 0.4))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 40% é ${calculo}`
            break        
        case '45':
            calculo = Math.round((n1 * 0.45))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 45% é ${calculo}`
            break        
        case '50':
            calculo = Math.round((n1 * 0.5))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 50% é ${calculo}`
            break         
        case '55':
            calculo = Math.round((n1 * 0.55))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 55% é ${calculo}`
            break        
        case '60':
            calculo = Math.round((n1 * 0.6))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 60% é ${calculo}`
            break         
        case '65':
            calculo = Math.round((n1 * 0.65))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 65% é ${calculo}`
            break         
        case '70':
            calculo = Math.round((n1 * 0.7))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 70% é ${calculo}`
            break        
        case '75':
            calculo = Math.round((n1 * 0.75))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 75% é ${calculo}`
            break         
        case '80':
            calculo = Math.round((n1 * 0.8))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 80% é ${calculo}`
            break 
        case '85':
            calculo = Math.round((n1 * 0.85))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 85% é ${calculo}`
            break 
        case '90':
            calculo = Math.round((n1 * 0.9))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 90% é ${calculo}`
            break         
        case '95':
            calculo = Math.round((n1 * 0.95))
            document.getElementById("resultado").innerHTML = `O valor total com desconto de 95% é ${calculo}`
            break
        



    }
}
