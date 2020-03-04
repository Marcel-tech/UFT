Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("namePrefix").Select DataTable("prefix",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("firstName").Set DataTable("firstName",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("middleName").Set DataTable("middleInitial",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("lastName").Set DataTable("lastName",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("nameSuffix").Select DataTable("suffix",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("gender").Select DataTable("gender",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mothersMaidenName").Set DataTable("maidenName",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mainPhoneNumber").Set DataTable("phone",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("businessPhoneNumber").Set DataTable("mobilePhone",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mobilePhoneNumber").Set DataTable("businessPhone",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("businessExtension").Set DataTable("businessPhoneExtension",dtGlobalSheet)

Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("taxIdNumber").Set DataTable("taxId",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("taxIdNumberVerify").Set DataTable("taxIdVerify",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("dateOfBirthString").Set DataTable("DOB",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("email").Set DataTable("email",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("emailVerify").Set DataTable("emailVerify",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("occupation").Select DataTable("occupation",dtGlobalSheet)

Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebCheckBox("backupWithholdingOverride").Set DataTable("backupWithholding",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebRadioGroup("residencyStatus").Select DataTable("yearAtAddress",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("citizenshipCountry").Select DataTable("citizenshipCountry",dtGlobalSheet)

Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("otherIdNumber").Set DataTable("idNumber",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("otherIdIssueDateString").Set DataTable("dateIssued",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("otherIdExpirationDateString").Set DataTable("dateExpired",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("otherIdIssuer").Select DataTable("stateIssued",dtGlobalSheet)

Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mainAddress.addressLine1").Set DataTable("addressLine1", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mainAddress.addressLine2").Set DataTable("addressLine2", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("yearsAtAddress").Select DataTable("yearAtAddress", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mainAddress.city").Set DataTable("city", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("mainAddress.state").Select DataTable("DataTableNew_York_param_dtGlobalSheet", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mainAddress.zipCode").Set DataTable("zipCode", dtGlobalSheet)

Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("yearsAtAddress").Select DataTable("yearAtAddress",dtGlobalSheet)

Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("previousAddress.addressLine1").Set DataTable("previousAddress1", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("previousAddress.addressLine2").Set DataTable("previousAddress2", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("previousAddress.city").Set DataTable("previousCity", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("previousAddress.state").Select DataTable("previousState", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("previousAddress.zipCode").Set DataTable("previousZipCode", dtGlobalSheet)

Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebRadioGroup("mailAddressSameAsMain").Select "false"
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mailingAddress.addressLine1").Set DataTable("mailingAddress1", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mailingAddress.addressLine2").Set DataTable("mailingAddress2", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mailingAddress.city").Set DataTable("mailingCity", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("mailingAddress.state").Select DataTable("mailingState", dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("mailingAddress.zipCode").Set DataTable("mailingZipCode", dtGlobalSheet)


Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("userName").Set DataTable("userName",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("userNameVerify").Set DataTable("userNameVerify",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("password").SetSecure DataTable("password",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("passwordVerify").SetSecure DataTable("passwordVerify",dtGlobalSheet)

Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebList("secretQuestion").Select DataTable("secretQuestion",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebEdit("secretAnswer").Set DataTable("secretAnswer",dtGlobalSheet)
Browser("EmigrantDirect").Page("EmigrantDirect - Open").WebButton("Finish Later").Click

Browser("EmigrantDirect").Page("EmigrantDirect - Open").Check CheckPoint("EmigrantDirect - Required")
Browser("EmigrantDirect").Page("EmigrantDirect - Open").Check CheckPoint("EmigrantDirect - New Tax ID")
Browser("EmigrantDirect").Page("EmigrantDirect - Open").Check CheckPoint("EmigrantDirect - New User ID")
