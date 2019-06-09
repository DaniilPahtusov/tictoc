var flag = true;
var endGameCheck = false;
var gamerStats = 0;
var computerStats = 0;
var Base = [
[0,0,0],
[0,0,0],
[0,0,0]]
var changedFlag = false;
var firstStep = 'gamer';
var n=1;
var n_i=1;
var winner;


function change(){
    if (changedFlag == true) {
    	alert ('Во время игры нельзя сменить сторону!');
    	return;
    }
    firstStep = 'computer';
	computerStep();
}

function myStep(Elemnt){
	if (endGameCheck == true){
		checkWinGame();
	}

	changedFlag = true;
	var i = Number(Elemnt.id);
	var ch = check(i);
	if (ch == false){
	    if (flag == true) {
	        Elemnt.innerHTML = "<img src='krestik.png' width='200' height='200'>";
  	        writeStep(i,'x');
	        flag = false;
        }
        else {
	        Elemnt.innerHTML = "<img src='zero.png' width='200' height='200'>";
            writeStep(i,'o');
	        flag = true;
        }
    }
    else {
	    alert('Данный ход невозможен, выберите другую клетку!');
		ch = false;
		return;
    }
  checkDraw();
  checkWinGame();
  computerStep();
}

function writeStep (n, symbol) {
	switch (n){
		case 1:
		Base[0][0] = symbol;
		break;
		case 2:
		Base[0][1] = symbol;
		break;
		case 3:
		Base[0][2] = symbol;
		break;
		case 4:
		Base[1][0] = symbol;
		break;
		case 5:
		Base[1][1] = symbol;
		break;
		case 6:
		Base[1][2] = symbol;
		break;
		case 7:
		Base[2][0] = symbol;
		break;
		case 8:
		Base[2][1] = symbol;
		break;
		case 9:
		Base[2][2] = symbol;
		break;
	}
}

function check(n) {
  switch (n){
		case 1:
		if (Base[0][0] == 0)
			return false;
		break;
		case 2:
		if (Base[0][1] == 0)
			return false;
		break;
		case 3:
		if (Base[0][2] == 0)
			return false;
		break;
		case 4:
		if (Base[1][0] == 0)
			return false;
		break;
		case 5:
		if (Base[1][1] == 0)
			return false;
		break;
		case 6:
		if (Base[1][2] == 0)
			return false;
		break;
		case 7:
		if (Base[2][0] == 0)
            return false;
        break;
		case 8:
		if (Base[2][1] == 0)
            return false;
        break;
		case 9:
		if (Base[2][2] == 0)
			return false;
		break;
		default:
		 return true;
	}
}

function computerStep() {
	changedFlag = true;
	checkDraw();
	if (endGameCheck == true){
		checkWinGame();
	}
     var min = 1;
     var max = 9;
     var checkEnd = checkEndGame();
     while(1){
     	if (checkEnd == true){
     		endGame();
            break;
     	}
     	var n = Math.floor(Math.random() *(max-min+1))+min;
     	var ch = check(n);
     	if (ch == false) {
      		var step = document.getElementById(n);
            if (flag == true) {
	            step.innerHTML = "<img src='krestik.png' width='200' height='200'>";
  	            writeStep(n,'x');
	            flag = false;
            }
            else {
	            step.innerHTML = "<img src='zero.png' width='200' height='200'>";
  	            writeStep(n,'o');             
	            flag = true;
            }
     		checkWinGame();
            break;
     	}
     	else 
     		continue;
    }
}

function endGame(name){
	alert('Игра окончена, победили ' + name);
	changedFlag = false;
    flag = true;
	return;
}

function checkEndGame(){
	for(var i=0;i<3;i++){
		for (var j=0;j<3;j++){
			if ((Base[i][j] == 'o') || (Base[i][j] == 'x')){
				continue;
			}
			else{
				return false;
			}
		}
	}
	return true;
}

