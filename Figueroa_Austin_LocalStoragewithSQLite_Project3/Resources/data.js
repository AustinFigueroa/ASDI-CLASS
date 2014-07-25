var ui = require("ui");

Ti.Database.install("Database/Database.sqlite", "statInfo");

var tblData = [];
var read = function(){
	var db = Ti.Database.open("statInfo");
	var dbRows = db.execute("SELECT id, name, health, mana, lvl FROM statTbl");
	while (dbRows.isValidRow()) {
		tblData.push({
			id: dbRows.fieldByName("id"),
			name: dbRows.fieldByName("name"),
			health: dbRows.fieldByName("health"),
			mana: dbRows.fieldByName("mana"),
			lvl: dbRows.fieldByName("lvl"),
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	ui.personalTbl(tblData);
};
exports.read = read;

var create = function(name, health, mana, lvl) {
	var db = Ti.Database.open("statInfo");
	db.execute("INSERT INTO statTbl (name, health, mana, lvl) VALUES ( ?, ?, ?, ?)", name, health, mana, lvl);
	var rowID= db.lastInsertRowId;
	db.close();
	tblData = [];
	ui.tabGroup.setActiveTab(ui.tab1);
};
exports.create = create;

var update = function (index, location){
	var db = Ti.Database.open("statInfo");
	db.execute("UPDATE statTbl SET name=?, health=?, mana=?, lvl=? WHERE id=?" , ui.nameField.value, ui.healthField.value, ui.manaField.value, ui.lvlField.value, ui.button.id);
	db.close();
	tblData = [];
	read();
	ui.tabGroup.setActiveTab(ui, tab1);
	ui.button.id = null;
	ui.button.edit = false;
	ui.button.title = "Add Personal Stats";
	ui.nameField.value = "";
	ui.healthField.value = "";
	ui.manaField.value = "";
	ui.lvlField.value = "";
	window.title = "Add Personal Stats";
	ui.tab2.title = "Add";
};
exports.update = update;

var del = function(id){
	var db = Ti.Database.open("statInfo");
	db.execute("DELETE FROM statTbl WHERE id=?", id);
	db.close();
	tblData = [];
	read();
};
exports.del = del;