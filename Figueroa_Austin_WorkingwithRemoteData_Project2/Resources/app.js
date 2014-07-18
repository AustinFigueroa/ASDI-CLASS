Ti.UI.setBackgroundColor("#fff");

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var data = require("apiData");

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

var scroll = Ti.UI.createScrollView({
	height: pHeight,
	layout: "vertical"
});

win.add(apiTable);

navWin.open();