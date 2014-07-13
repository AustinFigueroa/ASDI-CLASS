// app.js

Ti.UI.setBackgroundColor("#fff");

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow({
	title: "Relive your favorite games.",
	backgroundColor: "#fff"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: win,
});

var gamingTable = Ti.UI.createTableView({
});

if(Ti.Platform.name ==="iPhoneOS"){
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var ps2Games = Ti.UI.createTableViewSection({
	headerTitle: "PS2 Games"
});

var ps4Games = Ti.UI.createTableViewSection({
	headerTitle: "PS4 Games"
});

var loadData = require("gameData");

win.add(gamingTable);
navWin.open();


// gameData.js

var game1 = {
	"name": "Rayman 2 The Great Escape",
	"platform": "PlayStation 2",
	"genre": "Platform",
	"mode": "Single-player",
	"gameCompleted" = true,
	"answer": function(){
		if(game1.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};

var game2 = {
	"name": "Killzone",
	"platform": "PlayStation 2",
	"genre": "First-person shooter,
	"mode": "Single-player, multiplayer",
	"gameCompleted" = true,
	"answer": function(){
		if(game2.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};

var game3 = {
	"name": "Final Fantasy XII",
	"platform": "PlayStation 2",
	"genre": "Role-playing",
	"mode": "Single-player",
	"gameCompleted" = true,
	"answer": function(){
		if(game3.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};
var game4 = {
	"name": "Grand Theft Auto San Andreas",
	"platform": "PlayStation 2",
	"genre": "Action-adventure",
	"mode": "Single-player, multiplayer",
	"gameCompleted" = true,
	"answer": function(){
		if(game4.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};

var game5 = {
	"name": "Mortal Kombat Armageddon",
	"platform": "PlayStation 2",
	"genre": "Fighting",
	"mode": "1-8 players, online multiplayer",
	"gameCompleted" = true,
	"answer": function(){
		if(game5.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};

var ps2Array = [game1, game2, game3, game4, game5];

for (var i=0, j=ps2Array.length; i<j; i++){
	
	var theRow = Ti.UI.createTableViewRow({
		title: ps2Array[i].name + " " + ps2Array[i].platform,
		font: {fontSize: 14, fontFamily: "Arial"}
	});
		
		var openAnswer = function(){
				alert(ps2Array[i].answer);
		};
	
	ps2Games.add(theRow);
	theRow.addEventListener("click", openAnswer);
}


var game6 = new Object();
	game6.name = "Rayman Legends";
	game6.platform = "PlayStation 4";
	game6.genre = "Platform";
	game6.mode = "Single-player, co-op";
	game6.gameCompleted = true,
	game6.answer = function(){
		if(game6.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};

var game7 = new Object();
	game7.name = "Killzone Shadow Fall";
	game7.platform = "PlayStation 4";
	game7.genre = "First-person shooter";
	game7.mode = "Single-player, multiplayer";
	game7.gameCompleted = true,
	game7.answer = function(){
		if(game7.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};
	
var game8 = new Object();
	game8.name = "Final Fantasy XV";
	game8.platform = "PlayStation 4";
	game8.genre = "Action role-playing";
	game8.mode = "Single-player";
	game8.gameCompleted = true,
	game8.answer = function(){
		if(game8.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};
	
var game9 = new Object();
	game9.name = "Grand Theft Auto V";
	game9.platform = "PlayStation 4";
	game9.genre = "Action-adventure";
	game9.mode = "Single-player, online multiplayer";
	game9.gameCompleted = true,
	game9.answer = function(){
		if(game9.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};
	
var game10 = new Object();
	game10.name = "Mortal Kombat X";
	game10.platform = "PlayStation 4";
	game10.genre = "Fighting";
	game10.mode = "Single-player, multiplayer";
	game10.gameCompleted = true,
	game10.answer = function(){
		if(game10.gameCompleted === true){
			alert("You beat the game!");
		}else{
				alert("You didnt beat the game...");
		}
	}
};

var ps4Array = [game6, game7, game8, game9, game10];

for (var i=0, j=ps4Array.length; i<j; i++){
	var theRow2 = Ti.UI.createTableViewRow({
		title: ps4Array[i].name + " " + ps4Array[i].platform,
		font: {fontSize: 14, fontFamily: "Arial"}
	});
		var openanswer2 = function(){
				alert(ps4Array[i].answer);
		};
	ps4Games.add(theRow2);
	theRow2.addEventListener("click", openanswer2);
}

var tableSections = [ps2Games, ps4Games];

gameingTable.setData(tableSections);

