var game1 = {
	"name": "Rayman 2 The Great Escape",
	"platform": "PlayStation 2",
	"genre": "Platform",
	"mode": "Single-player",
    "IGN": "9.6",
	"rating": function(){
		if(game1.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was 9.6 out of 10 through IGN Rating System.");
		}
	}
	// "gameStatus": "No",
	// "answer": function(){
		// if(game1.gameStatus === "Yes"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
	// }
};

var game2 = {
	"name": "Killzone",
	"platform": "PlayStation 2",
	"genre": "First-person shooter",
	"mode": "Single-player, multiplayer",
	"IGN": "7.5",
	"rating": function(){
		if(game2.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was 7.5 out of 10 through IGN Rating System.");
		}
	}
	// "gameStatus": "No",
	// "answer": function(){
		// if(game2.gameStatus === "Yes"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
	// }
};

var game3 = {
	"name": "Final Fantasy XII",
	"platform": "PlayStation 2",
	"genre": "Role-playing",
	"mode": "Single-player",
	"IGN": "9.5",
	"rating": function(){
		if(game3.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was 9.5 out of 10 through IGN Rating System.");
		}
	}
	// "gameStatus": "No",
	// "answer": function(){
		// if(game3.gameStatus === "Yes"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
	// }
};

var game4 = {
	"name": "Grand Theft Auto San Andreas",
	"platform": "PlayStation 2",
	"genre": "Action-adventure",
	"mode": "Single-player, multiplayer",
	"IGN": "9.9",
	"rating": function(){
		if(game4.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was 9.9 out of 10 through IGN Rating System.");
		}
	}
    // "gameStatus": "No",
	// "answer": function(){
		// if(game4.gameStatus === "Yes"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
	// }
};
var game5 = {
	"name": "Mortal Kombat Armageddon",
	"platform": "PlayStation 2",
	"genre": "Fighting",
	"mode": "1-8 players, online multiplayer",
	"IGN": "8.5",
	"rating": function(){
		if(game5.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was 8.5 out of 10 through IGN Rating System.");
		}
	}
	// "gameStatus": "No",
	// "answer": function(){
		// if(game5.gameStatus === "Yes"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
	// }
  };

var ps2Array = [game1, game2, game3, game4, game5];

for (var i=0, j=ps2Array.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: ps2Array[i].name + " " + ps2Array[i].platform,
		font: {fontSize: 14, fontFamily: "Arial"},
	});

	ps2Games.add(theRow);
	theRow.addEventListener("click", ps2Array[i].rating);
}


// for (var i=0, j=ps2Array.length; i<j; i++){
// 	
	// var theRow = Ti.UI.createTableViewRow({
		// title: ps2Array[i].name + " " + ps2Array[i].platform,
		// font: {fontSize: 14, fontFamily: "Arial"},
		// savedData: ps2Array[i].gameStatus,
		// savedAnswer: ps2Array[i].answer 
		// //property to save the gameStatus of this row
	// });
// 		
		// var openAnswer = function(){
			// theRow.addEventListener('click', function(e){
// 	
			  // var dialog = Ti.UI.createAlertDialog({
			    // cancel: 1,
			    // buttonNames: ['Yes', 'No', 'Cancel'],
			    // message: 'Did you beat this game?',
			    // row: this
			  // });
			  // dialog.show();
// 		
			  // dialog.addEventListener("click", function(e){
			  // if(this.buttonNames[e.index] === "Yes"){ //this.buttonNames[e.index] === "Yes"
			  	// this.row.savedData = "Yes";
			  // }else{ 
			  	// this.row.savedData = "No";
			  // }
			 		 // this.row.savedAnswer();
			// });
			// });	
	// };
	// ps2Games.add(theRow);
	// theRow.addEventListener("click", openAnswer);
// };


var game6 = new Object();
	game6.name = "Rayman Legends";
	game6.platform = "PlayStation 4";
	game6.genre = "Platform";
	game6.mode = "Single-player, co-op";
	game6.IGN = "9.5",
	game6.rating = function(){
		if(game6.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was 9.5 out of 10 through IGN Rating System.");
		}
	};
	// game6.gameStatus = "No",
	// game6.answer = function(){
		// if(game6.gameStatus === "No"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
