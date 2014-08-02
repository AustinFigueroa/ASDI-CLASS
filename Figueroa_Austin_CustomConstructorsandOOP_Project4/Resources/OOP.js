var Forum = function(obj){
	this.title = obj.title;
	this.url = obj.url;
	
	var db = Ti.Database.open("RedditGaming");
	var rows = db.execute("INSERT INTO posts (info) VALUES(?)", JSON.stringify(this));
	db.close();
};

exports.Object = Forum;



