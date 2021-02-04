//--------------------SAPUI5-----------------
var sap = {}
var getPurchaseOrderAndPriceFunction = function getPurchaseOrderAndPrice(tableId) {
    var t = sap.ui.getCore().byId(tableId);
    console.log(t);
    var poItems = [];
    var rows = t.getBinding("rows").getContexts(0, t.getTotalSize());
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var o = row.getObject();
        poItems.push([o.PurchaseOrder, o.DownPaymentPercentageOfTotAmt]);
    }
    return poItems;
}
var setCB = function setCB(cbId, value) {
    console.log(cbId);
    var filterComp = sap.ui.getCore().byId(cbId);
    console.log(filterComp);
    var allSelectableItems = filterComp.getItems();
    console.log(allSelectableItems);
    var selectedItems = [];
    for (var j = 0; j < allSelectableItems.length; j++) {
        var selectableItem = allSelectableItems[j];
        if (selectableItem.getText() == value) {
            selectedItems.push(selectableItem);
            break;
        }
    }
    filterComp.setSelectedItems(selectedItems);
    filterComp.fireSelectionChange();
}

var isTableBusyFunction = function isTableBusy(tableId) {
    var t = sap.ui.getCore().byId(tableId);
    return t.isBusy();
}

var setFirstVisibleRowFunction = function setFirstVisibleRow(tableId, rowIndex) {
    var t = sap.ui.getCore().byId(tableId);
    t.setFirstVisibleRow(rowIndex);
}

var toggleTableRowFunction = function toggleTableRow(tableId, rowIndex) {
    var t = sap.ui.getCore().byId(tableId);
    if (t.getPlugins && t.getPlugins() && t.getPlugins().length > 0) {
        var plugin = t.getPlugins()[0];
        plugin.setSelectedIndex(rowIndex);
    } else {
        t.setSelectedIndex(rowIndex);
    }

}

function arrayIndexOf(arrayObj, obj) {
    for (var i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i] == obj) {
            return i;
        }
    }
    return -1;
}

function fioriFirePress(element) {
    var id = element.scriptItem("id");
    var script = '(function(){sap.ui.getCore().byId("' + id + '").firePress();})()';
    element.page.evalScript(script);

}

function setElementValue(element, value) {
    var id = element.scriptItem("id");
    var script = '(function(){sap.ui.getCore().byId("' + id + '").setValue("' + value + '");})()';
    element.page.evalScript(script);
}

function setPriceValue(element, value) {
    var id = element.scriptItem("id");
		var s1 = "var v ='"+value+"';";
		var s2 = "v = v.replaceAll('"+'"'+"','');";
		var s3 = "v = v.replaceAll('"+']'+"','');";
		var s4 = "v = v.replaceAll('"+'.'+"',',');";
		var s5 = "sap.ui.getCore().byId('"+id+"').setValue(v);";
    var script ="(function(){"+s1+s2+s3+s4+s5+"})()";
    element.page.evalScript(script);
}

function setPanelExpanded(element) {
    var id = element.scriptItem("id");
    var script = '(function(){sap.ui.getCore().byId("' + id + '").setExpanded(true);})()';
    element.page.evalScript(script);
}

