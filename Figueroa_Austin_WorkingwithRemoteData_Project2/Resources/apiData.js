var url = "http://api.reddit.com/r/gaming/";

// var retrieveCom = function(e){
	// var comWin = Ti.UI.createWindow({
		// backgroundColor: "#fff"
	// });
// 	
	// var comTable = Ti.UI.createTableView({
	// });
// 
	// var comheader = Ti.UI.createTableViewSection({
	// headerTitle: ""
	// });
// 	
	// //e.source.comment <-this is your array of comments
	// //you may need a for loop here	e.source.comment
		// var indentation = 0;
		// for(var n in e.source.comment[i]){
			// if(//e.souce.commenet[i].data.replies != ""){
				// // indentation ++;
			// }else{
				// //For in loop through comments 
		        // //make a tableViewRow
		        	// //title: body,
		        	// //indentationLevel: indentation;
// 		        
		        // //
		        // //set the title of tableViewRow to your comment
// 				
		// }
// 	
// 	
// 	
			// //if this comment has sub comments (check that the object has a value to the)
				// //make a tableViewRow
				// //set the title of tableViewRow to your comment
// 	
	// comWin.add(comTable);
	// navWin.openWindow(comWin);
// };


var showImg = function(e){
	console.log("This function ran");
	var Window = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	
	var img = Ti.UI.createImageView({
		image: e.source.picture
	});
	
	// var button = Ti.UI.createButton({
		// title: "Comments",
		// bottom: 25 ,
		// comment: e.source.comment
	// });
// 	
	// button.addEventListener("click", retrieveCom);
	//Window.add(button);
	//console.log(img);
	Window.add(img);
	navWin.openWindow(Window);
	
};

var success = function(){
	var replyData = JSON.parse(this.responseText);
	var posts = replyData.data.children;
	//console.log(posts);
	
	
	for(var i=0; i<posts.length; i++){
		var title = posts[i].data.title;
		var pic = posts[i].data.url;
		var ending = pic.substring((pic.length - 3), pic.length);
		var comment = posts[i].data.permalink;
	    //console.log(comment);
	   if (ending === "jpg" || ending === "gif" || ending === "png"){
	   
	}else{
		var pic =  posts[i].data.url + ".jpg";
		
	}
	var theRow = Ti.UI.createTableViewRow({
			title: title,
			picture: pic,
			comment: comment,
			font: {fontSize: 14, fontFamily: "Arial"},
			textAlign: "left",
		});
	
		apiheader.add(theRow);
		theRow.addEventListener("click", showImg);
	}
apiTable.setData([apiheader]);
};

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
