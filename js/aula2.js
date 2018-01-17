var str = "Programador";
alert("o valor da var: " + str);
var num = 4;
var opTer = ((num == 6) ? "Igual a 6" : "Diferente de 6");
alert(opTer);
document.write("sergio");
document.write("<br/>" + opTer);
document.write("<p> Paragrafo inserido via js-</p>");
var x =10;//10
var a = ++x;//1.84
var y = 1.84;//1.84
y += x;//12.84
//alert("x:"+x+"-a:"-y"+y);
//alert("Resultado: " + (1 == 2));
var x1 =1;
var testOrd = ((x>=3) || (x1<=1));
var testAnd = ((x1>=3) && (x1<= 1));
//alert(testAnd);//false
//alert(testOr);//true
//alert(!(x1>=1));//false
var str_C = "Curso";
var str_T = "Programador";
var strCT = str_C + " " + str_T;
var str_E = "Escola: " + strCT;
document.write("<p>" + strCT + "</p>");
document.write("<br/>" + str_E);
var receptor = prompt("Minha mensagem", "Insira texto");
document.write("<p>O texto digitado foi:<b>" + receptor + "</b></p>");
console.log("Texto via log do sistema");		