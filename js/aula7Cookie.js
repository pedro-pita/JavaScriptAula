function gravarCookie(nome, value, days){
	var expires = "";
	if(days){
	var date = new Date();//Criamos a var que ira receber a data atual
	var dateMls = date.setTime(date.getTime()) + days*24*60*60*1000));
	//redefinimos a data atual somando os milisegundos correspondentes ao numero de dias passado com argumento
	expires = "; expires = "+ date.toUTCString();
	//validamos a nova data criada e seu atribumos o seu valor na var expires
	}
	if(value != null && value != "null"){
		doctype.cookie = name + "=" + value + expires + "; path=/":
		//name + "=" + value + expires; -> desta forma a cokie sera criada na pasta onde estamos a trabalhar
	}
}
function lerCookie(name){
	var searchName = name + "=";//var que ira receber o valor das cookies guardadas, por forma a podermos comparar com o valor passado no argumento
	var cookies = document.cookies.split(';'); //quebra o array ficando apenas com o nome=valor_cookie
	for(var i=0;i<cookies[i];//guarda na var c o valor da cookie atual
	alert(c);
	while(c.charAt(0) == ' '){
		//retorna o carater na pos 0 'e verificado se 'e um espaco
		c = c.substring(searchName.lenght, c.lenght);
	}
	if(c.indexOf(searchName) == 0){
		//procura o indice do nosso cookie
		alert (c.substring(shearchName.lenght, c.lenght));
	}
	return null;
}
/*Procedimento de elminacao:
1-Recebemos o nome da cookie atraves do argumento name
2-gravamos ovamente a cookie, fazemos uso da funcao de gravacao, no entanto, indicamos uma data invalida(-1), desta dorma o argumento expires da cookie fica com dara invalida eminando-se*/
function eliminarCookie(name){
	gravarCookie(name,'',-1);
	alert("COOKIE: "+ name + "\nEliminar);
}