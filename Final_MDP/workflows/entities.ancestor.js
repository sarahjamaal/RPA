
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		LogonData : 
		{
			pLogonData : 
			{
				iUser : ''
				, iPass : ''
			}
			, pMonitorPurchaseOrdeData : 
			{
				oFilterDisplayCurrency : ''
			}
		}
		, processedOrderPrice : []
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_LogonData -------------------
ctx.dataManager({
	rootData_LogonData :
	{
		pLogonData : 
		{
			iUser : ''
			, iPass : ''
		}
		, pMonitorPurchaseOrdeData : 
		{
			oFilterDisplayCurrency : ''
		}
	}
});
var rootData_LogonData = ctx.dataManagers.rootData_LogonData.create() ;

// ----------- rootData_LogonData_pLogonData -------------------
ctx.dataManager({
	rootData_LogonData_pLogonData :
	{
		iUser : ''
		, iPass : ''
	}
});
var rootData_LogonData_pLogonData = ctx.dataManagers.rootData_LogonData_pLogonData.create() ;

// ----------- rootData_LogonData_pMonitorPurchaseOrdeData -------------------
ctx.dataManager({
	rootData_LogonData_pMonitorPurchaseOrdeData :
	{
		oFilterDisplayCurrency : ''
	}
});
var rootData_LogonData_pMonitorPurchaseOrdeData = ctx.dataManagers.rootData_LogonData_pMonitorPurchaseOrdeData.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
