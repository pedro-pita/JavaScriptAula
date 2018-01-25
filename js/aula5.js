/*var idade = "20";
//alert(idade.length);
//alert(new String(idade).length);
var nome = new String("Sergio");
console.log(nome);
//alert(nome.valueOf());

var num1 = new Number(1.120);
//alert(typeof(num1));
var n = new Number();
document.write("<br/> Valor de n "+n);
var n1 = new Number("Teste");
document.write("<br/> Valor de n1 "+n1)
var n2 = new Number("123");
document.write("<br/> Valor de n2 "+n2);
var n3 = new Number(123434);
document.write("<br/> Valor de n2 "+n2);
var n4 = new Number(false);
document.write("<br/> Valor de n4 "+n4);
var n5 = new Number(true);
document.write("<br/> Valor de n5 "+n5);
var n6 = new Number(1234);
var n7 = new Number(n6);
document.write("<br/> Valor de n6 "+n6);
document.write("<br/> Valor de n7 "+n7);

document.write("<br/> Valor de NaN "+Number.NaN);
document.write("<br/> Valor de MAX_VALUE "+Number.MAX_VALUE);
document.write("<br/> Valor de MIN_VALUE "+Number.MIN_VALUE);
document.write("<br/> Valor de NEGATIVE_INFINITY "+Number.NEGATIVE_INFINITY);
document.write("<br/> Valor de POSITIVE_INFINITY "+Number.POSITIVE_INFINITY);
var numero = new Number("10.12345");
document.write("<br/>Valor de numero "+numero.toFixed());
document.write("<br/>Valor de numero "+numero.toFixed(3));
document.write("<br/>Valor de numero "+numero.toPrecision());
document.write("<br/>Valor de numero "+numero.toPrecision(1));
document.write("<br/>Valor de numero "+numero.toString());*/

/*var exemplo = "JavaScript";
document.write("Texto escrito com o metodo big->  "+exemplo.big()+"<br/>");

document.write("Texto escrito com o metodo bold->  "+exemplo.bold()+"<br/>");

document.write("Texto escrito com o metodo italics->  "+exemplo.italics()+"<br/>");

document.write("Texto escrito com o metodo small->  "+exemplo.small()+"<br/>");

document.write("Texto escrito com o metodo strike->  "+exemplo.strike()+"<br/>");

document.write("Texto escrito com o metodo sup->  "+exemplo.sup()+"<br/>");

document.write("Texto escrito com o metodo sub->  "+exemplo.sub()+"<br/>");

document.write("Texto escrito com o metodo toLowerCase->  "+exemplo.toLowerCase()+"<br/>");

document.write("Texto escrito com o metodo toUpperCase->  "+exemplo.toUpperCase()+"<br/>");

document.write("Texto escrito com o metodo substring(0,4)->  "+exemplo.substring(0,4)+"<br/>");

document.write("Texto escrito com o metodo substring(4)->  "+exemplo.substring(4)+"<br/>");

document.write("Texto escrito com o metodo substring(4,2)->  "+exemplo.substring(4,2)+"<br/>");

document.write("Texto escrito com o metodo substring(2,4)->  "+exemplo.substring(2,4)+"<br/>");

var str = "Sergio";
document.write("Texto escrito com o metodo charAt(str.length - 1)->  "+str.charAt(str.length - 1)+"<br/>");

document.write("Texto escrito com o metodo charAt(3)->  "+str.charAt(3)+"<br/>");

//codigo tabela ascci
document.write("Texto escrito com o metodo charCodeAt(3)->  "+str.charCodeAt(3)+"<br/>");*/

