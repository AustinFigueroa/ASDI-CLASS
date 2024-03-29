var tabGroup = Ti.UI.createTabGroup();

var tab1 = Ti.UI.createTab({
	icon: "Ks_nav_views.png",
	title: "Personal Data",
	window: win
});

var tab2 = Ti.UI.createTab({
	icon: "Ks_nav_ui.png",
	title: "Add",
	window: window
});

var tableData = Ti.UI.createTableView({
	backgroundColor: "#333",
	height: Ti.UI.FILL
});
 var personalTbl = function(personalData){
 	
 	var dataTable = [];
 	for(i in personalData) {
 		var tblRows = Ti.UI.createTableViewRow({
 			id: personalData[i].id,
 			width: Ti.UI.FILL, 
 			height: 75
 		});
 		var tblView = Ti.UI.createView({
 			layout: "vertical", 
 			left: 20,
 			top: 5,
 			height: Ti.UI.FILL, 
 			width: Ti.UI.FILL
 		});
 		var nameLabel = Ti.UI.createLabel({
 			text: "Name:  " + personalData[i].name, 
 			color: "#fff", 
 			width:Ti.UI.FILL,
 			font: {fontSize: 14, fontFamily: "Arial", fontColor: "#000"}
 		});
 		var healthLabel = Ti.UI.createLabel({
 			text: "Health:  " + personalData[i].health,
 			color: "#fff", 
 			width:Ti.UI.FILL,
 			font: {fontSize: 14, fontFamily: "Arial", fontColor: "#f00"}
 		});
 		var manaLabel = Ti.UI.createLabel({
 			text: "Mana:  " + personalData[i].mana, 
 			color: "#fff", 
 			width:Ti.UI.FILL,
 			font: {fontSize: 14, fontFamily: "Arial", fontColor: "#333"}
 		});
 		var lvlLabel = Ti.UI.createLabel({
 			text: "Level:  " + personalData[i].lvl, 
 			color: "#fff", 
 			width:Ti.UI.FILL,
 			font: {fontSize: 14, fontFamily: "Arial", fontColor: "#000"}
 		});
 		
 		tblView.add(nameLabel);
 		tblView.add(healthLabel);
 		tblView.add(manaLabel);
 		tblView.add(lvlLabel);
 		tblRows.add(tblView);
 		dataTable.push(tblRows);
 	}
 	tableData.setData(dataTable);
 };
 
 exports.tableData = tableData;
 exports.personalTbl = personalTbl;
 
 exports.nameLabel = Ti.UI.createLabel({
 	text: "Name",
 	font: {fontSize: 14, fontFamily: "Arial"},
 	color: "#fff",
 	left: 15,
 	top: 20,
 	textAlign: "left"
 });
 exports.nameField = Ti.UI.createTextField({
 	left: 15, right: 15, top: 2,
 	height: 30,
 	borderSize: 1,
 	borderColor: "gray",
 	font: {fontSize: 14, fontFamily: "Arial"},
 	paddingLeft: 5, paddingRight:5
 });
 exports.healthLabel = Ti.UI.createLabel({
 	text: "Health",
 	font: {fontSize: 14, fontFamily: "Arial"},
 	color: "#fff",
 	left: 15,
 	top: 20,
 	textAlign: "left"
 });
 exports.healthField = Ti.UI.createTextField({
 	left: 15, right: 15, top: 2,
 	height:30,
 	borderSize: 1,
 	borderColor: "gray",
 	font: {fontSize: 14, fontFamily: "Arial"},
 	paddingLeft: 5, paddingRight: 5
 });
 
exports.manaLabel = Ti.UI.createLabel({
 	text: "Mana",
 	font: {fontSize: 14, fontFamily: "Arial"},
 	color: "#fff",
 	left: 15,
 	top: 20,
 	textAlign: "left"
 });
 exports.manaField = Ti.UI.createTextField({
 	left: 15, right: 15, top: 2,
 	height:30,
 	borderSize: 1,
 	borderColor: "gray",
 	font: {fontSize: 14, fontFamily: "Arial"},
 	paddingLeft: 5, paddingRight: 5
 });
 exports.lvlLabel = Ti.UI.createLabel({
 	text: "Level",
 	font: {fontSize: 14, fontFamily: "Arial"},
 	color: "#fff",
 	left: 15,
 	top: 20,
 	textAlign: "left"
 });
 exports.lvlField = Ti.UI.createTextField({
 	left: 15, right: 15, top: 2,
 	height: 30,
 	borderSize: 1,
 	borderColor: "gray",
 	font: {fontSize: 14, fontFamily: "Arial"},
 	paddingLeft: 5, paddingRight: 5
 });
 
 exports.button = Ti.UI.createButton({
 	title: "Add Personal Stats",
 	height: 30, top: 30,
 	left: 15, right: 15,
 	backgroundColor: "#fff",
 	borderSize: 1,
 	borderColor:  "#000"
 });

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

exports.tabGroup = tabGroup;
exports.tab1 = tab1;
exports.tab2 = tab2;

/*
 * data.js is attempting to call ui.tabGroup from this file however you never created a tabGroup proptery on your exports here.
 */
tabGroup.open();