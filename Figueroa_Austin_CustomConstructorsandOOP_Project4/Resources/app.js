Ti.UI.setBackgroundColor("#fff");

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var remote = require("remote");
var database = require("database");
var OOP = require("OOP");

var win = Ti.UI.createWindow({
	title:"Reddit Gaming",
	backgroundColor: "#fff",
	fullscreen: true,
	layout: "vertical"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: win,
});

var apiTable = Ti.UI.createTableView({
});

var apiheader = Ti.UI.createTableViewSection({
	headerTitle: ""
});


win.add(apiTable);

navWin.open();

