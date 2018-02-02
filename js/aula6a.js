/*//Funcao construtora
function Carro(velMax){
	this.velocidadeMax = velMax;
	this.ligado = false;
}
var carro = new Carro(230);
document.write(carro.velocidadeMax+"<br />");

carro.cor ="azul";
document.write(carro.cor+"<br />");
//-----------------------------------
function liga(){
	this.ligado = true;
} 
Carro.prototype.ligar = liga;
document.write(carro.ligado+"<br />");
carro.ligar();
document.write(carro.ligado+"<br />");
//ppelo metodo no objeto
var carro2 = new Carro(1200);
carro2.ligar = liga;
document.write(carro2.ligado+"<br />");
carro2.ligar();
document.write(carro2.ligado+"<br />");
//------------------------------------
//Na estrutura da clase
function liga(){
	this.ligado = true;
}
function Mota(velMax){
	this.velocidadeMax = velMax;
	this.ligado = false;
	this.ligar = liga;
}
var mota = new Mota(2300);
document.write(mota.ligado+"<br />");
mota.ligar();
document.write(mota.ligado+"<br />");
//literal do objetivo
var Familia = {
	
	nomeFamilia:"Araujos",
	qtAgregado:6,
	vencimentoAgregado:1200,
	filho1:{
		nomeFilho:"Sergio",
		idadeFilho:23
	},
	filho2{
		nomeFilho:"Joana",
		idadeFilho:35
	}
};
document.write("<br />"+Familia.nomeFamilia+" tem no agregado "+Familia.qtAgregado+" elementos, vivem com "+Familia.vencimentoAgregado+"€, o primeiro filho chama-se "+Familia.filho1.nomeFilho+" e tem "+Familia.filho1.idaeFilho+" anos!!!");*/
//**********************************
//Composicao dos objetos
function Familia(n, v){
	this.nome = n;
	this. vencimento = v;
}
function Filho(n, i){
	this.nome = n;
	this.idade = i;
}

var familia = new Familia("Araujos",121223);
var f1 = new Filho("Sergio",23);
var f1 = new Filho("Ana",34);
familia.filho1=f1;
familia.filho2=f2;
document.write("<br />"+familia.nome+" vivem com "+familia.vencimento+"€, o primeiro filho chama-se "+Familia.filho1.nome+" e tem "+familia.filho1.idadeFilho+" anos!!!");
//*************************************
//Encapsulamento

function Aquecedor(temp){
	var temperaturaMaxPermitida = 40;
	var temperaturaMinPermitida = 25;
	if(temp > 0 && temp <=temperaturaMaxPermitida){
		this.temp = temp;
	}else{
		this.temp = temperaturaMedia;
	}
	this.ligado = false;
	this.ligar = function (){
		this.ligado = true;
	}
}

var a = new Aqeucedor(6);
document.write("<br/>"+a.temperatura);
document.write("<br/>"+a.temperaturaMaxPermitida);
//--------------------------------------------------
//Heranca
document.write(Pessoa){
	this.nome = "Sem nome";
	this.temFilhos = false;
	this.criaFilhos = function(){
		this.temFilhos = true;
	}
	this.retirarFilhos = function(){
		this.temFilhos = false;
	}
}
function Aluno(){
	var notaMaxExame = 20;
	var notaMinExame = 7;
	var vaiExame = false;
	if(nota > 7 && nota <= notaMaxExame){
		this.notaFinal = nota;
		this.vaiExame = vaiExame;
	}else{
		this.notaFinal = nota;
		this.vaiExame = true;
	}
}

Aluno.prototype = new Pessoa();
var aluno = new Aluno(6);
document.write("<br/>"+aluno.vaiExame);
document.write("<br/>"+aluno.notaMinExame);
document.write("<br/>"+aluno.notaFinal);
document.write("<br/>"+aluno.temFilhos);
aluno.criaFilhos();
document.write("<br/>"+aluno.temFilhos);
//***********************************************
//EXEMPLO 2
document.write("<br/>Exmplo 2<br/>");
//Funcao construtora
var Pessoa = function(n, c){
	this.nome = n;
	if(c){
		this.contato=c;
	}
	this._toString() = function(){
		document.write("Nome: "+this.nome+" contacto: "+this.contato);
	}
};
//Sobrescrevendo o prototype
var Pessoa = function(){
	this.nome = n;
	if(c){
		this.contacto = c;
	}
};

Pessoa.prototype = {
	constructor:Pessoa,
	_toString:function(){
		document.write(
		"_toString->Nome: "+this.nome+" contacto: "+this.contacto
		);
	}
	imprimeNome:function(){
	document.write("IN->Nome: "+this.nome);	
	}
}
var p1 = new Pessoa("Sergio Araujo","98547238");
p1.toString();
//-------------------------------------------------------------------------------------
//Retorna o objeto literal, nao e necessario o operador 'new'.

var Pessoa = function(nome,contacto){
	
	return{
		nome: nome,
		contato: contato,
		imprimeNome: function(){
			document.write("imprimeNome->Nome: " + this.nome);
		}
	};
	
};

var p1 = Pessoa("Nova Pessoa","123123123");
p1.imprimeNome();
alert(p1.nome);
