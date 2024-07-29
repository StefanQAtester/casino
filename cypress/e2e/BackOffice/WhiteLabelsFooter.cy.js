describe('Navigate to White Labels General', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("open BackOffice and navigate to Footer page and check the text displayed in Footer matches with Casino", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains("Footer").click()
    cy.contains("ChipFling is owned and operated by ChipFling. registration number: 15647. Contact us support@chipfling.com. chipfling.com is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-062403015-FI6. chipfling.com has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.").should('be.visible')
    cy.visit("https://chipfling.com/")
    cy.contains("ChipFling is owned and operated by ChipFling. registration number: 15647. Contact us support@chipfling.com. chipfling.com is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-062403015-FI6. chipfling.com has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.").scrollIntoView().should('be.visible')
  })
  it("edit the footer text in BO and check the changes on Casino", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains("Footer").click()
    cy.contains("ChipFling is owned and operated by ChipFling. registration number: 15647. Contact us support@chipfling.com. chipfling.com is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-062403015-FI6. chipfling.com has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.").type(' Test')
    cy.contains("Save Footer").click()
    cy.visit("https://chipfling.com/")
    cy.contains("ChipFling is owned and operated by ChipFling. registration number: 15647. Contact us support@chipfling.com. chipfling.com is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-062403015-FI6. chipfling.com has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering. Test").scrollIntoView().should('be.visible')
  })
  it("edit footer text back to original and check on Casino they match", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains("Footer").click()
    cy.contains("ChipFling is owned and operated by ChipFling. registration number: 15647. Contact us support@chipfling.com. chipfling.com is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-062403015-FI6. chipfling.com has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering. Test").click().type('{end}')
    cy.contains("ChipFling is owned and operated by ChipFling. registration number: 15647. Contact us support@chipfling.com. chipfling.com is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-062403015-FI6. chipfling.com has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering. Test").type('{backspace}{backspace}{backspace}{backspace}')
    cy.contains("Save Footer").click()
    cy.visit("https://chipfling.com/")
    cy.contains("ChipFling is owned and operated by ChipFling. registration number: 15647. Contact us support@chipfling.com. chipfling.com is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-062403015-FI6. chipfling.com has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.").scrollIntoView().should('be.visible')
  })
   
})