function checkWinGame(){
	if (endGameCheck == true){
		throw "stop";
		return;
	}
	if ((Base[0][0] =='x' && Base[1][1]=='x' && Base[2][2]=='x') ||
		(Base[0][0] =='x' && Base[0][1]=='x' && Base[0][2]=='x') ||
		(Base[1][0] =='x' && Base[1][1]=='x' && Base[1][2]=='x') ||
		(Base[2][0] =='x' && Base[2][1]=='x' && Base[2][2]=='x') ||
		(Base[0][0] =='x' && Base[1][0]=='x' && Base[2][0]=='x') ||
		(Base[0][1]=='x' && Base[1][1]=='x' && Base[2][1]=='x') ||
		(Base[0][2]=='x' && Base[1][2]=='x' && Base[2][2]=='x') ||
		(Base[0][2]=='x' && Base[1][1]=='x' && Base[2][0]=='x')){
		endGame('Крестики');
	    endGameCheck = true;
	    if (firstStep == 'gamer'){
	    	gamerStats += 1;
	    	document.getElementById('gamer').innerHTML = gamerStats;
	    	winner = 'Игрок';
	    }
	    else{
	    	if (firstStep == 'computer'){
	    	computerStats += 1;
	    	document.getElementById('computer').innerHTML = gamerStats;
	    	winner = 'Компьютер';
	    }
	    }
	    throw "stop";
	    return true;
	}
	if ((Base[0][0]=='o' && Base[1][1]=='o' && Base[2][2]=='o') ||
		(Base[0][0]=='o' && Base[0][1]=='o' && Base[0][2]=='o') ||
		(Base[1][0]=='o' && Base[1][1]=='o' && Base[1][2]=='o') ||
		(Base[2][0]=='o' && Base[2][1]=='o' && Base[2][2]=='o') ||
		(Base[0][0]=='o' && Base[1][0]=='o' && Base[2][0]=='o') ||
		(Base[0][1]=='o' && Base[1][1]=='o' && Base[2][1]=='o') ||
		(Base[0][2]=='o' && Base[1][2]=='o' && Base[2][2]=='o') ||
		(Base[0][2]=='o' && Base[1][1]=='o' && Base[2][0]=='o')){
		endGame('Нолики');
	    endGameCheck = true;
	    if (firstStep == 'computer'){
	    	gamerStats += 1;
	    	document.getElementById('gamer').innerHTML = gamerStats;
	    	winner = 'Игрок';
	    }
	    else{
	    	if (firstStep == 'gamer'){
	    	computerStats += 1;
	    	document.getElementById('computer').innerHTML = computerStats;
	    	winner = 'Компьютер';
	    }
	    }
	    throw "stop";
	    return true;
	}
	return false;
}

function newGame(){
	firstStep = 'gamer';
	endGameCheck = false;
	changedFlag = false;
	flag = true;
	for (var i=0;i<3;i++){
		for (var j=0;j<3;j++){
			Base[i][j] = 0;
		}
	}
	for (i=1; i<10;i++)
	{
		document.getElementById(i).innerHTML='';
	}
	if (winner == undefined || winner == ''){
		return;
	}
    document.getElementById('t').innerHTML += '<br>Игра №' + n_i+ ':' + ' Победил ' + winner;
    n_i++;
    winner = '';
}



function newPart(){
	changedFlag = false;
	firstStep = 'gamer';
	endGameCheck = false;
	flag = true;
	n += 1;
	document.getElementById('t').innerHTML += '<br>Общий счёт игры: <br>Игрок:' + gamerStats + ' Компьютер:' + computerStats;
	if(gamerStats>computerStats){
	    document.getElementById('t').innerHTML +='<br>Победил Игрок!!!';
    }
    else{
    	if (computerStats>gamerStats){
    	    document.getElementById('t').innerHTML +='<br>Победил Компьютер!!!';
        }
        else {
        	if (computerStats == gamerStats){
        		document.getElementById('t').innerHTML += '<br>Ничья!!!';
        	}
        }
    }
	document.getElementById('t').innerHTML += '<br>Партия №' + n;
	document.getElementById('gamer').innerHTML = '';
	document.getElementById('computer').innerHTML = '';
	gamerStats = computerStats = 0;
	for (var i=0;i<3;i++){
		for (var j=0;j<3;j++){
			Base[i][j] = 0;
		}
	}
	for (i=1; i<10;i++)
	{
		document.getElementById(i).innerHTML='';
	}
}

function checkDraw(){
	var k = checkEndGame();
	var p = checkWinGame();
    if ((k == true) && (p == false)){
    	alert('Ничья');
    	document.getElementById('t').innerHTML += '<br>Игра №' + n_i+ ':' + ' Ничья ';
        n_i++;
        winner = '';
    	throw "stop";
	    return true;
    }
}