var Info = function(val1, val2) {
	this.title = val1;
	this.pic = val2;
   console.log(this.title);
   console.log(this.pic);
	var db = Ti.Database.open("RedditGaming");
    var rows = db.execute("INSERT INTO gameTbl (info) VALUES(?)", JSON.stringify(this));
	db.close();

};
exports.Object = Info; 


