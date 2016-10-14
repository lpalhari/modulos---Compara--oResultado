exports.appRevengeOfThePancakes = function(){
		var geradorDe = require('./auxiliary.js');
		var modeloAlgoritmo = require('./models.js');
		var userAlgoritmo = require('./userFiles.js');
		var tempoInicialModelo = 0;
		var tempoFinalModelo = 0
		var tempoModelo = 0;		
		var tempoInicialUsuario = 0;
		var tempoFinalUsuario = 0;
		var tempoUsuario = 0;
		var loop = 1;
		var nrDePanquecas = 0;
		var listaDePanquecas1 = [];
		var listaDePanquecas2 = [];
		while(loop <= 100){
			nrDePanquecas = geradorDe.qtdDePanquecas();
			listaDePanquecas1 = geradorDe.geraPanquecas(nrDePanquecas);
			listaDePanquecas2 = geradorDe.copiaVetorPanquecas(listaDePanquecas1);
			console.log("Caso: "+loop+" | Panquecas Avaliadas: "+listaDePanquecas1);
			tempoInicialUsuario = new Date;
			var resultUser = userAlgoritmo.userRevengeOfThePancakes(listaDePanquecas1);
			tempoFinalUsuario = new Date;
			tempoUsuario = (tempoUsuario + ((tempoFinalUsuario-tempoInicialUsuario)/1000));
			tempoInicialModelo = new Date;
			var resultAvaliador = modeloAlgoritmo.modeloRevengeOfThePancakes(listaDePanquecas2);
			tempoFinalModelo = new Date;
			tempoModelo = (tempoModelo + ((tempoFinalModelo-tempoInicialModelo)/1000));
			
			if(resultUser!= resultAvaliador){
				console.log("Resutado esperado: "+resultAvaliador+" | Resutado obtido: "+resultUser+"\n");
				return console.log('\n Caso de Testes Falhou');
			}
			console.log("Resutado esperado: "+resultAvaliador+" | Resutado obtido: "+resultUser+"\n");
			
			loop = loop +1;
		}
		tempoModelo = (tempoModelo/(loop-1));
		tempoUsuario = (tempoUsuario/(loop-1));
		console.log("Tempo Modelo: "+tempoModelo+" segundos | Tempo Usuario: "+tempoUsuario+" segundos\n\n");
		return console.log('Testes de Corretude Realizado: OK\n\n');
}

exports.appCountingSheep = function(){
	var loop = 1;
	var geradorDe = require('./auxiliary.js');
	var modeloAlgoritmo = require('./models.js');
	var userAlgoritmo = require('./userFiles.js');
	var tempoInicialModelo = 0;
	var tempoFinalModelo = 0
	var tempoModelo = 0;		
	var tempoInicialUsuario = 0;
	var tempoFinalUsuario = 0;
	var tempoUsuario = 0;
	var nrBleatriz = 0;
	while(loop <= 100){
		nrBleatriz = geradorDe.geranrBleatriz();
		console.log("Caso: "+loop+" | Numero Bleatriz Avaliado: "+nrBleatriz);
		tempoInicialModelo = new Date;
		var resultAvaliador = modeloAlgoritmo.modeloCountingSheep(nrBleatriz);
		tempoFinalModelo = new Date;
		tempoModelo = (tempoModelo + ((tempoFinalModelo-tempoInicialModelo)/1000));
		tempoInicialUsuario = new Date;
		var resultUser = userAlgoritmo.userCountingSheep(nrBleatriz);
		tempoFinalUsuario = new Date;		
		tempoUsuario = (tempoUsuario + ((tempoFinalUsuario-tempoInicialUsuario)/1000));
		if(resultUser != resultAvaliador){
			console.log("Resutado esperado: "+resultAvaliador+" | Resutado obtido: "+resultUser+"\n");
			console.log("OBS: Resutado deve estar em formato String \n");
			return console.log('Caso de Testes Falhou');
		}
		console.log("Resutado esperado: "+resultAvaliador+" | Resutado obtido: "+resultUser+"\n");
		loop = loop +1;		
	}
	tempoModelo = (tempoModelo/(loop-1));
	tempoUsuario = (tempoUsuario/(loop-1));
	console.log("Tempo Modelo: "+tempoModelo+" segundos | Tempo Usuario: "+tempoUsuario+" segundos\n\n");
	return console.log('Testes de Corretude Realizado: OK\n\n');	
}

