$(document).ready(function() {
var Resultado = false;
    $(".btn-number").click(function() {
        if (!Resultado) {
            $("#Visor").html($("#Visor").html() + $(this).text());
        }
        else {
            $("#Visor").html("&nbsp;");
            Resultado = false;
            $("#Visor").removeClass("texto-piscante");
            $("#Visor").html($(this).text());
        }
    });

    $(".btn-operator").click(function() {

        var value = $(this).val(); //Atribuir em variável para não perder o valor.
        var html = $("#Visor").html(); //Atribuir em variável para não perder o valor.
        if (value == "CE" || value == "C") {
            $("#Visor").html("&nbsp;");
            resultadoParcial = 0;
        }
        else {

            if (html == "&nbsp;") {
                $("#Visor").html("&nbsp;");

            } else {
                var ultimodigito = html.charAt(html.length-1);
                if (!(ultimodigito == "+" || ultimodigito == "-" || ultimodigito == "/" || ultimodigito == "*" ))  {

                    $("#Visor").html($("#Visor").html() + value);
                }
            }
        }
    })

    $("#btn-equals").click(function() {
        $("#Visor").html(eval($("#Visor").text().trim()));
        Resultado = true;
        $("#Visor").attr("class", "texto-piscante");
    });

});


/*
var resultadoParcial = 0;

   if(value == "+" || value == "-" || value == "*" || value == "/"){


       console.log("Operacao");

       if(!document.getElementById("h1Value").textContent == ""){

           //var resultadoParcial = document.getElementById("h1Parcial").textContent;
           var expressao = document.getElementById("h5Value").textContent;
           var operacaoAnterior = expressao.charAt(expressao.length-1);
           var valorASerOperado = document.getElementById("h1Value").textContent;

           // alert(resultadoParcial + operacaoAnterior + valorASerOperado);

           // if(operacaoAnterior == "+"){

           //     resultadoParcial = soma(resultadoParcial, valorASerOperado);

           // }



           // alert(document.getElementById("h1Value").textContent);
           // alert(operacaoAnterior);

           // armazenaParcial(parseInt(valorASerOperado));

           document.getElementById("h5Value").innerHTML = document.getElementById("h5Value").textContent.concat(document.getElementById("h1Value").innerHTML, value);
           document.getElementById("h1Value").innerHTML = "";
           document.getElementById("h1Value").innerHTML = soma(parseInt(valorASerOperado));
           document.getElementById("h1Value").style = "color: orange;";

           entradaComParcial = true;



       }

   }else{

       if(value == "c"){

           document.getElementById("h1Value").innerHTML = '&nbsp;';

       }else if(value == "ce"){

           //document.getElementById("h5Value").innerHTML = '&nbsp;';
           document.getElementById("h1Value").innerHTML = '&nbsp;';
           resultadoParcial = 0;


       }else{

           if(entradaComParcial){

               document.getElementById("h1Value").innerHTML = "";
               entradaComParcial = false;
               document.getElementById("h1Value").style = "color: dimgray;";
               document.getElementById("h1Value").innerHTML = document.getElementById("h1Value").textContent.concat(value);

           }else{

               document.getElementById("h1Value").innerHTML = document.getElementById("h1Value").textContent.concat(value);
           // entradaVazia = false;
           }




       }


   }

}

function soma(Operador){

   return resultadoParcial+=valorASerOperado;
}

function subtracao(valorASerOperado){

   return resultadoParcial-=valorASerOperado;
}

function multiplicacao(valorASerOperado){

   return resultadoParcial*=valorASerOperado;
}

function divisao(valorASerOperado){

   return resultadoParcial/=valorASerOperado;
}*/

