window.onload=function(){
	var nome = "Sergio";
	gravarCookie("nomeCookie"), nome, 15);
	var n = lerCookie("nomeCookie");
	alert(n);
}