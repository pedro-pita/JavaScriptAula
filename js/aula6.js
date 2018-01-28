function fsemRetorno(){
	document.write("Funcao sem parametros<br/>");
}

function calcularSoma(){
	return 10+3;
}

document.write("O valor da soma e: "+calcularSoma());

function imprime(txt){
	document.write(txt+"<br />");
}

function multiplica(x,y){
	return x*y;
}

//Chamada dos metodods: sintaxe: nomeFuncao();

fsemRetorno();

var soma = calcularSoma();
var mul = multiplica();
imprime(soma);
imprime("<br/>Quebra de linha<br/>");
imprime(mul);

var multi = new Function("v1","v2","return v1*v2");
var resM1 = mult1(4,4);

var mult2 = function(v1,v2){
	return v1*c2;
}
mult2(5,89);
imprime(resM1);
imprime(mult2(5,89));
//Click no elemento da lista Evento onClick 
function onClick(){
	
	alert("Evento de clique, atraves de atributos(onClick) da tag html'li'");
	
}
document.getElementById("refJS").onclick = function(){alert("Fui referenciado de forma correta");}.

window.onload = function(){document.getElementById("refJS").onclick = function(){
	alert("Fui referenciado de forma correta");
};

//----------------------------------------------------------------------------------------------------

window.onload{
	alert("Ola");
	confirm("tem a certeza?");
	prompt("Indique o seu nome");
	open("aula5.html","titulo da nova pagina","width=100, height=100, toolbar=no,location=no");
	document.getElementById("refJS").innerHTML = "Ola fui inserido via JS";
	alert("appName"+navigator.platform);
	alert("appName"+navigator.appVersion);
	alert("appName"+navigator.appAgent);
}