function setDateToday(element) {
    var id = element.scriptItem("id");
    var script = '(function(){var d = new Date();sap.ui.getCore().byId("' + id + '").setDateValue(d);})()';
    element.page.evalScript(script);
}
replaceAll = function(strsrc,str1, str2, ignore) 
{
    return strsrc.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

function clearTempFolder(srcFolder) {
	if (srcFolder) {
		try {
			ctx.fso.folder.remove(srcFolder);
			ctx.log("Remove folder: "+srcFolder+" successful...");
		} catch (ex) {
			ctx.log("Remove folder:"+srcFolder+" failed with error: " + ex.message);
		}
	}
}

function collectItemMessages(ev, sc, st) {
	var rootData = sc.data;
	var po = replaceAll(rootData.purchaseOrder,"[","");
	po = replaceAll(po,'"',"");
	var price = replaceAll(rootData.price,"]","");
	price = replaceAll(price,'"',"");
	ctx.excel.sheet.activate("Report Details");
	ctx.excel.sheet.setCell(rootData.detailLineNum, 'A', po);
	ctx.excel.sheet.setCell(rootData.detailLineNum, 'B', price);
	ctx.excel.sheet.setCell(rootData.detailLineNum, 'C', rootData.msg);
	rootData.detailLineNum= rootData.detailLineNum+1;
}

// ----------------------------------------------------------------
//   Test menu for scenario MDP 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function(ev) {
    if (ctx.options.isDebug) {
        // Add item in systray menu.
        systray.addMenu('', 'MDP', 'Test MDP', '', function(ev) {
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
GLOBAL.scenario({
    MDP: function(ev, sc) {
        var rootData = sc.data;

        sc.setMode(e.scenario.mode.clearIfRunning);
        sc.setScenarioTimeout(600000); // Default timeout for global scenario.
        sc.onError(function(sc, st, ex) {
            sc.endScenario();
        }); // Default error handler.
        sc.onTimeout(30000, function(sc, st) {
            sc.endScenario();
        }); // Default timeout handler for each step.
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
	GLOBAL.data.TEMP_REPORT_FOLDER = ctx.options.path.log + "\\TpRpFDir_" + new Date().getTime();
	sc.localData.MAILTO="ibrahim.eisa@cic.ae";
	//Initialize Excel
	ctx.options.excel.newXlsInstance = true;
	ctx.options.excel.visible = ctx.options.isDebug;
	ctx.options.excel.displayAlerts = false;
	ctx.excel.initialize();
	//Fill Fiori Message Structure Info
	ctx.excel.file.create();
	ctx.excel.sheet.add('Report Details');
	ctx.excel.sheet.remove(ctx.excel.sheet.getList().length);
	ctx.excel.sheet.activate('Report Details');
	ctx.excel.sheet.setCell(1, 'A', "Purchase Order");
	ctx.excel.sheet.setStyleFont(1, 'A', 'Bold');
	ctx.excel.sheet.setColummWidth(1,'A', 18);
	ctx.excel.sheet.setCell(1, 'B', "Price");
	ctx.excel.sheet.setStyleFont(1, 'B', 'Bold');
	ctx.excel.sheet.setCell(1, 'C', "Message Status");
	ctx.excel.sheet.setStyleFont(1, 'C', 'Bold');
	ctx.excel.sheet.setColummWidth(1,'C', 15);
	
	rootData.detailLineNum = 2;
	sc.endStep(); // Start_Logon
	return;
}});

// ----------------------------------------------------------------
//   Step: Start_Logon
// ----------------------------------------------------------------
GLOBAL.step({
    Start_Logon: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', '867602c5-4b7b-490d-90ff-69f811b71a77');
        // Starts an application.
        Logon.navigator = e.navigator.Chrome;
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
    }
});

// ----------------------------------------------------------------
//   Step: pLogon_management
// ----------------------------------------------------------------
GLOBAL.step({
    pLogon_management: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', '01e4f930-72bb-426a-8915-89de0cbc4949');
        // Wait until the Page loads
        Logon.pLogon.wait(function(ev) {
            Logon.pLogon.iUser.set('mganainy');
            Logon.pLogon.iPass.set('123456789');
            Logon.pLogon.btnLogOn.click();
            sc.endStep(); // pHome_management
            return;
        });
    }
});

// ----------------------------------------------------------------
//   Step: pHome_management
// ----------------------------------------------------------------
GLOBAL.step({
    pHome_management: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', '7bd8f70d-d0a6-443d-984d-1a166e830c9e');
        // Wait until the Page loads
        Logon.pHome.wait(function(ev) {
            Logon.pHome.oBODY.wait(function(ev) {
                Logon.pHome.oMyHome.wait(function(ev) {
                    Logon.pHome.oTile.wait(function(ev) {
                        fioriFirePress(Logon.pHome.oTile);
                        sc.endStep(); // pMonitorPurchaseOrde_
                        return;
                    }, 0, 10000);
                }, 0, 10000);
            }, 0, 10000);
        });
    }
});

// ----------------------------------------------------------------
//   Step: pMonitorPurchaseOrde_
// ----------------------------------------------------------------
GLOBAL.step({
    pMonitorPurchaseOrde_: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', '81e446da-2b94-4dc8-8706-0b30c59bc782');
        // Wait until the Page loads
        Logon.pMonitorPurchaseOrde.wait(function(ev) {
            Logon.pMonitorPurchaseOrde.oBODY.wait(function(ev) {
                Logon.pMonitorPurchaseOrde.oFilterBar.wait(function(ev) {
                    Logon.pMonitorPurchaseOrde.oFilterDisplayCurrency.wait(function(ev) {
                        setElementValue(Logon.pMonitorPurchaseOrde.oFilterDisplayCurrency, "EGP");
                        Logon.pMonitorPurchaseOrde.injectFunction(setCB);
                        var cbID = Logon.pMonitorPurchaseOrde.oFilterCategory.scriptItem('id');
                        Logon.pMonitorPurchaseOrde.evalScript('setCB', cbID, 'Mandatory Down Payment');
                        fioriFirePress(Logon.pMonitorPurchaseOrde.btnSearch);
                        Logon.pMonitorPurchaseOrde.oPurchaseOrderItemsTable.wait(function(ev) {
                            sc.endStep(); // Start_loop
                            return;
                        }, 0, 10000);
                    }, 4000, 10000);
                }, 0, 10000);
            }, 0, 10000);
        });
    }
});

