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

	ctx.setting( {
		"DownPaymentsForSupplier_Splash": {
			key: ctx.cryptography.keys.none,
			comment: "Splash",
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
// ----------------------------------------------------------------
//   Test menu for scenario DownPaymentRequestsforSuppliers 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'DownPaymentRequestsforSuppliers', 'Test DownPaymentRequestsforSuppliers', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			init_RegisterKeys();
			GLOBAL.scenarios.DownPaymentRequestsforSuppliers.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario DownPaymentRequestsforSuppliers Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: DownPaymentRequestsforSuppliers
// ----------------------------------------------------------------
GLOBAL.scenario({ DownPaymentRequestsforSuppliers: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Init, GLOBAL.steps.FetchVariables);
	sc.step(GLOBAL.steps.FetchVariables, GLOBAL.steps.Open_popup);
	sc.step(GLOBAL.steps.Open_popup, GLOBAL.steps.Open_Monitor_Page);
	sc.step(GLOBAL.steps.Open_Monitor_Page, null);
}}, ctx.dataManagers.rootData).setId('cf1eb608-593e-4d09-89b5-3ba4672a690a') ;

// ----------------------------------------------------------------
//   Step: Init
// ----------------------------------------------------------------
GLOBAL.step({ Init: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('DownPaymentRequestsforSuppliers', '0a61e33d-3dd1-4aea-bb18-f6e99300364b') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // FetchVariables
	return;
}});

// ----------------------------------------------------------------
//   Step: FetchVariables
// ----------------------------------------------------------------
GLOBAL.step({ FetchVariables: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('DownPaymentRequestsforSuppliers', 'f193ff41-d34e-4c1d-a75b-d60383544ac5') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Open_popup
	return;
}});

// ----------------------------------------------------------------
//   Step: Open_popup
// ----------------------------------------------------------------
GLOBAL.step({ Open_popup: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('DownPaymentRequestsforSuppliers', 'cca6e888-ad7a-4e13-a8a7-7e5aac2bcca8') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Open_Monitor_Page
	return;
}});

// ----------------------------------------------------------------
//   Step: Open_Monitor_Page
// ----------------------------------------------------------------
GLOBAL.step({ Open_Monitor_Page: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('DownPaymentRequestsforSuppliers', '79e7be5f-8298-4e40-9d48-40b4851dd2fc') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // end Scenario
	return;
}});
