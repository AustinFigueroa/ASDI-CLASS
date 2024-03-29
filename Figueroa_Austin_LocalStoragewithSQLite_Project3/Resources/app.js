Ti.UI.setBackgroundColor("#fff");

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow({
	title: "Personal Stats",
	backgroundColor: "#333",
	layout: "vertical"
});

var window = Ti.UI.createWindow({
	title: "Add New Person Stats",
	backgroundColor: "#333",
	layout: "vertical"
});

var ui = require ("ui");
var data = require("data");
data.read();

ui.button.addEventListener("click", function(e){
	if(ui.button.edit != true) {
		alert("Setup Data!!");
		var newName = ui.nameField.value;
		var newHealth = ui.healthField.value;
		var newMana = ui.manaField.value;
		var newLvl = ui.lvlField.value;
		ui.nameField.value = "";
		ui.healthField.value = "";
		ui.manaField.value = "";
		ui.lvlField.value = "";
		ui.nameField.blur();
		ui.healthField.blur();
		ui.manaField.blur();
		ui.lvlField.blur();
		data.create(newName, newHealth, newMana, newLvl);
		data.read();
	} else {
		ui.tableData.removeAllChildren();
		data.update(ui.button.index, ui.button.location);
	}
});

ui.tableData.addEventListener("click", function(e){
	var dialog = Ti.UI.createAlertDialog({
		cancel: 2,
		buttonNames: ["Update", "Delete", "Cancel"],
		message: "Edit Personal Stats",
		title: "Edit Personal Stats"
	});
	dialog.addEventListener("click", function(evt){
		if (evt.index === 0) {
			for (i in e.row.children){
				var views = e.row.children[i];
				ui.nameField.value = views.children[0].text;
				ui.healthField.value = views.children[1].text;
				ui.manaField.value = views.children[2].text;
				ui.lvlField.value = views.children[3].text;
			}
			ui.button.title = "Update Personal Stats";
			ui.button.id = e.row.id;
			ui.button.edit = true;
			ui.button.index = e.index;
			window.title = "Update Personal Data";
			ui.tab2.title = "Update";
			ui.tabGroup.setActiveTab(ui.tab2);
		}
		if (evt.index === 1) {
			var confirmDelete = Ti.UI.createAlertDialog({
				cancel: 1,
				buttonNames: ["Ok", "Cancel"],
				message: "Delete these Personal Stats?",
				title:"Delete Personal Stats"
			});
			confirmDelete.addEventListener("click",function(evt2){
				if (evt2.index === 0){
					ui.button.id = e.row.id;
					data.del(ui.button.id);
				}
			});
			confirmDelete.show();
		}
	});
	dialog.show();
});

win.add(ui.tableData);

window.add(ui.nameLabel);
window.add(ui.nameField);
window.add(ui.healthLabel);
window.add(ui.healthField);
window.add(ui.manaLabel);
window.add(ui.manaField);
window.add(ui.lvlLabel);
window.add(ui.lvlField);
window.add(ui.button);