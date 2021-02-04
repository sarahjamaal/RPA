// ----------------------------------------------------------------
//   CUSTOMIZED FUNCTIONS
// ----------------------------------------------------------------
function init_RegisterKeys() {
	ctx.setting( {
		"DownPaymentsForSupplier_MailTo": {
			key: ctx.cryptography.keys.none,
			comment: "Email",
			server: false
		}
	});
	ctx.setting( {
		"DownPaymentsForSupplier_OutputDirectory": {
			key: ctx.cryptography.keys.none,
			comment: "Output Directory",
			server: false
		}
	});

	ctx.setting( {
		"DownPaymentsForSupplier_SystemURL": {
			key: ctx.cryptography.keys.none,
			comment: "System URL",
			server: false
		}
	});
}

function setMSRegisterKeyValue(key, value) {
	var entry = ctx.settings[key];
	entry.value = value;
	entry.set(function (code, label, setting) {
		if (code !== e.error.OK) {
			ctx.log("Fail to persist result " + key, e.logIconType.Error);
		}
	});
}
			init_RegisterKeys();
			
	POPUPS.InitPopup.open();
	POPUPS.InitPopup.wait(function(ev){
		ctx.log("fsd");
	});
