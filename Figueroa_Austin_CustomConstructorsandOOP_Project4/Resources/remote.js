var url = "http://api.reddit.com/r/gaming/";

var showImg = function(e){
	//console.log("This function ran");
	var Window = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	
	var img = Ti.UI.createImageView({
		image: e.source.picture
	});
	
	Window.add(img);
	navWin.openWindow(Window);
	
};
var tblData = [];

var success = function(){
   alert("Your API data was found.");
   //console.log(this.responseText);
   Ti.Database.install("GameTbl.sqlite","RedditGaming");
   
   var replyData = JSON.parse(this.responseText);
   var posts = replyData.data.children;
   //console.log(posts);
   
   for(var i=0; i<posts.length; i++){
   		var title = posts[i].data.title;
		var pic = posts[i].data.url;
		var ending = pic.substring((pic.length - 3), pic.length);
		if (ending === "jpg" || ending === "gif" || ending === "png"){
			var gameInfo = new OOP.Object(title, pic);
		}else{
			var pic =  posts[i].data.url + ".jpg";
			var gameInfo = new OOP.Object(title, pic);
		}	
	};
	read();
};


	

var error = function(e){
	read();
	alert("Something went wrong. The data you are trying to access cannot be found.");
};

var read = function(){
	var db = Ti.Database.open("RedditGaming"); //this is just your db. it's the whole thing, not each individual row.
	var dbRows = db.execute("SELECT id, info FROM gameTbl"); //This gets the data from your database
	//take a look at what dbRows contains -> console.log(dbRows);
	//note that dbRows returns what looks like an object (but remember it's been stringified, you need to parse it back as an object) -> JSON.parse(//your object here);
	while (dbRows.isValidRow()) {
	
	var theRow = Ti.UI.createTableViewRow({
			title: db.title, //db is your database so db.title isn't going to return anything because your data lives inside a table within your db and in the table it's inside a column. This is where dbRows comes into play.
			picture: db.url, //same as above ^
			font: {fontSize: 14, fontFamily: "Arial"},
			textAlign: "left",
		});
	console.log(theRow.picture);
		apiheader.add(theRow);
		theRow.addEventListener('click', function(e){
			var dialog = Ti.UI.createAlertDialog({
			    cancel: 1,
			    buttonNames: ['Open', 'Delete', 'Cancel'],
			    message: 'Do you wish to open or delete?',
			    row: this
			  });
			  dialog.show();
			  
			dialog.addEventListener("click", function(evt){
			   if(this.buttonNames[e.index] === "Open"){ 
			  	
		        showImg();
			  }else{ 
			  	var confirmDelete = Ti.UI.createAlertDialog({
				cancel: 1,
				buttonNames: ["Ok", "Cancel"],
				message: "Delete this entry?",
				title:"Delete this entry?"
			});
			  confirmDelete.addEventListener("click",function(evt2){
				if (evt2.index === 0){
					OOP.del(button.id);
				}
			});
			confirmDelete.show();
		}
	dialog.show();
});
	});
apiTable.setData([apiheader]);
};
};
var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});

var del = function(e){
	var db = Ti.Database.open("RedditGaming");
		db.execute("DELETE FROM gameTbl WHERE id=?", id);
		db.close();
};


client.open("GET",url);
client.send();