// ----------------------------------------------------------------
//   Step: Start_loop
// ----------------------------------------------------------------
GLOBAL.step({
    Start_loop: function(ev, sc, st) {
        var rootData = sc.data;

        ctx.workflow('MDP', '640aa273-2263-44c2-ad8b-cefaa6be44ea');
        // Starting instruction for a loop.
        if (sc.localData.Startloop < 0) sc.localData.Startloop = 0;
        sc.endStep(); // InitializeLoop
        return;
    }
});

// ----------------------------------------------------------------
//   Step: InitializeLoop
// ----------------------------------------------------------------
GLOBAL.step({
    InitializeLoop: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', 'bae03d60-4ed7-4da4-941c-1a9c7241c5b8');
        // Describe functionality to be implemented in JavaScript later in the project.
        //Clean Loop Data
        rootData.successMessage = null;
        rootData.messages = null;
        rootData.OrderandPrice = null;
        rootData.toggleItemIndex = null;
        rootData.purchaseOrder = null;
        rootData.price = null;

        //Ensure Results are available
        Logon.pMonitorPurchaseOrde.injectFunction(getPurchaseOrderAndPriceFunction);

        //Fetch Table Id
        var tableId = Logon.pMonitorPurchaseOrde.oPurchaseOrderItemsTable.scriptItem('id');

        //Parse Table and fetch PO number and Price
        var orderPriceString = Logon.pMonitorPurchaseOrde.evalScript('getPurchaseOrderAndPrice', tableId);
        ctx.log("Refreshed line items: " + ctx.json.stringify(orderPriceString));
        var parts = orderPriceString.split(',');
        var length = Math.floor(parts.length / 2);
        var purchaseOrderPrice = [];
        for (var i = 0; i < length; i++) {
            purchaseOrderPrice.push([parts[i * 2], parts[i * 2 + 1]]);
        }
        rootData.OrderandPrice = purchaseOrderPrice;

        sc.endStep(); // Exit_loop
        return;
    }
});