exports.appStandingOvation = function(){
	var loop = 1;
	var geradorDe = require('./auxiliary.js');
	var modeloAlgoritmo = require('./models.js');
	var userAlgoritmo = require('./userFiles.js');
	var tempoInicialModelo = 0;
	var tempoFinalModelo = 0
	var tempoModelo = 0;		
	var tempoInicialUsuario = 0;
	var tempoFinalUsuario = 0;
	var tempoUsuario = 0;
	var maximoTimidez = 0;
	var pessoasTimidez = [];
	while(loop <= 100){
		var maximoTimidez = geradorDe.nivelMaxTimidez();
		var pessoasTimidez = geradorDe.pessoas_timidez(maximoTimidez);
		console.log("Caso: "+loop+" | Timidez Maxima: "+maximoTimidez+" | Pessoas em ordem de Dimidez: "+pessoasTimidez);
		tempoInicialModelo = new Date;
		var resultAvaliador = modeloAlgoritmo.modeloStandingOvation(maximoTimidez, pessoasTimidez);
		tempoFinalModelo = new Date;
		tempoModelo = (tempoModelo + ((tempoFinalModelo-tempoInicialModelo)/1000));
		tempoInicialUsuario = new Date;
		var resultUser = userAlgoritmo.userStandingOvation(maximoTimidez, pessoasTimidez);
		tempoFinalUsuario = new Date;		
		tempoUsuario = (tempoUsuario + ((tempoFinalUsuario-tempoInicialUsuario)/1000));		
		if(resultUser != resultAvaliador){
			console.log("Resutado esperado: "+resultAvaliador+" | Resutado obtido: "+resultUser+"\n");
			return console.log('Caso de Testes Falhou');
		}
		console.log("Resutado esperado: "+resultAvaliador+" | Resutado obtido: "+resultUser+"\n");
		loop = loop +1;		
	}
	tempoModelo = (tempoModelo/(loop-1));
	tempoUsuario = (tempoUsuario/(loop-1));
	console.log("Tempo Modelo: "+tempoModelo+" segundos | Tempo Usuario: "+tempoUsuario+" segundos\n\n");
	return console.log('Testes de Corretude Realizado: OK\n\n');
}

exports.appDijkstra = function(){
	var loop = 1;
	var geradorDe = require('./auxiliary.js');
	var modeloAlgoritmo = require('./models.js');
	var userAlgoritmo = require('./userFiles.js');
	var tempoInicialModelo = 0;
	var tempoFinalModelo = 0
	var tempoModelo = 0;		
	var tempoInicialUsuario = 0;
	var tempoFinalUsuario = 0;
	var tempoUsuario = 0;
	var condicao = false;
	var qtdCaract = 0;
	var qtdRepet = 0;
	while(loop <= 100){//baseado no codeJam
		while(condicao!=true){
			qtdCaract = geradorDe.qtdCaracters();
			qtdRepet = geradorDe.qtdDeRepet();
			if((qtdCaract*qtdRepet)<=10000){
				condicao = true;
			}
		}
		var lista = geradorDe.geraCaracts(qtdCaract);
		console.log("Caso: "+loop+" | Quantidade de Caracteres: "+qtdCaract+" | Quantidade de Repetições dos Caracteres: "+qtdRepet+" | Caracteres: "+lista+"\n");
		tempoInicialModelo = new Date;
		var resultAvaliador = modeloAlgoritmo.modeloDijkstra(qtdCaract, qtdRepet, lista);
		tempoFinalModelo = new Date;
		tempoModelo = (tempoModelo + ((tempoFinalModelo-tempoInicialModelo)/1000));
		tempoInicialUsuario = new Date;
		var resultUser = userAlgoritmo.userDijkstra(qtdCaract, qtdRepet, lista);
		tempoFinalUsuario = new Date;
		tempoUsuario = (tempoUsuario + ((tempoFinalUsuario-tempoInicialUsuario)/1000));
		if(resultUser != resultAvaliador){
			console.log("Resutado esperado: "+resultAvaliador+" | Resutado obtido: "+resultUser+"\n");
			return console.log('Caso de Testes Falhou');
		}
		console.log("Resutado esperado: "+resultAvaliador+" | Resutado obtido: "+resultUser+"\n");
		condicao = false;
		loop = loop +1;		
	}
	tempoModelo = (tempoModelo/(loop-1));
	tempoUsuario = (tempoUsuario/(loop-1));
	console.log("Tempo Modelo: "+tempoModelo+" segundos | Tempo Usuario: "+tempoUsuario+" segundos\n\n");
	return console.log('Testes de Corretude Realizado: OK\n\n');
}