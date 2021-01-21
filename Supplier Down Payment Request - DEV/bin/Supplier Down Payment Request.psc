<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Desktop Studio 2.0.5.69" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="1/19/2021"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="f88f0fb3-2d3f-4ad8-bd40-b90364176d2d">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[ELEMENTAL]]></OBJDON>
					<OBJDON Name="PrjName">Supplier Down Payment Request</OBJDON>
					<OBJDON Name="PrjDate">1/19/2021</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[Supplier Down Payment Request]]></OBJDON>
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
				<SCRIPT Name="Constants" Src="Supplier Down Payment Request.min.js" Folder="Framework" />
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
				<WORKFLOW Name="DownPaymentRequestsforSuppliers" Src="%workflows%\DownPaymentRequestsforSuppliers.xaml" CtxtId="cf1eb608-593e-4d09-89b5-3ba4672a690a" DisplayName="DownPaymentRequestsforSuppliers" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="DownPaymentRequestsforSuppliers" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="70dc2170-60ac-4567-ae14-623a0d60b22d" Nature="POPUP">
			<_DECLAREVAR>
				<STRUCTUREDON Name="POPUPS" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="SplashScreen" CtxtId="44f51b06-1be5-4c9e-9a86-af25298ebbff" Template="popup.pscm" Type="POPUP">
					<OBJETS>
						<OBJET Name="container1" CtxtId="1d3813fc-dab3-4eda-8893-9e736a5b507e" Technical="Y" ImagePath="fa/vcard-o.png" OrderBy="1">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[container1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="row1" CtxtId="77d5d761-c88d-45e4-a5cd-018a8ac8dac7" Technical="Y" ParentName="container1" ImagePath="fa/bars.png" OrderBy="2">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[row1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="item1" CtxtId="401b26cb-b5ab-47f9-a7e9-913ea4980847" ParentName="row1" ImagePath="fa/tag.png" OrderBy="3">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[item1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="item2" CtxtId="50b3a8c3-1ecb-4e40-a0a5-128b9f761760" ParentName="row1" ImagePath="fa/tag.png" OrderBy="4">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[item2]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="row2" CtxtId="14e1bc4d-1a1a-48e8-81d1-f38574a6c850" Technical="Y" ParentName="container1" ImagePath="fa/bars.png" OrderBy="5">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[row2]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="item3" CtxtId="fee3bc2e-9e32-4b3c-a05b-9d01ccbe3f85" ParentName="row2" ImagePath="fa/tag.png" OrderBy="6">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[item3]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="item4" CtxtId="a729b563-a490-46cf-8b36-6289a29e9b25" ParentName="row2" ImagePath="fa/tag.png" OrderBy="7">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[item4]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="item5" CtxtId="dd81a428-aef5-4b98-978f-24dcc1e4d141" ParentName="row2" ImagePath="fa/tag.png" OrderBy="8">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[item5]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="item6" CtxtId="1f22c539-777f-455d-8606-db50e9575867" ParentName="row2" ImagePath="fa/tag.png" OrderBy="9">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[item6]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="row3" CtxtId="709fba84-3223-4aa6-8e11-5ebe47f9796d" Technical="Y" ParentName="container1" ImagePath="fa/bars.png" OrderBy="10">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[row3]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="rememCheckbox" CtxtId="96ef53e2-22e5-464d-90a6-e8718df02445" ParentName="row3" ImagePath="fa/check-square-o.png" OrderBy="11">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[rememCheckbox]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="ch1" CtxtId="cb5b14a4-c5b9-45df-bd92-d4ea458f5a72" Technical="Y" ParentName="rememCheckbox" ImagePath="fa/angle-down.png" OrderBy="12">
							<CRITERE>
								<TAG Name="INPUT" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[ch1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="row4" CtxtId="2726907f-e4de-4545-8bc8-5f9349e61763" Technical="Y" ParentName="container1" ImagePath="fa/bars.png" OrderBy="13">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[row4]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="continueBtn" CtxtId="0456eccf-8a57-4fef-a443-0373c66fad52" ParentName="row4" ImagePath="fa/hand-o-up.png" OrderBy="14">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[continueBtn]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="InitialConfigurationP" CtxtId="48cd17ca-87bb-40f3-9e34-a7f03966f62e" Template="popup.pscm" Type="POPUP">
					<OBJETS>
						<OBJET Name="main_container" CtxtId="2b55ff19-1d99-4a38-9b41-93edaee43335" Technical="Y" ImagePath="fa/vcard-o.png" OrderBy="1">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[main_container]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="additiona_config_row" CtxtId="835e0ca2-e00f-4606-9e06-bddf7a14c263" Technical="Y" ParentName="main_container" ImagePath="fa/bars.png" OrderBy="2">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[additiona_config_row]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col1" CtxtId="0349ed77-6221-412a-821f-b940e0150cde" Technical="Y" ParentName="additiona_config_row" ImagePath="fa/ellipsis-h.png" OrderBy="3">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="fioriSystem" CtxtId="6b4f4423-6123-4c47-85f6-d94e32bbedd4" ParentName="col1" ImagePath="fa/terminal.png" OrderBy="4">
							<CRITERE>
								<TAG Name="INPUT" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[fioriSystem]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="reportHeader" CtxtId="f21b8b1d-899b-4e85-b171-78e6a9c09034" Technical="Y" ParentName="main_container" ImagePath="fa/bars.png" OrderBy="5">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[reportHeader]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col2" CtxtId="e1790444-0fb2-4312-872f-ce15be5b89d2" Technical="Y" ParentName="reportHeader" ImagePath="fa/ellipsis-h.png" OrderBy="6">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col2]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="item1" CtxtId="af56a04b-6c5a-44a9-8c98-f73b09a68f5d" ParentName="col2" ImagePath="fa/tag.png" OrderBy="7">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[item1]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="outputDir_selection_row" CtxtId="8ec0d600-22ce-4379-b772-e424e30e00f4" Technical="Y" ParentName="main_container" ImagePath="fa/bars.png" OrderBy="8">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[outputDir_selection_row]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col5" CtxtId="98a63bd7-5d29-42cc-9e5f-79f6e90e10e8" Technical="Y" ParentName="outputDir_selection_row" ImagePath="fa/ellipsis-h.png" OrderBy="9">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col5]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="output_folder_path" CtxtId="65251520-885a-4ef9-8f14-689f7e809905" ParentName="col5" ImagePath="fa/terminal.png" OrderBy="10">
							<CRITERE>
								<TAG Name="INPUT" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[output_folder_path]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col6" CtxtId="eb415527-d19f-4e13-be30-80c98db64303" Technical="Y" ParentName="outputDir_selection_row" ImagePath="fa/ellipsis-h.png" OrderBy="11">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col6]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="browse_output_dir" CtxtId="93f336bb-8626-4a23-ac0d-823ebfd0b39a" ParentName="col6" ImagePath="fa/hand-o-up.png" OrderBy="12">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[browse_output_dir]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="email_row" CtxtId="f15552fc-ef41-4d2f-88a2-95978eb5a7cf" Technical="Y" ParentName="main_container" ImagePath="fa/bars.png" OrderBy="13">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[email_row]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col7" CtxtId="ece23bb0-b096-4d56-833d-d082b786b3c2" Technical="Y" ParentName="email_row" ImagePath="fa/ellipsis-h.png" OrderBy="14">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col7]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="email" CtxtId="287a178d-209a-462a-84d5-3317f987ae69" ParentName="col7" ImagePath="fa/terminal.png" OrderBy="15">
							<CRITERE>
								<TAG Name="INPUT" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[email]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="footer_row" CtxtId="ade90391-c59a-4987-976c-45d94a85304f" Technical="Y" ParentName="main_container" ImagePath="fa/bars.png" OrderBy="16">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[footer_row]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col3" CtxtId="7ee5f249-2d5a-41fd-8b5e-af030ef9b12f" Technical="Y" ParentName="footer_row" ImagePath="fa/ellipsis-h.png" OrderBy="17">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col3]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="col4" CtxtId="67187010-d181-4240-b37a-5c0592122160" Technical="Y" ParentName="footer_row" ImagePath="fa/ellipsis-h.png" OrderBy="18">
							<CRITERE>
								<TAG Name="DIV" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[col4]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="done_btn" CtxtId="d721bee1-d095-42ee-856f-0a9b41c4f085" ParentName="col4" ImagePath="fa/hand-o-up.png" OrderBy="19">
							<CRITERE>
								<TAG Name="BUTTON" Scope="All">
									<ATT Name="id">
										<VALUE Scan="Full"><![CDATA[done_btn]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
			<SCRIPTS />
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
	</PROCESSUS>
	<APPLICATIONS />
	<CONTEXT Id="7060faee-f79e-40d2-ae0d-c6e3649dcc9c" />
</ConteXtorStudio>