// ----------------------------------------------------------------
//   Step: Exit_loop
// ----------------------------------------------------------------
GLOBAL.step({
    Exit_loop: function(ev, sc, st) {
        var rootData = sc.data;

        ctx.workflow('MDP', 'c2636cb7-0abe-458f-ab62-8b1f18a27e70');
        // Check if there exist OrderandPrice
        if (rootData.OrderandPrice) {
            for (var i = 0; i < rootData.OrderandPrice.length; i++) {
                var orderItemKey = rootData.OrderandPrice[i][0] + '~' + rootData.OrderandPrice[i][1];
                if (arrayIndexOf(rootData.processedOrderPrice, orderItemKey) === -1) {
                    rootData.purchaseOrder = rootData.OrderandPrice[i][0];
                    rootData.price = rootData.OrderandPrice[i][1];
                    rootData.toggleItemIndex = i;
                    ctx.log("Next process line item, Purchase Order: " + rootData.OrderandPrice[i][0] + ", item: " + rootData.OrderandPrice[i][1] + ', which item index: ' + rootData.toggleItemIndex);
                    rootData.processedOrderPrice.push(orderItemKey);
                    Logon.pMonitorPurchaseOrde.injectFunction(setFirstVisibleRowFunction);
                    var tableId = Logon.pMonitorPurchaseOrde.oPurchaseOrderItemsTable.scriptItem('id');
                    Logon.pMonitorPurchaseOrde.execScript('setFirstVisibleRow', tableId, rootData.toggleItemIndex);
                    break;
                }
            }
        }
        if (rootData.toggleItemIndex == null) {
            ctx.log('No more purchase order items.');
            sc.localData.Startloop = -1;
            sc.endStep('NEXT_LOOP');
            return;
        }
        sc.endStep(); // TogglePO
        return;
    }
});

// ----------------------------------------------------------------
//   Step: TogglePO
// ----------------------------------------------------------------
GLOBAL.step({
    TogglePO: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', '4b66bdba-b102-4b84-a375-d1925441a6de');
        // Describe functionality to be implemented in JavaScript later in the project.
        Logon.pMonitorPurchaseOrde.injectFunction(toggleTableRowFunction);
        var tableId = Logon.pMonitorPurchaseOrde.oPurchaseOrderItemsTable.scriptItem('id');
        Logon.pMonitorPurchaseOrde.execScript('toggleTableRow', tableId, rootData.toggleItemIndex);
        ctx.wait(function(ev) {
            sc.endStep(); // Loops_to_the_start_bl
            return;
        }, 1000, 0);
    }
});

// ----------------------------------------------------------------
//   Step: AfterPressingCreate
// ----------------------------------------------------------------
GLOBAL.step({
    AfterPressingCreate: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', '5625398f-c362-4986-a2ce-c8725f73a012');
        // Describe functionality to be implemented in JavaScript later in the project.
        //POLL the Page untill it is either redirected to the creation screen or an error popup is displayed
        fioriFirePress(Logon.pMonitorPurchaseOrde.btCDPRequest);
        ctx.polling({
            delay: 250,
            nbMax: 6000,
            test: function(index) {
                if (Logon.pMonitorPurchaseOrde.exist()) {

                    if (Logon.pMonitorPurchaseOrde.btCloseIncomplete.exist()) {
                        ctx.log('Find incomplete item');
												rootData.msg = 'Incomplete';
                        return true;
                    }
                }else {
					return true;
				}
                return false;
            },
            done: function() {
                if (Logon.pMonitorPurchaseOrde.exist()) {
                    fioriFirePress(Logon.pMonitorPurchaseOrde.btCloseIncomplete);
										collectItemMessages(ev, sc, st)
                    sc.endStep('NEXT_LOOP');
                } else {
                    sc.endStep(); // waitingForPostPage
                    return;
                }
            },
            fail: function() {}
        });
    }
});

