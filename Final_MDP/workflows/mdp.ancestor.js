
// ----------------------------------------------------------------
//   Test menu for scenario MDP 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'MDP', 'Test MDP', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.MDP.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario MDP Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: MDP
// ----------------------------------------------------------------
GLOBAL.scenario({ MDP: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	// Initialize Loop counters
	sc.localData.Startloop = 0;
	
	sc.step(GLOBAL.steps.InitExcel, GLOBAL.steps.Start_Logon);
	sc.step(GLOBAL.steps.Start_Logon, GLOBAL.steps.pLogon_management, 'Default');
	sc.step(GLOBAL.steps.Start_Logon, GLOBAL.steps.pHome_management, 'Home');
	sc.step(GLOBAL.steps.pLogon_management, GLOBAL.steps.pHome_management);
	sc.step(GLOBAL.steps.pHome_management, GLOBAL.steps.pMonitorPurchaseOrde_);
	sc.step(GLOBAL.steps.pMonitorPurchaseOrde_, GLOBAL.steps.Start_loop);
	sc.step(GLOBAL.steps.Start_loop, GLOBAL.steps.InitializeLoop);
	sc.step(GLOBAL.steps.InitializeLoop, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.InitializeLoop, GLOBAL.steps.Exit_loop);
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Exit_loop, GLOBAL.steps.TogglePO);
	sc.step(GLOBAL.steps.TogglePO, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.TogglePO, GLOBAL.steps.AfterPressingCreate);
	sc.step(GLOBAL.steps.AfterPressingCreate, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.AfterPressingCreate, GLOBAL.steps.pManageSupplierDown_m);
	sc.step(GLOBAL.steps.pManageSupplierDown_m, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.pManageSupplierDown_m, GLOBAL.steps.ProcessDP);
	sc.step(GLOBAL.steps.ProcessDP, GLOBAL.steps.Loops_to_the_start_bl, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.ProcessDP, GLOBAL.steps.Loops_to_the_start_bl);
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.Start_loop, 'NEXT_LOOP');
	sc.step(GLOBAL.steps.Loops_to_the_start_bl, GLOBAL.steps.FinalizeLoop);
	sc.step(GLOBAL.steps.FinalizeLoop, GLOBAL.steps.Close_Logon);
	sc.step(GLOBAL.steps.Close_Logon, null);
}}, ctx.dataManagers.rootData).setId('d3f1350d-7c8a-4332-b476-b7e8844e7409') ;

