/*var x = prompt("Numero maior que 10.");

try{
	var x = y;
}catch(erro){
	alert(erro.toString());
}*/
//----------------------------
/*var x = prompt("Numero maior que 10.");

try{
	if(x < 20){
		throw "Numero menor que 20.";
	}
	//var x = y;
	alert("Valor inserido: "+x);
}catch(erro){
	alert(erro.toString());
}*/
//----------------------------
/*var x = prompt("Numero maior que 10.");

try{
	if(x < 10 && x >= 5){
		throw "Erro:(5-9)";
	}
	if(x < 5){
		throw "Erro:(<5)";
	}
}catch(erro){
	if(erro == "Erro:(<5)"){
		alert("O numero inserido foi inferior a 5.");
	}else if(erro == "Erro:(5-9)"){
		alert("O numero inserido esta entre 5 e 9.");
	}
}*/
//-----------------------------
try{
	var x = y;
}catch(erro){
	alert(erro.name+"-"+erro.message);
}finally{
	alert("Terminou a verificacao de erro.");
}