// ----------------------------------------------------------------
//   Step: pManageSupplierDown_m
// ----------------------------------------------------------------
GLOBAL.step({
    pManageSupplierDown_m: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', '5a670344-e8f5-415f-a32d-36e1bfda05ae');
        // Wait until the Page loads
        Logon.pManageSupplierDown.wait(function(ev) {
		Logon.pManageSupplierDown.oBODY.wait(function(ev) {
			Logon.pManageSupplierDown.oItemsPanel.wait(function(ev) {
				Logon.pManageSupplierDown.oItemsHeader.wait(function(ev) {
					setPanelExpanded(Logon.pManageSupplierDown.oItemsPanel);
					Logon.pManageSupplierDown.oJournalEntryDate.wait(function(ev) {
						Logon.pManageSupplierDown.oBaseLineDate.wait(function(ev) {
							Logon.pManageSupplierDown.oAmountField.wait(function(ev) {
										setDateToday(Logon.pManageSupplierDown.oJournalEntryDate);
										setDateToday(Logon.pManageSupplierDown.oBaseLineDate);
										setPriceValue(Logon.pManageSupplierDown.oAmountField,rootData.price);
										fioriFirePress(Logon.pManageSupplierDown.btPost);
								Logon.pManageSupplierDown.oSucessMessage.wait(function(ev) {
									Logon.pManageSupplierDown.btSuccessGoBack.wait(function(ev) {
										rootData.msg = 'Success';
										fioriFirePress(Logon.pManageSupplierDown.btSuccessGoBack);
										collectItemMessages(ev, sc, st);
										sc.endStep(); // ProcessDP
										return;
									}, 3000, 10000);
								}, 0, 10000);
							}, 0, 10000);
						}, 0, 10000);
					}, 0, 10000);
				}, 0, 10000);
			}, 0, 10000);
		}, 0, 10000);
        });
    }
});

// ----------------------------------------------------------------
//   Step: ProcessDP
// ----------------------------------------------------------------
GLOBAL.step({
    ProcessDP: function(ev, sc, st) {
        var rootData = sc.data;
        ctx.workflow('MDP', 'c4a6293d-5b9a-4ae7-a3b6-709894a6e415');
        // Describe functionality to be implemented in JavaScript later in the project.
				Logon.pMonitorPurchaseOrde.wait(function(ev){
					ctx.log("Page Loaded");
					Logon.pMonitorPurchaseOrde.oBODY.wait(function(ev){
						ctx.log("Body Loaded");
						Logon.pMonitorPurchaseOrde.oPurchaseOrderItemsTable.wait(function(ev){
							ctx.log("Table Loaded");
							sc.endStep(); // ProcessDP
										return;
						});
					}, 0, 10000);
				}, 0, 10000);
    }
});

// ----------------------------------------------------------------
//   Step: Loops_to_the_start_bl
// ----------------------------------------------------------------
GLOBAL.step({
    Loops_to_the_start_bl: function(ev, sc, st) {
        var rootData = sc.data;

        ctx.workflow('MDP', '4e3c0fae-412b-4431-9d70-f3e04fe0cdfb');
			ctx.log("Entered the Next Step");
        // Loops to the start block.
        if (sc.localData.Startloop != -1) {
            sc.localData.Startloop++;
            sc.endStep('NEXT_LOOP');
            return;
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
	var tempReportFolder = GLOBAL.data.TEMP_REPORT_FOLDER,
				tempReportPath = tempReportFolder + "\\Supplier Down Payment Request " + rootData.reportGeneratedTime + ".xlsx"
		if (!ctx.fso.folder.exist(tempReportFolder)) {
			ctx.log('Report folder: ' + tempReportFolder + ' does not exist, create it.');
			ctx.fso.folder.create(tempReportFolder);
		}
		ctx.excel.file.saveAs(tempReportPath);
		ctx.excel.file.close();
		ctx.excel.release();
		ctx.excel.end();
		
		if (sc.localData.MAILTO) {
			ctx.outlook.init();
			ctx.outlook.mail.create( {
				To:sc.localData.MAILTO, Subject:'Bot Execution Report: Supplier Down Payment Request ' + rootData.mailSubjectTime, Body:'For details, please refer to the attachment.'
			});
			ctx.outlook.mail.attach(0, tempReportPath);
			try {
				// Sends the mail.
				var res = ctx.outlook.mail.send(0);
			} catch (err) {
				ctx.log('Send mail notification fails ' + err);
				ctx.outlook.end();
			}
			// Ends “Microsoft Outlook” application.
			ctx.outlook.end();
		}
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
			ctx.excel.end();
		ctx.outlook.end();
	clearTempFolder(GLOBAL.data.TEMP_REPORT_FOLDER);
        sc.endStep(); // end Scenario
        return;
    }
});