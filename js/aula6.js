/*function fsemRetorno(){
	document.write("Funcao sem retorno <br/>");
}

function calculaSoma(){
		return 10+3;
}
function imprime(txt){
	document.write(txt+"<br/>");
}

function multiplica(x,y){
	/*var res = x*y;
	return res;
	return x*y;
}
/*Chamada dos metodos:
	Sintaxe: nomeFuncao();
fsemRetorno();
var soma = calculaSoma();
var mul = multiplica(4,5);
imprime(soma);
imprime("<br/>Queba <br/> Queba<br/>");
imprime(mul);

var mult1 = new Function("v1","v2","return v1*v2;");
var resM1 = mult1(4,4);

var mult2 = function(v1,v2){
	return v1*v2;
}
mult2(5,89);

imprime(resM1);
imprime(mult2(5,89));
//---------------------------+++*****************************
//Click no elemento da lista Evento onClick()
function onClick(){
	alert("Evento de clique, atraves de atributo(onClick) da tag html 'li'");
}
//***********************Erro no momento in invocacao**********
/*document.getElementById("refJS").onclick = function(){ alert("Fui referenciado de forma correta");}

//*******************Forma correta***************************
window.onload = function(){
	document.getElementById("refJS").onclick = function(){ alert("Fui referenciado de forma correta");}
}
//--------------------------------------------------
window.onload = function(){
	/*alert("Ola");
	confirm("tem a certeza?");
	prompt("Indique o seu nome: ");
	open("aula5.html","titulo da nova pagina","width=100,heigth=100,toobar=no,location=no");
	document.getElementById("refJS").innerHTML = "Ola fui inserido via JS";
	//alert("appName "+navigator.platform);
	//alert("appName "+navigator.appVersion);
	//alert("appName "+navigator.userAgent);
	
	var plugins = navigator.plugins;
	var p = "";
	for(var i=0;i<plugins.length;i++){
		p += plugins[i].name + "\n";
	}
	
	//alert(p);
	//objeto de localizacao de informacao relativa a localizacao do documento
	
	//document.write(location.href);
	//document.write(location.protocol);*/
	
	alert(screen.width+":"+screen.height);
	document.getElementById("tempo").onclick = function(){
		inicioPedido();
	}
	document.getElementById("tempof").onclick = function(){
		paraContagem();
	}
	/*setInterval . definimos um intervalo de tempo entre requisicoes */
	setInterval(relogio,1000);
	var atualiza = 3;//mudar de 3 em 3 segundos a imagem
	var intervalControl = setInterval(rodarImagens,atualiza*1000);
	
}
	
	//Atualizar a pagina, usamos o metodo reload()
	function atualizarPagina(){
		window.location.reload();
	}
	
	//Objeto History- informacao referente ao historico de navegacao
	function retroceder(){
		window.history.back();
	}
	
	function avancar(){
		window.history.forward();
	}
	
	//Avancar ou retroceder varios niveis
	function irPara(){
		window.history.go(1);
	}
	
	//Avancar ou retroceder varios niveis
	function voltar2N(){
		window.history.go(-2);
	}
//*************************************************
//contadores
var c = 10;
var t;

function iContador(){
	document.getElementById('txt').innerHTML = c;
	c = c-1;
	t = setTimeout("iContador()",1000);
}

var t;
var a;
function iniciar(){
	a = prompt("Iniciar em quantos segundos?");
	contador();
}

function contador(){
	if(a > 0){	
		document.getElementById('txt').innerHTML = a;
		a = a-1;
		t = setTimeout("contador()",1000);
	}else{
		alert("You lose");
	}
}
function cancelar(){
	clearTimeout(t);
	alert("Cancelado!!!!");
}

//-------------------------------------
function redirecionar(){
	location.replace('http://www.google.pt');
}
var y = 5;
var t1;
function iniciaRedirecionamento(){
	contadorRed();
}
function contadorRed(){
	document.getElementById('txt').innerHTML = y;
	y = y-1;
	t1 = setTimeout("contadorRed()",1000);
	if(y == 0){
		redirecionar();
	}
}
function cancelaRedirecionamento(){
	if(t1 !== null){
		clearTimeout(t1);
		y=5;
		alert("Cancelado!!!")
	}
}
//************************************************************************************
var w;
var count;

function inicioPedido(){
	tp = prompt("Iniciar a contagem em (S) ou (M)");
	switch(tp){
		
		case 'S':
		case 's':
			tps = prompt("Iniciar em qt segundos");
			contagem(tps);
			break;
		case 'M':
		case 'm':
			tps = prompt("Iniciar em qt minutos");
			contangem(tpm);
		default: break;
	}
}

function contagem(w){
	if(w>0){
		document.getElementById('txt').innerHTML = w;
		w--;
		count = setTimeout(function(){contagem(x);},1000);
	}else{
		clearTimeout(count);
		delete w;
		alert("Acabou a contagem!");
	}
}

function paraContagem(){
	if(count !== null){
		alert("Parou a contagem");
		clearTimeout(count);
	}
}
//***************************************************************
function verificarTime(j){
	if(j < 10){
		j="0"+j;
	}
	return j;
}
function relogio(){
	var now = new Date;
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	
	m = verificarTime(m);
	s = verificarTime(s);
	
	var time = h + ":" + m + ":" + s;/12:12:12
	document.getElementById("relogio").innerHTML = time;
}
//***************************************************************
/*passagem das imagens */
var gtImagem = 0;
var imagens = [];
imagens[0] = {src="./aula6/1.gif", alt="imagem 1"};
imagens[1] = {src="./aula6/2.gif", alt="imagem 2"};
imagens[2] = {src="./aula6/3.gif", alt="imagem 3"};
imagens[3] = {src="./aula6/4.gif", alt="imagem 4"};
imagens[4] = {src="./aula6/5.gif", alt="imagem 5"};
function rodarImagens(){
	document.images["roda"].style.width = "200px";
	document.images["roda"].style.height = "200px";
	document.images["roda"].src = imagens[posImagem]["src"];
	document.images["roda"].title = imagens[posImagem]["alt"]
	posImagem++;
	if(posImagem >= imagens.length){
		posImagem = 0;
	}
	
}

	