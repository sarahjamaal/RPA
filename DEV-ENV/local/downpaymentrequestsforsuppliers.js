
// ----------------------------------------------------------------
//   Test menu for scenario DownPaymentRequestsforSuppliers 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'DownPaymentRequestsforSuppliers', 'Test DownPaymentRequestsforSuppliers', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
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
	sc.step(GLOBAL.steps.Test);
}}, ctx.dataManagers.rootData).setId('46f14be6-3847-4501-93c4-b7a53d9a9a44') ;

// ----------------------------------------------------------------
//   Step: Test
// ----------------------------------------------------------------
GLOBAL.step({ Test: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('DownPaymentRequestsforSuppliers', '7956ffc0-5df8-4470-9431-11e0bfc37994') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	POPUPS.myPopup.open() ;
	POPUPS.myPopup.waitResult(function(ev) 
{
	ctx.log("rdtrdg");
});
	sc.endStep(); // end Scenario
	return;
}});
