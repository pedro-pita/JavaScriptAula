window.onload = function(){
	document.getElementById("ajax").onclick = function() {
		var ajax;//nova instancia de um objeto responsavel pela requesicao ao servidor
		
		//CODIGO CRITICO
		try{
			//Opera, Firefox, Safari, Chrome
			ajax = new XMLHttpRequest();
			alert("Opera, Firefox, Safari, Chrome");
		}catch(e){
			try{
				//IE Browser
				ajax = new ActiveXObject("Msxml2.XMLHTTP");
				alert("IE Browser");
			}catch(e){
				try{
					//Outros Browsers
					ajax = new ActiveXObject("Microsoft.XMLHTTP");
					alert("Outro Microsoft");
				}catch(e){
					alert("Erro");
					return false;
				}
			}
		}
		var resposta_conteudo = document.getElementById("conteudo");
		/*
		Etapas no processamento da resposta ao pedido HTTP, atraves da funcao criada.
		Respostas ao pedido do servidor:
		Valores para o parametro readyState:
		0 - nao iniciado
		1 - em carregamento
		2 - carregado
		3 - em processo iterativo
		4 - pedido completo
		---------------------------------------------------------------------------------------------------------------
		Codigos de estado na reposta HTTP
		200 - OK
		*/
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				alert("cheguei, estou completo e com sucesso");
				//Acesso aos dados da resposta
				//http_request.responseText - devolve a resopsta como texto puro
				//http_request.responseXML - devolve a resopsta como objeto XML
				try{
					//resposta_conteudo.appendChild(document.createTextNode(ajax.responseText));
					//------------------------------------------------
					resposta_conteudo.innerHTML = this.responseText;
				}catch(e){
					alert(e.toString());
				}
			}//end if
		}// end onreadystatechange
		try{
			//iniciar o pedido com o metodo open(metodo de request(POST,GET,etc),URL de requesicao, por defeito executa em modo assincrono(true);
			ajax.open("POST","./Aula 10 -Material/file.txt",true);
		}catch(e){
			
		}
		
		try{
			//O metodo send(), podemos indicar alteracoes em servidor, enviando dados na requesicao.
			//Ex: name=sergio&idade=23
			//ou nul se nao pretendemos alterar
			ajax.send(null);
		}catch(e){
			alert(e.toString);
		}
		return false;
	}//end onlclick
}