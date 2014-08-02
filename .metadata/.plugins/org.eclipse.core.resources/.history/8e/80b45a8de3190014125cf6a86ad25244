var url = "http://api.reddit.com/r/gaming/";

var showImg = function(e){
	var Window = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	
	var img = Ti.UI.createImageView({
		image: e.source.picture
	});
	
	Window.add(img);
	navWin.openWindow(Window);
	
};
Ti.Database.install("GameTbl.sqlite", "RedditGaming");

var tblData = [];
var success = function(){
var replyData = JSON.parse(this.responseText);
	var posts = replyData.data.children;

	for(var i=0; i<posts.length; i++){
		var title = posts[i].data.title;
		var pic = posts[i].data.url;
		var ending = pic.substring((pic.length - 3), pic.length);
		
	   if (ending === "jpg" || ending === "gif" || ending === "png"){
	   
	}else{
		var pic =  posts[i].data.url + ".jpg";
		
	}
	var theRow = Ti.UI.createTableViewRow({
			title: title,
			picture: pic,
			font: {fontSize: 14, fontFamily: "Arial"},
			textAlign: "left",
		});
	
		apiheader.add(theRow);
		theRow.addEventListener("click", showImg);
	}
apiTable.setData([apiheader]);

var db = Ti.Database.open("RedditGaming");
var dbRows = db.execute("SELECT id, info FROM gameTbl");
	while(dbRows.isValidRow()){
			var dbData = JSON.parse(dbRows.fieldByName("info"));
			console.log(dbData);
			dbRows.next();	
		}
dbRows.close();
db.close();

};
		
var del = function(id){
	var db = Ti.Database.open("RedditGaming");
	db.execute("DELETE FROM gameTbl WHERE id=?", id);
	db.close();
	tblData = [];
	read();
};

exports.del = del;

var database = require("database");

var error = function(e){
	alert("Something went wrong. The data you are trying to access cannot be found.");
};

var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});

client.open("GET",url);
client.send();

