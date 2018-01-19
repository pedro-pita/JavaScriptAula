const PAR = "o valor par";
var num = 20;
if (num > 1 ){
	document.write("Maior que 1");
}else{
	document.write("Menor que 1");
}

//verificar parif 
var num1 = 11;
if((num1 % 2) == 0 ){
	document.write("<br/> O valor " + num1 + " é par");
}else{
	document.write("<br /> O valor " + num1 + " é Impar");
}
//----------------------------------------
//teste de verdade
var verdade = true;
if(verdade){
	document.write("<br />O teste foi verdadeiro.");
}else{
	document.write("<br />O teste foi falso.");
}


//-----------------------------------------
var num2 = 3;
if(num2 == 1){
	alert("O valor é 1");
} else if(num2 == 1){
	alert("O valor é 1");
} else if(num2 == 2){
	alert("O valor é 1");
}else{
	alert("O valor não é 1 nem 2");
}
//----------------------------------------
var idade = prompt("Idade?", "Insira a sua idade.");
if(idade <= 10){
	document.write("<br /><span>A sua idade é menor que 10.</span>");
} else if(idade > 10 && idade <= 20){
	document.write("<br /><span>A sua idade é maior que 10 e menor que 20.</span>");
} else if(idade > 20 && idade <= 30){
	if(idade > 23 && idade <= 30){
		document.write("<br /><span>A sua idade é maior que 23 e menor que 30.</span>");
	}else if(idade == 21){
		document.write("<br /><span>Parabens tens 21</span>");
	}
}else{
	if(idade > 65){
		document.write("<br /><span>Parabens entras na reforma que nao vais ter porque o sistema esta falido.</span>")
	}else{
		document.write("<br /><span>Entre (31 e 66 anos).</span>");
	}
}

//----------------------------------------
//Switch
var num3= 2;
switch(num3){
		case 1: alert("1"); break;
		case 2: alert("2"); break;
		case 3: alert("3"); break;
		default: alert("Outro valor");
}
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
//--------------------------------------------------
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