// ----------------------------------------------------------------
//   Step: InitExcel
// ----------------------------------------------------------------
GLOBAL.step({ InitExcel: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', 'a974f95b-da12-4606-8034-d0e17e2b4169') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Start_Logon
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_Logon
// ----------------------------------------------------------------
GLOBAL.step({ Start_Logon: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', '867602c5-4b7b-490d-90ff-69f811b71a77') ;
	// Starts an application.
	Logon.start();
	// Wait until the Page loads
	Logon.pLogon.wait(function(ev) {
		sc.endStep('Default'); // pLogon management
		return;
	});
	// Wait until the Page loads
	Logon.pHome.wait(function(ev) {
		sc.endStep('Home'); // pHome management
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pLogon_management
// ----------------------------------------------------------------
GLOBAL.step({ pLogon_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', '01e4f930-72bb-426a-8915-89de0cbc4949') ;
	// Wait until the Page loads
	Logon.pLogon.wait(function(ev) {
		Logon.pLogon.iUser.set('mganainy');
		Logon.pLogon.iPass.set('123456789');
		Logon.pLogon.btnLogOn.click();
		sc.endStep(); // pHome_management
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pHome_management
// ----------------------------------------------------------------
GLOBAL.step({ pHome_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', '7bd8f70d-d0a6-443d-984d-1a166e830c9e') ;
	// Wait until the Page loads
	Logon.pHome.wait(function(ev) {
		Logon.pHome.oBODY.wait(function(ev) {
			Logon.pHome.oMyHome.wait(function(ev) {
				Logon.pHome.oTile.wait(function(ev) {
					Logon.pHome.oTile.click();
					sc.endStep(); // pMonitorPurchaseOrde_
					return;
				}, 0, 10000);
			}, 0, 10000);
		}, 0, 10000);
	});
}});

// ----------------------------------------------------------------
//   Step: pMonitorPurchaseOrde_
// ----------------------------------------------------------------
GLOBAL.step({ pMonitorPurchaseOrde_: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', '81e446da-2b94-4dc8-8706-0b30c59bc782') ;
	// Wait until the Page loads
	Logon.pMonitorPurchaseOrde.wait(function(ev) {
		Logon.pMonitorPurchaseOrde.oBODY.wait(function(ev) {
			Logon.pMonitorPurchaseOrde.oFilterBar.wait(function(ev) {
				Logon.pMonitorPurchaseOrde.oFilterDisplayCurrency.wait(function(ev) {
					Logon.pMonitorPurchaseOrde.oBODY.wait(function(ev) {
						sc.endStep(); // Start_loop
						return;
					}, 0, 10000);
				}, 0, 10000);
			}, 0, 10000);
		}, 0, 10000);
	});
}});

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
GLOBAL.step({ Start_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('MDP', '640aa273-2263-44c2-ad8b-cefaa6be44ea') ;
	// Starting instruction for a loop.
	if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
	sc.endStep(); // InitializeLoop
	return;
}});

// ----------------------------------------------------------------
//   Step: InitializeLoop
// ----------------------------------------------------------------
GLOBAL.step({ InitializeLoop: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', 'bae03d60-4ed7-4da4-941c-1a9c7241c5b8') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Exit_loop
	return;
}});

// ----------------------------------------------------------------
//   Step: Exit_loop
// ----------------------------------------------------------------
GLOBAL.step({ Exit_loop: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('MDP', 'c2636cb7-0abe-458f-ab62-8b1f18a27e70') ;
	// Test block to exit from a loop.
	if (true)
	{
		sc.localData.Startloop = -1 ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // TogglePO
	return;
}});

// ----------------------------------------------------------------
//   Step: TogglePO
// ----------------------------------------------------------------
GLOBAL.step({ TogglePO: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', '4b66bdba-b102-4b84-a375-d1925441a6de') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // AfterPressingCreate
	return;
}});

// ----------------------------------------------------------------
//   Step: AfterPressingCreate
// ----------------------------------------------------------------
GLOBAL.step({ AfterPressingCreate: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', '5625398f-c362-4986-a2ce-c8725f73a012') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // pManageSupplierDown_m
	return;
}});

// ----------------------------------------------------------------
//   Step: pManageSupplierDown_m
// ----------------------------------------------------------------
GLOBAL.step({ pManageSupplierDown_m: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', '5a670344-e8f5-415f-a32d-36e1bfda05ae') ;
	// Wait until the Page loads
	Logon.pManageSupplierDown.wait(function(ev) {
		Logon.pManageSupplierDown.oBODY.wait(function(ev) {
			Logon.pManageSupplierDown.oItemsPanel.wait(function(ev) {
				Logon.pManageSupplierDown.oItemsHeader.wait(function(ev) {
					Logon.pManageSupplierDown.oJournalEntryDate.wait(function(ev) {
						Logon.pManageSupplierDown.oBaseLineDate.wait(function(ev) {
							Logon.pManageSupplierDown.oAmountField.wait(function(ev) {
								Logon.pManageSupplierDown.oSucessMessage.wait(function(ev) {
									Logon.pManageSupplierDown.btSuccessGoBack.wait(function(ev) {
										sc.endStep(); // ProcessDP
										return;
									}, 0, 10000);
								}, 0, 10000);
							}, 0, 10000);
						}, 0, 10000);
					}, 0, 10000);
				}, 0, 10000);
			}, 0, 10000);
		}, 0, 10000);
	});
}});

// ----------------------------------------------------------------
//   Step: ProcessDP
// ----------------------------------------------------------------
GLOBAL.step({ ProcessDP: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', 'c4a6293d-5b9a-4ae7-a3b6-709894a6e415') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Loops_to_the_start_bl
	return;
}});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
GLOBAL.step({ Loops_to_the_start_bl: function(ev, sc, st) {
	var rootData = sc.data;
	
	ctx.workflow('MDP', '4e3c0fae-412b-4431-9d70-f3e04fe0cdfb') ;
	// Loops to the start block.
	if (sc.localData.Startloop != -1)
	{
		sc.localData.Startloop++ ;
		sc.endStep('NEXT_LOOP');
		return ;
	}
	sc.endStep(); // FinalizeLoop
	return;
}});

// ----------------------------------------------------------------
//   Step: FinalizeLoop
// ----------------------------------------------------------------
GLOBAL.step({ FinalizeLoop: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', 'e68848e6-d9a3-47fb-8c8e-7dbf2bad625a') ;
	// Describe functionality to be implemented in JavaScript later in the project.
	sc.endStep(); // Close_Logon
	return;
}});

// ----------------------------------------------------------------
//   Step: Close_Logon
// ----------------------------------------------------------------
GLOBAL.step({ Close_Logon: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('MDP', '89ba5cd8-aab0-4f83-a872-539f8c954254') ;
	// Closes a running application.
	Logon.close();
	sc.endStep(); // end Scenario
	return;
}});
