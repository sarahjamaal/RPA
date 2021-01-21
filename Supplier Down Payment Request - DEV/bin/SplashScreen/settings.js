﻿// This file is regenerated by Desktop Studio : modify it carefully !

popup = POPUPS.SplashScreen = POPUPS.popup({ SplashScreen: {
	template: e.popup.template.NoButton,
	url: "SplashScreen\\popup.html",
	CX: "700",
	CY: "380",
	X: e.popup.position.Center,
	Y: e.popup.position.Center,
	content: e.popup.content.Web,
	color: e.popup.color.None,
	XRelative: e.popup.position.None,
	YRelative: e.popup.position.None,
	display: e.popup.display.Undefined,
	XSlide: e.popup.position.None,
	title: "Supplier Down Payment Request",
	resizable: true,
	canClose: false
}});

GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		systray.addMenu("", "TestPopup", "Test popups");
		systray.addMenu("TestPopup", "SplashScreenOpen" , "Open SplashScreen", "", function(ev) {
			POPUPS.SplashScreen.open({ testMode: true });
		});
		systray.addMenu("TestPopup", "SplashScreenClose" , "Close SplashScreen", "", function(ev) {
			POPUPS.SplashScreen.close();
		});
	}
});

POPUPS.SplashScreen.onTest(function(popup) {	
	// TODO : add your tests here
});

popup.item({ container1: {
	type: e.item.type.container,
	auto: false,
	fluid: true,
	background: e.item.style.None,
	myClass: "container"
}});

popup.item({ row1: {
	type: e.item.type.row,
	auto: false,
	parent: "container1"
}});

popup.item({ item1: {
	type: e.item.type.item,
	textSize: e.item.textSize.None,
	parent: "row1",
	alignment: e.item.alignment.None,
	textTransform: e.item.textTransform.None,
	icon: e.item.icon.infoSign,
	value: "Introduction",
	auto: true,
	tooltipPlacement: e.item.side.none,
	badgeStyle: e.item.style.None,
	style: e.item.style.Grey,
	myClass: "sub-title"
}});

popup.item({ item2: {
	type: e.item.type.item,
	textSize: e.item.textSize.None,
	parent: "row1",
	alignment: e.item.alignment.Left,
	textTransform: e.item.textTransform.None,
	icon: e.item.icon.none,
	value: "SAP Intelligent RPA Content: Supplier Down Payment Request can automatically filter the Purchase Order by Category and Status, and then create and post the Down Payment Requests automatically based on the Purchase Order information. This can avoid manual work, reduce human errors, and avoid postponed delivery caused by forgotten to post down payment requests.",
	auto: true,
	tooltipPlacement: e.item.side.none,
	badgeStyle: e.item.style.None,
	style: e.item.style.Grey
}});

popup.item({ row2: {
	type: e.item.type.row,
	auto: false,
	parent: "container1"
}});

popup.item({ item3: {
	type: e.item.type.item,
	textSize: e.item.textSize.None,
	parent: "row2",
	alignment: e.item.alignment.None,
	textTransform: e.item.textTransform.None,
	icon: e.item.icon.warningSign,
	value: "Attentions",
	auto: true,
	tooltipPlacement: e.item.side.none,
	badgeStyle: e.item.style.None,
	style: e.item.style.Grey,
	myClass: "sub-title"
}});

popup.item({ item4: {
	type: e.item.type.item,
	textSize: e.item.textSize.None,
	parent: "row2",
	alignment: e.item.alignment.None,
	textTransform: e.item.textTransform.None,
	icon: e.item.icon.none,
	value: "For the bot to run smoothly:",
	auto: true,
	tooltipPlacement: e.item.side.none,
	badgeStyle: e.item.style.None,
	style: e.item.style.Grey,
	myStyle: "margin: 0px 8px 8px 0px;"
}});

popup.item({ item5: {
	type: e.item.type.item,
	textSize: e.item.textSize.None,
	parent: "row2",
	alignment: e.item.alignment.None,
	textTransform: e.item.textTransform.None,
	icon: e.item.icon.none,
	value: "- Do not resize or minimize the browser window before the bot execution finishes.",
	auto: true,
	tooltipPlacement: e.item.side.none,
	badgeStyle: e.item.style.None,
	style: e.item.style.Grey
}});

popup.item({ item6: {
	type: e.item.type.item,
	textSize: e.item.textSize.None,
	parent: "row2",
	alignment: e.item.alignment.None,
	textTransform: e.item.textTransform.None,
	icon: e.item.icon.none,
	value: "- Some options require that you have installed Microsoft Outlook and have a valid email account set up in your computer.",
	auto: true,
	tooltipPlacement: e.item.side.none,
	badgeStyle: e.item.style.None,
	style: e.item.style.Grey
}});

popup.item({ row3: {
	type: e.item.type.row,
	auto: false,
	parent: "container1"
}});

popup.item({ rememCheckbox: {
	type: e.item.type.checkbox,
	parent: "row3",
	label: "",
	inline: true,
	items: [
		{
			id: "ch1",
			value: "Do not show this window next time.",
			checked: false,
			disabled: false,
			style: e.item.style.None,
			myClass: "",
			myStyle: ""
		}
	],
	auto: true,
	style: e.item.style.Grey,
	size: e.item.size.Medium,
	myStyle: "margin: 8px 0 0 0px;"
}});

popup.item({ row4: {
	type: e.item.type.row,
	auto: false,
	parent: "container1"
}});

popup.item({ continueBtn: {
	type: e.item.type.button,
	parent: "row4",
	value: "Continue",
	tooltip: "",
	style: e.item.style.None,
	icon: e.item.icon.none,
	iconSide: e.item.side.left,
	badge: "",
	badgeStyle: e.item.style.None,
	size: e.item.size.Medium,
	close: false,
	submit: false,
	disabled: false,
	right: true,
	justified: false,
	fa: "",
	animated: false,
	pulse: false,
	auto: true,
	tooltipPlacement: e.item.side.none,
	iconStyle: e.item.style.None,
	myClass: "continueBtn"
}});
