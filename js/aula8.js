window.onload = function(){
	//carrego tudo para depois sempre que quiser usar só ter de usar as variaeis inves de capturar novamente.
	
	//aceder ao elemento intro
	var introP = document.getElementById("intro"); //retorna apenas um nó
	//alert(introP);
	var intro2 = document.getElementsByClassName("intro2"); //coleçãao de nós
	//alert(intro2);
	var h3 = document.getElementsByTagName("h3");//coleção de nós do tipo h3
	//alert(h3);
	
	//Manipulação do valor de um objeto
	introP.innerHTML = "Alterado via API DOM";
	introP.style.color = "#ffddcc"; //DOM HTML
	//ou
	introP.innerHTML = "Alterado via API DOM";
	introP.style.color= "#ffddcc"; //DOM HTML
	//OU
	introP.setAttribute("style","color:#0000FF"); //DOM CORE
	
	var img = document.getElementsByTagName("img")[0]; //DOM html //0 significa a imagem que esta na posição 0
	img.border = "2px solid #ddffcc";
	img.style.width="120px";
	//OU DOM CORE
	/*img.setAttribute("border","4px solid #ffdd00");
	img.setAttribute("style","widht:200px");*/
	
	var img3 = document.getElementsByTagName("img")[2]; //DOM html //0 significa a imagem que esta na posição 0
	img3.border = "2px solid #ddffcc";
	img3.style.width="120px";
	
	/*DOM HTML
		Coleção de dados na API DOM Html
		aceder a tag img no nosso site
		QT imgs
		alert(document.image.lenght);
	*/
	/*var imgs = document.images;
	for(var i=0; i < imgs.lenght; i++){
		alert(imgs[i].alt); //aceder ao atributo alt
		alert(imgs[i].src); //aceder ao atributo src
	}*/
	//Forma de acesso ao elemento
	//alert(imgs[0].alert);
	//alert(imgs.item[0].alt); //mesma coisa que a linha de cima
	
	//Links (tag a 'a')
	//alert(document.links.lenght);
	//alert(document.links[1].text);//aceder ao link 0
	//alert(document.links[0].href);//aceder ao link 0
	
	/*var links = document.links;
	for(var i=0; i< links.length; i++){
		alert(links[i].href); //aceder ao atributo alt
		alert(links[i].name = "Titulo " + i) ; //acrescentar o paramentro name e o atriburo um valor
	}*/
	
	
	//Formularios
	/*alert(document.forms);
	alert(document.forms[0]); // 1 formulario
	alert(document.forms.length);//qt form na apps*/
	
	var forms = document.forms;
	/*for(var i=0; i < forms.lenght; i++){
		alert(document.forms[i].method);
		alert(document.forms[i].action);
	}*/
	
	//aceder aos elementos do form
	var formElem = document.forms[0];
	/*alert(formElem.elements.length);
	for(var i=0;i < formElem.elements.length;i++ ){
		alert(formElem.elements[i]); //tipo de elemento
		alert(formElem.elements[i].value);
		alert(formElem.elements[i].id); //valor do atributo id
	}*/
	//ALTERAR ELEMENTOS (MANIPULAÇÃO)
	var c = document.forms[0].elements.irmaos[0].value;
	//alert(c);
	
	/*var elemIrmaos = document.forms[0].elements.irmaos;
	alert(elemIrmaos.length);
	for(var j = 0; j < elemIrmaos.length; j++){
		elemItem = document.forms[0].elements.irmaos[j];
		for (var i = 0; i < elemItem.attributes.length; i++){
			//Se algum elemento tiver um selected por default
			if(elemItem.attributes[i].name == "selected"){
				alert(elemItem.attributes[i].name + ": " + elemItem.attributes[i].value);
				elemItem.attributes[i].name + ": " + elemItem.attributes[i].value;
				var t2 = document.forms[0].elements.irmaos[3];
				t2.setAttribute("selected","selected");
				var t3 = document.forms[0].elements.irmaos[2];
				t3.removeAttribute("selected");
			}
		}
	}*/
	
	//Dados tabela
	var tabela = document.getElementById("tabela");
	var linha = tabela.insertRow(0); //inserir linha numa determinada tabela: 0 na linha 1 posição; -1 na ultuimma posição
	var cel1= linha.insertCell(0);//inserir dados na celula
	var cel2= linha.insertCell(1);//inserir dados na celula
	
	//add conteudo a celula criada
	cel1.innerHTML= "Criado via JS";
	//cel2.innerHTML= "Criado via JS";
	//Add atraves do metodo XML do DOM CORE
	cel2.appendChild(document.createTextNode("Criado via JS DOM CORE"));	
	
	//Inserir linhas de acordo coma  necessidade
	function novaLinha (cont1, cont2, nivel){
		var tabela = document.getElementById("tabela");
		var linha = tabela.insertRow(nivel);
		var cel1 = linha.insertCell(0);
		var cel2 = tabela.insertCell(1);
		cel1.innerHTML = contl1;
		cel2.appendChild(document.createTextNode(contl2));
	} //FIM novaLinha
	/*
	novaLinha("JS1","JS2", 0);
	novaLinha("JS3, "JS4", -1); */
	
	/* var btn_Insert = document.getElementById("btn_new").onClick = function(){
		
	}*/
	var btn_Delete = document.getElementById("btn_del");
	btn_Delete.onClick = function(){
		tabela.deleteRow(-1); //Elimina pelo index -1, ultima posição da tabela
	}
	
	//Todas as listas nao ordenadas
	var listaNaoOrdenas = document.getElementsByTagName('ul');
	
	//Aceder a primeira LISTA NAO ORDENADA
	var listaNaoOrdenas1 = document.getElementsByTagName('ul')[0];
	var listsItens = listaNaoOrdenas1.getElementsByTagName('li');
	for(var i=0, length= listsItens.length; i < length; i++){
		alert(listsItens[i].firstChild.data);
	}
	novaLinha("JS1","JS2", 0);
	novaLinha("JS3","JS4", -1);
}