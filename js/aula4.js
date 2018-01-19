/*const PAR = "o valor PAR"
var num = 1;
if(num > 1){
	alert("> que 1");
}else{
	document.write("<br/><p>mewnor que 1</p>");
}

//verificar par
if((num % 2) == 0){
	document.write("<br/><p>o valor "+num+" e par</p>");
}else{
	document.write("<br/><p><br/>impar</p>");
	
}
//---------------------------------------------------
//teste de verdade
var verdade = true;
if(verdade){
	document.write("<br/> o teste foi verdadeiro");
}else{
	document.write("<br/>Nao passou na verificacao do if, significa que a condicao de teste e falsa");
}
//---------------------------------------------------
var num2 = 2;
if(num == 0){
	alert("<br/>O valor e 0");
}else if(num2 == 1){
	alert("<br/>o valor e 1");
}else if(num2 == 2){
	alert("<br/>o valor e 2");
}else{
	alert("<br/>O valor e <> de 0,1,2");
}
//---------------------------------------------------
var idade = prompt("<br/>idade?","insira a sua idade");
if (idade <= 10){
	document.write("<br/><span>Menor que 10</span>");
}else if(idade > 10 && idade <= 20){
	document.write("<br/><span>Entre 11 e 20 anos<span>");
}else if(idade > 20 && idade <= 30){
	if(idade > 23 && idade <= 29){
		document.write("<br/><span>Entre 24 e 29 anos.<span/>");
	}else if(idade == 21){
		document.write("<br/><span>Parambens tens 21 anos</span>");
	}
	
}else{
	if(idade > 65){
		document.write("<br/><span>Parabens entraste na reforma que nao vais ter porque sistema esta falido/span>");
	}else{
		document.write("<br/><span>Entre 31 e 66 anos </span>")
	}
}

//---------------------------------------------------------------------------------------------------
var num3 = 2;
switch(num3){
	case 1:
		alert("1");
		break;
	case 2:
		alert("2");
		break;
	case 3:
		alert();
		break;
	default:
		alert("Outro valor");
}
//multicase
var estado = "casado1filho";
switch (estado){
	case "casado0filho":
		
	case "casado1filho":
	
	case "casado2filho":
		alert("Estado: casado");
		break;
	
	case "solteiro0filho":
	const PAR = "O valor par";
var num = 1;
if(num > 1) {
	alert("maior que 1");
} else {
	document.write("menor que 1");
}

//verificar par
var num1 = 40;
if((num1 % 2) == 0) {
	document.write("num1: "+num1+" é par");
} else {
	document.write("impar");
}
//------------------------------------
// teste de verdade
var verdade = true;
if(verdade) {
	document.write("<br />o teste foi verdadeiro");
} else {
	document.write("<br /> Nao passou na verificaçao do if,  significa que a condiçao de teste e falsa");
}
//----------------------------
var idade = 25;

if(idade <= 10){
	alert("idade inferior a 10");
} else if ((idade > 10) && (idade <= 20)){
	alert("idade maior que 10 e menor que 20");
} else if ((idade > 20) && (idade <= 30)){ 
	alert("idade maior que 20 e menor que 30");
	if((idade > 24) && (idade < 30)) {
		alert("idade maior que 24 e menor que 30");
	} else if(idade == 22) {
		alert("idade igual a 22");
	}
} else {
	if(idade > 60) {
		alert("idade superior que 60 anos");
	} else {
		alert("idade superior que 31 anos e menos que 60");
	}
}
//---------------------------------------
idade = prompt("Idade","Insira a idade");

if(idade <= 10){
	document.write("<span> Menor que 10 anos </span>");
}
else if ((idade > 10) && (idade <= 20)){ 
	document.write("<span> Entre 11 e 20 anos </span>");
}
else if ((idade > 20) && (idade <= 30)){ 
	if((idade > 23) && (idade <= 29)) {
		document.write("<span> Entre(24 e 29) anos </span>");
	} else if(idade == 21){
		document.write("<span> Idade de 21 anos </span>");
	}
}
else { 
	if(idade > 65){
		document.write("<span>Parabens entraste na reforma </span>");
	} else {
		document.write("<span> Entre(31 e 66) anos </span>");
	}
}

//----------------------------
// Switch
/*
var teste = 2;
switch(teste) {
	case 1:
		alert("1");
		break;
	case 2: alert("2"); break;
	case 3: alert("3"); break;
	case 4: alert("4"); break;
	default: alert("Outro valor");
} */
//mulicase
/*
var estado = "Casado1filho";
switch(estado) {
	case "Casado0filho":
	case "Casado1filho":
	case "Casado2filho": alert("casado"); break;
	case "Solteiro0filho":
	case "Solteiro1filho": alert("solteio"); break;
	default: alert("estado na indicado");
}
*/
// Estrutras de repetoçao***************************
for(var i = 0; i < 4; i++) {
	alert(i);
	document.write("<br />"+i);
}
//----------------------------
var par = "Par:";
var impar = "Impar:";
for(var i = 0; i <= 40; i++) {
	if(i % 2 == 0) {
		if(i == 40) {
			par += i;
		} else {
			par += i + "->";
		}
	} else {
		impar += i;
	}
}
	alert(par);
	alert(impar);
	document.write("<br />"+par);
	document.write("<br />"+impar);
//----------------------------------------------
var Pessoa = {
				nome: "Ricardo";
				idade: 16;
				morada: "Santa Cruz";
			};
for(var atributos in Pessoa) {
	alert(atributos+":"+Pessoa[atributos]);
	alert(atributos+":"+Pessoa.nome);
}
alert(typeof(Pessoa.nome));