// };

var game7 = new Object();
	game7.name = "Killzone Shadow Fall";
	game7.platform = "PlayStation 4";
	game7.genre = "First-person shooter";
	game7.mode = "Single-player, multiplayer";
	game7.IGN = "8.0",
	game7.rating = function(){
		if(game7.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was 8.0 out of 10 through IGN Rating System.");
		}
	};
	// game7.gameStatus = "No",
	// game7.answer = function(){
		// if(game7.gameStatus === "No"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
// };

	
var game8 = new Object();
	game8.name = "Final Fantasy XV";
	game8.platform = "PlayStation 4";
	game8.genre = "Action role-playing";
	game8.mode = "Single-player";
	game8.IGN = "RP",
	game8.rating = function(){
		if(game8.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was RP through IGN Rating System.");
		}
	};
	// game8.gameStatus = "No",
	// game8.answer = function(){
		// if(game8.gameStatus === "Yes"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
// };
	
var game9 = new Object();
	game9.name = "Grand Theft Auto V";
	game9.platform = "PlayStation 4";
	game9.genre = "Action-adventure";
	game9.mode = "Single-player, online multiplayer";
	game9.IGN = "10",
	game9.rating = function(){
		if(game9.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was 10 out of 10 through IGN Rating System.");
		}
	};
	// game9.gameStatus = "No",
	// game9.answer = function(){
		// if(game9.gameStatus === "Yes"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
// };
	
var game10 = new Object();
	game10.name = "Mortal Kombat X";
	game10.platform = "PlayStation 4";
	game10.genre = "Fighting";
	game10.mode = "Single-player, multiplayer";
	game10.IGN = "RP",
	game10.rating = function(){
		if(game10.IGN === "10"){
			alert("Wow! this game is perfect 10 out of 10, through IGN Rating System.");
				}else{
			alert("This game rating was RP, through IGN Rating System.");
		}
	};
	// game10.gameStatus = "No",
	// game10.answer = function(){
		// if(game10.gameStatus === "Yes"){
			// alert("You beat the game!");
		// }else{
				// alert("You didnt beat the game...");
		// }
// };

var ps4Array = [game6, game7, game8, game9, game10];

for (var i=0, j=ps4Array.length; i<j; i++){
	var theRow2 = Ti.UI.createTableViewRow({
		title: ps4Array[i].name + " " + ps4Array[i].platform,
		font: {fontSize: 14, fontFamily: "Arial"},
	});

	ps4Games.add(theRow2);
	theRow2.addEventListener("click", ps4Array[i].rating);
}

// for (var i=0, j=ps4Array.length; i<j; i++){
	// var theRow2 = Ti.UI.createTableViewRow({
		// title: ps4Array[i].name + " " + ps4Array[i].platform,
		// font: {fontSize: 14, fontFamily: "Arial"},
	    // savedData: ps4Array[i].gameStatus,
		// savedAnswer: ps4Array[i].answer 
		// //property to save the gameStatus of this row
	// });
// 		
		// var openAnswer2 = function(){
			// theRow2.addEventListener('click', function(e){
// 	
			  // var dialog = Ti.UI.createAlertDialog({
			    // cancel: 1,
			    // buttonNames: ['Yes', 'No', 'Cancel'],
			    // message: 'Did you beat this game?',
			    // row: this
			  // });
			  // dialog.show();
// 		
			  // dialog.addEventListener("click", function(e){
			  // if(this.buttonNames[e.index] === "Yes"){ //this.buttonNames[e.index] === "Yes"
			  	// this.row.savedData = "Yes";
			  // }else{ 
			  	// this.row.savedData = "No";
			  // }
			 		 // this.row.savedAnswer();
			// });
			// });	
	// };
	// ps4Games.add(theRow2);
	// theRow2.addEventListener("click", openAnswer2);
// 
// };
var tableSections = [ps2Games, ps4Games];

gamingTable.setData(tableSections);

