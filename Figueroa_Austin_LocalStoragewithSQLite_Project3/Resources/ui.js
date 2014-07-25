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
	backgroundColor: "#fff",
	height: Ti.UI.FILL
});
 var personalTbl = function(personalData){
 	
 	var dataTable = [];
 	for(i in personalData) {
 		var tblRows = Ti.UI.createTableViewRow({
 			id: personalData[i].id,
 			width: Ti.UI.FILL, 
 			height: "75dp"
 		});
 		var tblView = Ti.UI.createView({
 			layout: "vertical", 
 			left: "15dp",
 			top: "5dp",
 			height: Ti.UI.FILL, 
 			width: Ti.UI.FILL
 		});
 		var nameLabel = Ti.UI.createLabel({
 			text: personalData[i].name, 
 			width:Ti.UI.FILL,
 			font: {fontSize: "14sp", fontFamily: "Arial", fontColor: "#000"}
 		});
 		var healthLabel = Ti.UI.createLabel({
 			text: personalData[i].health, 
 			width:Ti.UI.FILL,
 			font: {fontSize: "14sp", fontFamily: "Arial", fontColor: "#f00"}
 		});
 		var manaLabel = Ti.UI.createLabel({
 			text: personalData[i].mana, 
 			width:Ti.UI.FILL,
 			font: {fontSize: "14sp", fontFamily: "Arial", fontColor: "#333"}
 		});
 		var lvlLabel = Ti.UI.createLabel({
 			text: personalData[i].lvl, 
 			width:Ti.UI.FILL,
 			font: {fontSize: "14sp", fontFamily: "Arial", fontColor: "#000"}
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
 	font: {fontSize: "14sp", fontFamily: "Arial"},
 	left: "15dp",
 	top: "30dp",
 	textAlign: "left"
 });
 exports.nameField = Ti.UI.createTextField({
 	left: "15dp", right: "15dp", top: "3dp",
 	height:"30dp",
 	borderSize: "1dp",
 	borderColor: "gray",
 	font: {fontSize: "14sp", fontFamily: "Arial"},
 	paddingLeft: "5dp", paddingRight:"5dp"
 });
 exports.healthLabel = Ti.UI.createLabel({
 	text: "Health",
 	font: {fontSize: "14sp", fontFamily: "Arial"},
 	left: "15dp",
 	top: "30dp",
 	textAlign: "left"
 });
 exports.healthField = Ti.UI.createTextField({
 	left: "15dp", right: "15dp", top: "3dp",
 	height:"30dp",
 	borderSize: "1dp",
 	borderColor: "gray",
 	font: {fontSize: "14sp", fontFamily: "Arial"},
 	paddingLeft: "5dp", paddingRight:"5dp"
 });
 
exports.manaLabel = Ti.UI.createLabel({
 	text: "Mana",
 	font: {fontSize: "14sp", fontFamily: "Arial"},
 	left: "15dp",
 	top: "30dp",
 	textAlign: "left"
 });
 exports.manaField = Ti.UI.createTextField({
 	left: "15dp", right: "15dp", top: "3dp",
 	height:"30dp",
 	borderSize: "1dp",
 	borderColor: "gray",
 	font: {fontSize: "14sp", fontFamily: "Arial"},
 	paddingLeft: "5dp", paddingRight:"5dp"
 });
 exports.lvlLabel = Ti.UI.createLabel({
 	text: "Lvl",
 	font: {fontSize: "14sp", fontFamily: "Arial"},
 	left: "15dp",
 	top: "30dp",
 	textAlign: "left"
 });
 exports.lvlField = Ti.UI.createTextField({
 	left: "15dp", right: "15dp", top: "3dp",
 	height:"30dp",
 	borderSize: "1dp",
 	borderColor: "gray",
 	font: {fontSize: "14sp", fontFamily: "Arial"},
 	paddingLeft: "5dp", paddingRight:"5dp"
 });
 
 exports.button = Ti.UI.createButton({
 	title: "Add Personal Stats",
 	height: "30dp", top: "30dp",
 	left: "15dp", right: "15dp",
 	backgroundColor:  "#f3f3f3"
 });

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

/*
 * data.js is attempting to call ui.tabGroup from this file however you never created a tabGroup proptery on your exports here.
 */

tabGroup.open();
