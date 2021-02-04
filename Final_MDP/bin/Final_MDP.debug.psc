<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.5.69" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="2/1/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="770cfde4-c834-4b22-b1af-d88430c8b2ec">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ELEMENTAL]]></OBJDON>
					<OBJDON Name="PrjName">Final_MDP</OBJDON>
					<OBJDON Name="PrjDate">02/01/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[Final_MDP]]></OBJDON>
					<OBJDON Name="PrjComment"><![CDATA[]]></OBJDON>
					<OBJDON Name="LicenceURL" />
					<STRUCTUREDON Name="Xc_MessBoxHtml">
						<OBJDON Name="Style">style="font-size:12pt;font-family:'Arial'"</OBJDON>
						<OBJDON Name="ErrColor">white</OBJDON>
						<OBJDON Name="InfoColor">white</OBJDON>
						<OBJDON Name="ChoiceColor">white</OBJDON>
						<OBJDON Name="WarningColor">white</OBJDON>
						<OBJDON Name="ErrIcon">Critical.gif</OBJDON>
						<OBJDON Name="InfoIcon">Info.gif</OBJDON>
						<OBJDON Name="ChoiceIcon">Pencil.gif</OBJDON>
						<OBJDON Name="WarningIcon">Warning.gif</OBJDON>
						<OBJDON Name="StyleButton">style="font-size:12px;font-family:'Arial';width:80px"</OBJDON>
						<OBJDON Name="StyleText">style="font-size=11pt;font-family='Arial'"</OBJDON>
						<OBJDON Name="IconSize">32</OBJDON>
					</STRUCTUREDON>
				</STRUCTUREDON>
			</_DECLAREVAR>
			<SCRIPTS>
				<SCRIPT Name="Constants" Src="lib\common\ctx.enum.js" Folder="Framework" />
				<SCRIPT Name="Ctx Core" Src="lib\ctx\ctx.core.js" Folder="Framework" />
				<SCRIPT Name="Ctx XML" Src="lib\ctx\ctx.xml.js" Folder="Framework" />
				<SCRIPT Name="Ctx Scenario" Src="lib\ctx\ctx.scenario.js" Folder="Framework" />
				<SCRIPT Name="Ctx Request" Src="lib\ctx\ctx.request.js" Folder="Framework" />
				<SCRIPT Name="Ctx Language" Src="lib\ctx\ctx.language.js" Folder="Framework" />
				<SCRIPT Name="Ctx Item" Src="lib\ctx\ctx.item.js" Folder="Framework" />
				<SCRIPT Name="Ctx Page" Src="lib\ctx\ctx.page.js" Folder="Framework" />
				<SCRIPT Name="Ctx Application" Src="lib\ctx\ctx.application.js" Folder="Framework" />
				<SCRIPT Name="Ctx Systray" Src="lib\ctx\ctx.systray.js" Folder="Framework" />
				<SCRIPT Name="Ctx Popup" Src="lib\ctx\ctx.popup.js" Folder="Framework" />
				<SCRIPT Name="Ctx Popup Bootstrap" Src="lib\ctx\ctx.popup.bootbox.js" Folder="Framework" />
				<SCRIPT Name="FSO library" Src="lib\utils\fso.js" Folder="Framework" />
				<SCRIPT Name="WMI library" Src="lib\utils\wmi.js" Folder="Framework" />
				<SCRIPT Name="WScript library" Src="lib\utils\wscript.js" Folder="Framework" />
				<SCRIPT Name="Ctx Diagnostic" Src="lib\ctx\ctx.diagnostic.js" Folder="Framework" />
				<SCRIPT Name="Ctx Galaxy" Src="lib\galaxy\galaxy.m2m.js" Folder="Framework" />
				<SCRIPT Name="Excel" Comment="Microsoft Excel Integration" Folder="Microsoft Office" Src="lib\office\excel.js" />
				<SCRIPT Name="Outlook" Comment="Microsoft Outlook Integration" Folder="Microsoft Office" Src="lib\office\outlook.js" />
				<SCRIPT Name="SAP UI5" Src="lib\sapui5\sapui5.js" Folder="Framework" />
				<SCRIPT Name="Entities" Src="entities.js" IsWorkflowGenerated="Y" />
				<SCRIPT Name="Declarations" Src="final_mdp.resources.js" ReadOnly="Y" />
				<SCRIPT Name="Labels" Src="labels.js" />
				<SCRIPT Name="Global" Src="global.js" />
				<SCRIPT Src="mdp.js" IsWorkflowGenerated="Y" />
			</SCRIPTS>
			<RESOURCES>
				<RESOURCE Name="popup" Src="%sdk%\templates\resources\popup\" Dest="popup" />
				<RESOURCE Name="agent16px" Src="%sdk%\templates\resources\bmp\agent.png" Dest="bmp" />
				<RESOURCE Name="accept16px" Src="%sdk%\templates\resources\bmp\accept.png" Dest="bmp" />
				<RESOURCE Name="cancel16px" Src="%sdk%\templates\resources\bmp\cancel.png" Dest="bmp" />
				<RESOURCE Name="help16px" Src="%sdk%\templates\resources\bmp\help.png" Dest="bmp" />
				<RESOURCE Name="information16px" Src="%sdk%\templates\resources\bmp\information.png" Dest="bmp" />
				<RESOURCE Name="repeat16px" Src="%sdk%\templates\resources\bmp\repeat.png" Dest="bmp" />
				<RESOURCE Name="stop16px" Src="%sdk%\templates\resources\bmp\stop.png" Dest="bmp" />
				<RESOURCE Name="warning16px" Src="%sdk%\templates\resources\bmp\warning.png" Dest="bmp" />
				<RESOURCE Name="record16px" Src="%sdk%\templates\resources\bmp\record.png" Dest="bmp" />
				<RESOURCE Name="agent32px" Src="%sdk%\templates\resources\bmp32\agent.png" Dest="bmp32" />
				<RESOURCE Name="accept32px" Src="%sdk%\templates\resources\bmp32\accept.png" Dest="bmp32" />
				<RESOURCE Name="cancel32px" Src="%sdk%\templates\resources\bmp32\cancel.png" Dest="bmp32" />
				<RESOURCE Name="help32px" Src="%sdk%\templates\resources\bmp32\help.png" Dest="bmp32" />
				<RESOURCE Name="information32px" Src="%sdk%\templates\resources\bmp32\information.png" Dest="bmp32" />
				<RESOURCE Name="user32px" Src="%sdk%\templates\resources\bmp32\user.png" Dest="bmp32" />
				<RESOURCE Name="warning32px" Src="%sdk%\templates\resources\bmp32\warning.png" Dest="bmp32" />
				<RESOURCE Name="agent64px" Src="%sdk%\templates\resources\bmp64\agent.png" Dest="bmp64" />
				<RESOURCE Name="hello64px" Src="%sdk%\templates\resources\bmp64\hello.png" Dest="bmp64" />
				<RESOURCE Name="hello128px" Src="%sdk%\templates\resources\bmp64\hello128.png" Dest="bmp64" />
				<RESOURCE Name="gif" Src="%sdk%\templates\resources\gif\" Dest="gif" />
			</RESOURCES>
			<_ECRANS />
			<WORKFLOWS>
				<WORKFLOW Name="MDP" Src="%workflows%\MDP.xaml" CtxtId="d3f1350d-7c8a-4332-b476-b7e8844e7409" DisplayName="MDP" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="MDP" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="acb2047d-6706-4dd6-b799-eb429125e3ce" Nature="POPUP">
			<SCRIPTS />
			<SCENARII>
				<Steps />
			</SCENARII>
			<ACTIONS />
			<EVENTS />
			<_DECLAREVAR>
				<STRUCTUREDON Name="POPUPS" />
			</_DECLAREVAR>
			<_ECRANS />
		</PROCESS>
	</PROCESSUS>
	<APPLICATIONS>
		<APPLI Name="Logon" CtxtId="04fa3fa8-a755-434e-8006-cb2217f67d6f" Nature="WEB3" TechnoSDK="V3" Sync="250">
			<SCRIPTS />
			<CRITERE>
				<DOMAIN Scan="Full"><![CDATA[app-1809.cic.ae]]></DOMAIN>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="Logon" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pLogon" Comment="Logon" CtxtId="42ddc1ab-d3c2-48a4-9201-756fe26e9064">
					<CRITERE>
						<TITLE Scan="Full"><![CDATA[Logon]]></TITLE>
					</CRITERE>
					<OBJETS>
						<OBJET Name="iUser" CtxtId="39db37a0-e0ea-41e4-a538-b1b96423257b" SpecIndex="1">
							<CRITERE>
								<TAG Name="INPUT" Scope="All" CapturedPos="18.R0R1R0R3R0R8R0R1R0">
									<ATT Name="name">
										<VALUE Scan="Full"><![CDATA[sap-user]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="iPass" CtxtId="14b25a8d-803f-4944-b1a0-461b37fc8da6" SpecIndex="2">
							<CRITERE>
								<TAG Name="INPUT" Scope="All" CapturedPos="18.R0R1R0R3R0R8R1R1R0">
									<ATT Name="name">
										<VALUE Scan="Full"><![CDATA[sap-password]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btnLogOn" CtxtId="98b3c008-7987-46d6-99fe-67c9dd97361a" SpecIndex="3">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All" CapturedPos="18.R0R1R0R3R0R10R0R0">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[LOGIN_LINK]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pMonitorPurchaseOrde" Comment="Monitor Purchase Order Down Payments" CtxtId="751f9568-2a7f-4ce3-8498-5abc1d32d533">
					<CRITERE>
						<TITLE Scan="Full"><![CDATA[Monitor Purchase Order Down Payments]]></TITLE>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oBODY" CtxtId="c3371f5b-5bfc-4557-83e2-09a4c0d8cdeb" SpecIndex="1">
							<CRITERE>
								<TAG Name="BODY" Scope="All" CapturedPos="19.R0R1" />
							</CRITERE>
						</OBJET>
						<OBJET Name="oFilterBar" CtxtId="5598779a-09a7-487c-a442-860b6cb628c8" SpecIndex="2">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="19.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R0R0R1R2R0R0R0R0R0R0R0">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[ui.s2p.mm.podownpayment::sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage::C_PurOrdDownPaymentMntrResults--template::SmartFilterBar]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oFilterDisplayCurrency" CtxtId="1f844ed8-420e-43bd-bc4e-90c001ac5847" SpecIndex="3">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="19.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R0R0R1R2R0R0R0R0R0R0R0R0R0R1R1R0">
									<ATT Name="id">
										<VALUE Scan="Part"><![CDATA[SmartFilterBar-filterItemControlA_-_Parameter.P_DisplayCurrency]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oFilterCategory" CtxtId="108cf3cf-94ec-47f4-8f44-6012067e6c39">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="19.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R0R0R1R2R0R0R0R0R0R0R0R0R0R6R1R0">
									<ATT Name="id">
										<VALUE Scan="Part"><![CDATA[SmartFilterBar-filterItemControl_BASIC-DownPaymentType]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btnSearch" CtxtId="810f125b-1b04-4cb8-9b3b-803e2dabd60d" SpecIndex="4">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All" CapturedPos="19.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R0R0R1R2R0R0R0R0R0R0R0R0R0R10R1R0R3R0">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[ui.s2p.mm.podownpayment::sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage::C_PurOrdDownPaymentMntrResults--template::SmartFilterBar-btnGo]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oPurchaseOrderItemsTable" CtxtId="de4fa314-4222-43e5-963f-1bb1105ffb35">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="20.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R0R0R1R2R1R0R0R0R1R0R1R0">
									<ATT Name="id">
										<VALUE Scan="Part"><![CDATA[__table]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btCDPRequest" CtxtId="adffda8e-7c9d-4f47-b7c8-5176b94bb56b">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All" CapturedPos="20.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R0R0R1R2R1R0R0R0R1R0R0R0R2">
									<ATT Name="id">
										<VALUE Scan="Part"><![CDATA[C_PurOrdDownPaymentMntrResults--ActionC_CreateDownPaytRequest]]></VALUE>
									</ATT>
									<ATT Name="class">
										<VALUE Scan="Part"><![CDATA[sapMBarChild]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btCloseIncomplete" CtxtId="b2cacf5f-f5f7-40cb-bdfe-f85020ebcf28">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All" CapturedPos="21.R0R1R0R17R3R0R1">
									<ATT Name="id">
										<VALUE Scan="Part"><![CDATA[__mbox-btn]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pManageSupplierDown" Comment="Manage Supplier Down Payment Requests" CtxtId="50a4ffba-b86a-4cc2-a30c-8ea1692d9ed0">
					<CRITERE>
						<TITLE Scan="Full"><![CDATA[Manage Supplier Down Payment Requests]]></TITLE>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oBODY" CtxtId="a141bff8-9597-40d1-9687-d38b12374df1" SpecIndex="1">
							<CRITERE>
								<TAG Name="BODY" Scope="All" CapturedPos="22.R0R1" />
							</CRITERE>
						</OBJET>
						<OBJET Name="btPost" CtxtId="4ca3e2b6-a1fa-45bc-992d-fa853db28452">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All" CapturedPos="22.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R1R0R0R2R0R1">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[application-Supplier-manageDownPaymentRequests-component---CreateRequestView--buttonPost]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oJournalEntryDate" CtxtId="fd3e0a70-3e03-49c3-bf0c-7275f7c91fce" SpecIndex="4">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="22.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R1R0R0R1R0R0R1R0R0R1R0R0R3R0R0">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[application-Supplier-manageDownPaymentRequests-component---CreateRequestView--docDateInput-datePicker]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btBackBtn" CtxtId="d232dce0-519c-4ac2-bdb0-8b89562bf58b">
							<CRITERE>
								<TAG Name="A" Scope="All" CapturedPos="22.R0R1R3R0R0R0R1">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[backBtn]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oItemsHeader" CtxtId="d21b9063-ade3-4883-97a3-5c9349d1ae75" SpecIndex="3">
							<CRITERE>
								<TAG Name="UL" Scope="All" CapturedPos="22.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R1R0R0R1R1R1R0R1R1">
									<TAG Name="LI" Scope="All" CapturedPos="22.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R1R0R0R1R1R1R0R1R1R0">
										<TAG Name="HEADER" Scope="All" CapturedPos="22.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R1R0R0R1R1R1R0R1R1R0R0R0R0R0R0">
											<ATT Name="class">
												<VALUE Scan="Part"><![CDATA[sapMPanelWrappingDivTb]]></VALUE>
											</ATT>
											<SET />
										</TAG>
										<ATT Name="id">
											<VALUE Scan="Part"><![CDATA[onAccountItems]]></VALUE>
										</ATT>
									</TAG>
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[application-Supplier-manageDownPaymentRequests-component---CreateRequestView--onAccountItems-listUl]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oItemsPanel" CtxtId="c67c8d85-d648-4635-8219-82d5f86c5f4e" SpecIndex="2">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="22.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R1R0R0R1R1R1R0R1R1R0R0R0R0R0">
									<ATT Name="id">
										<VALUE Scan="Part"><![CDATA[application-Supplier-manageDownPaymentRequests-component---CreateRequestView--itemPanel-application-Supplier-manageDownPaymentRequests-component---CreateRequestView--onAccountItems]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oBaseLineDate" CtxtId="97fc027a-6368-43d9-b085-c34ee66455b7" SpecIndex="5">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="22.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R1R0R0R1R1R1R0R1R1R0R0R0R0R0R1R0R0R0R0R0R0R0R1R0R0R0R1R0R0">
									<ATT Name="id">
										<VALUE Scan="Part"><![CDATA[DueCalculationBaseDate-datePicker]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oAmountField" CtxtId="3e1ba85e-9afc-4b4b-9b69-8e9d185d6e1d" SpecIndex="6">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="22.R0R1R4R0R0R5R0R1R0R1R0R1R0R1R0R0R0R0R1R0R0R1R1R1R0R1R1R0R0R0R0R0R0R1R4R2R0R0R0R0">
									<ATT Name="id">
										<VALUE Scan="Like"><![CDATA[application-Supplier-manageDownPaymentRequests-component---CreateRequestView--onAccountItemCreditAmount-application-Supplier-manageDownPaymentRequests-component---CreateRequestView--onAccountItems-.*-input]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oSucessMessage" CtxtId="6ffb4ef9-cb72-49f0-bcd1-bd8d5cb7e29f" SpecIndex="7">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="24.R0R1R0">
									<TAG Name="SPAN" Scope="All" CapturedPos="24.R0R1R0R16R2R0R0R0">
										<ATT Name="id">
											<VALUE Scan="Part"><![CDATA[__text]]></VALUE>
										</ATT>
										<ATT Name="Text">
											<VALUE Scan="Like"><![CDATA[Journal entry .*successfully posted]]></VALUE>
										</ATT>
										<ATT Name="class">
											<VALUE Scan="Part"><![CDATA[sapMMsgBoxText]]></VALUE>
										</ATT>
										<SET />
									</TAG>
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[sap-ui-static]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btSuccessGoBack" CtxtId="62308584-a9c6-45bb-9fa0-80b162b82d5c" SpecIndex="8">
							<CRITERE>
								<TAG Name="FOOTER" Scope="All" CapturedPos="24.R0R1R0R16R3">
									<TAG Name="DIV" Scope="Children" CapturedPos="24.R0R1R0R16R3R0">
										<TAG Name="BUTTON" Scope="Children" CapturedPos="24.R0R1R0R16R3R0R2">
											<TAG Name="SPAN" Scope="All" CapturedPos="24.R0R1R0R16R3R0R2R0">
												<ATT Name="Text">
													<VALUE Scan="Full"><![CDATA[Go Back]]></VALUE>
												</ATT>
											</TAG>
											<ATT Name="id">
												<VALUE Scan="Part"><![CDATA[__mbox-btn]]></VALUE>
											</ATT>
											<SET />
										</TAG>
										<ATT Name="class">
											<VALUE Scan="Part"><![CDATA[sapMFooter-CTX]]></VALUE>
										</ATT>
									</TAG>
									<ATT Name="class">
										<VALUE Scan="Full"><![CDATA[sapMDialogFooter]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pHome" Comment="Home" CtxtId="4e8ee5ef-9758-4d65-8d14-d56df5e7366e">
					<CRITERE>
						<TITLE Scan="Full"><![CDATA[Home]]></TITLE>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oBODY" CtxtId="f9a48d2b-5e7e-4ce8-a6c8-7d89e4fff5a7" SpecIndex="2">
							<CRITERE>
								<TAG Name="BODY" Scope="All" CapturedPos="23.R0R1" />
							</CRITERE>
						</OBJET>
						<OBJET Name="oMyHome" CtxtId="706a78f8-c229-4855-a996-8593f87cfc50" SpecIndex="3">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="23.R0R1R4R0R0R5R0R1R0R1R0R1R0R0R0R0R0R0R0R0R1R0R0R0">
									<ATT Name="id">
										<VALUE Scan="Part"><![CDATA[__container0-dashboardGroups-id]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oTile" CtxtId="adfbf3e0-f632-4e31-9960-eaf9e36049d1" SpecIndex="4">
							<CRITERE>
								<TAG Name="DIV" Scope="All" CapturedPos="23.R0R1R4R0R0R5R0R1R0R1R0R1R0R0R0R0R0R0R0R0R1R0R0R0R0R1R3R0R0R0R0">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[__tile39]]></VALUE>
									</ATT>
									<ATT Name="Text">
										<VALUE Scan="Full"><![CDATA[Monitor Purchase Order Down Payments]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</APPLI>
	</APPLICATIONS>
	<CONTEXT Id="da79a44a-1728-4dbc-8eb2-4f3e87c92adb" />
</ConteXtorStudio>