//**********************************Array***********************
/*var numeros = new Array();//construcao simples sem dimensionamento
var nivel = new Array("baixo","media","alto");
//construcao com atribuicao de paramentros
var exemplo = new Array(5);//construcao simples com dimensionamento
exemplo[0]="exe1";
exemplo[1]="exe2";
exemplo[2]="exe3";
exemplo[3]="exe4";
exemplo[4]="exe5";
var nivel = ["baixo","medio","alto"];//forma literal

console.log(nivel);
//JOIN
str_1 = nivel.join();//baixo,medio,alto
str_2 = nivel.join(", ");//baixo, medio, alto
str_3 = nivel.join("*");//baixo*medio*alto
str_4 = nivel.join("<br/>");//baixo medio alto

//alert(str_3);
document.write(str_1);
document.write("<br/>"+str_2);
document.write("<br/>"+str_3);
document.write(str_4);
//Tamanho
nivel = new Array("baix","medio","alto","muito alto");
nivel.length = 3;//dimensionar para 2 elementos
//console.log(nivel);

//POP
nivel = new Array("baixo","medio","alto","muito alto");
var eliminado = nivel.pop();//a var eliminada contem "muitop alto"
alert(eliminado);
//console.log(nivel);
//PUSH
nivel = new Array("baixo","medio");
var novo = nivel.push("alto","muito alto");
//console.log(nivel);
//REVERSE
nivel = new Array("baixo","medio","alto","muito alto");
nivel.reverse();//inverter o array
console.log(nivel);
console.log(nivel[0]);
//-------------------------------------------------------------
var removido = nivel.shift();//consome o primeiro elementos
//alert(removido)
//-----------------------------------------------------------
var num = new Array("Valor1","Valor 2","Valor 3","valor 4");
str = num.toString();//str contem "Valor1","Valor 2","Valor 3","valor 4"
console.log(str);
//-----------------------------------------------
var v = new Array(4);
v[1]=234;
v[3]=12345;
document.write("<p>");
document.write("Indice 0:"+v[0]);
document.write("<br/>Indice 1:"+v[1]);
document.write("<br/>Indice 2:"+v[2]);
document.write("<br/>Indice 3:"+v[3]);
document.write("</p>");
v[2]="sergio";
document.write("<p>");
document.write("Indice 0:"+v[0]);
document.write("<br/>Indice 1:"+v[1]);
document.write("<br/>Indice 2:"+v[2]);
document.write("<br/>Indice 3:"+v[3]);
document.write("</p>");
//---------------------------------------------------------
var lp = new Array("XHTML","PHP","JAVA","C","MySQL");
document.write("<p> Este vetor possui "+lp.length+" elementos, sendo eles: </p>");
document.write("<ul>");
for(var i=0;i<lp.length;i++){
	document.write("<li>"+lp[i]+"</li>");
}
document.write("</ul>");
//---------------------------------------------------------------
//inverter atraves de ciclos
var nv = new Array(lp.length);
document.write("<ul>");
var count =0;
for(var i = lp.length;i>0;i--){
	nv[count++] = lp[i-1];
	
}
for(var i=0;i<lp.length;i++){
	document.write("<li>"+nv[i]+"</li>");
}
document.write("</ul>");
//-----------------------------------------------------------------
var nome = "http://www.epcc.pt/?polo=funchal";
var copy = new Array(nome.lenght);
var cnt = 0;
for(var i=nome.lenght;i>0;i--){
	copy[] = nome[i-1];
}
copy = copy.join("");
document.write("Exemplo de string invertida: <br/>Antes-> "+nome+" <br/>Depois-> "+copy);*/
//----------------------------------------------------------------
//Array Avancado - multidimensional
//sintaxe: var nomeArray = new Array(new Array, new Array);
//Exemplo
var vN = new Array("Sergio","Araujo");
var vI = new Array(18,56);
var vT = new Array(vN,vI);
//OU
var vT = new Array();
vT[0]  = new Array("Sergio","Araujo");
vT[1]  = new Array(18,56);

document.write("<br/>VT[0] "+vT[0]);
document.write("<br/>VT[1] "+vT[1]);
document.write("<br/>VT "+vT);
document.write("<br/>VT[0][0] "+vT[0][0]);
document.write("<br/>VT[1][1] "+vT[1][1]);
//OU- atraves do literal
var vT = [
			["Sergio","Araujo"],
			[18,56,67]
		];
console.log(vT);
console.log(vT.lenght);//2
console.log(vT[0].lenght);//2
console.log(vT[1].lenght);//3
//--------------------------------------------------------
//Array Associativo -existe uma associacao de dados
//ContentValues()-Chaves, valor
var vPessoa = {nome:"Sergio",idade:"20",morada:"funchal"};
document.write("<br/>Pessoa->nome: "+vPessoa.nome);
document.write("<br/>Pessoa->nome: "+vPessoa.idade);
document.write("<br/>Pessoa->nome: "+vPessoa.morada);

//date
var data = new Date();
document.write("<br />Data: " + data);
var dataM = new Date(1000*60*60*24*365); //1 ano em relação a 01/01/1970
document.write("<br />Data: " + dataM);
var dataE = new Date(2012, 02, 12, 12, 14, 1000);
document.write("<br />Data: " + dataE);
var hoje = new Date();
var h = hoje.getHours();
var m = hoje.getMinutes();
var s = hoje.getSeconds();
document.write("<br />Data de hoje: " + h + ":" + m + ":" + s);
//------------------------------------------
var dias_semana = {"domingo","segunda", "terça", "quarta", "quinta", "sexta", "sabado"];
var hoje = new Date();
document.write("<br /> O dia da semana é: " + dias_semana[hoje.getDay()]);
 //----------------------------------------------
 var hoje = new Date();
 document.write("<br /> Data no formato DD/MM/AAAA" + hoje.toLocateString());
 

