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

